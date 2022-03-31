import React, { createElement as e } from 'react';
import { NodeRenderer, NodeRenderers } from './types';
import type { GenericNode } from 'mystjs';

export function toReact(
  fragment: GenericNode[],
  replacements: NodeRenderers,
): React.ReactNode {
  if (fragment.length === 0) return undefined;
  return fragment.map((node) => {
    if (node.type === 'text') return node.value;
    const custom = replacements[node.type as keyof NodeRenderers] as
      | NodeRenderer
      | undefined;
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
  replacements: NodeRenderers,
): React.ReactNode {
  return toReact(content.children ?? [], replacements);
}
