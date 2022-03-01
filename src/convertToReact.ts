import { createElement as e } from 'react';
import { Component, NodeTypes, ReactLike } from './types';
import { GenericNode } from 'mystjs';

export function toReact(
  fragment: GenericNode[],
  replacements: NodeTypes,
): ReactLike[] | undefined {
  if (fragment.length === 0) return undefined;
  return fragment.map((node) => {
    if (node.type === 'text') return node.value;
    const custom = replacements[node.type as keyof NodeTypes] as Component | undefined;
    if (node.children) {
      const children = toReact(node.children, replacements);
      if (custom) {
        return custom(node, children);
      }
      return e('div', { key: node.key }, children);
    }
    if (custom) {
      return custom(node, node.value);
    }
    return e('span', { children: node.value, key: node.key });
  });
}

export function mystToReact(
  content: GenericNode,
  replacements: NodeTypes,
): ReactLike[] | undefined {
  return toReact(content.children ?? [], replacements);
}
