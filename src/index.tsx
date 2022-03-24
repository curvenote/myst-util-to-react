import type { GenericParent } from 'mystjs';
import { useMemo } from 'react';
import { defaultNodes } from './nodes';
import { mystToReact } from './convertToReact';
import type { NodeTypes } from './types';

export type { Component, NodeTypes } from './types';

export const nodes = { ...defaultNodes };

export function useParse(node: GenericParent, replacements: NodeTypes = defaultNodes) {
  const nodes = useMemo(() => mystToReact(node, replacements), [node, replacements]);
  return nodes;
}
