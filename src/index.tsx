import type { GenericParent } from 'mystjs';
import { useMemo } from 'react';
import { defaultNodes } from './nodes';
import { mystToReact } from './convertToReact';
import type { NodeRenderer } from './types';

export type { NodeRenderer, NodeRenderers } from './types';

export const nodes = { ...defaultNodes };

export function useParse(
  node: GenericParent,
  replacements: Record<string, NodeRenderer> = defaultNodes,
) {
  const nodes = useMemo(() => mystToReact(node, replacements), [node, replacements]);
  return nodes;
}
