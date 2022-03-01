import { ReactElement } from 'react';
import { GenericNode } from 'mystjs';

export type ReactLike = ReactElement | string | undefined;

export type Component = (
  node: GenericNode,
  children?: ReactLike | ReactLike[],
) => ReactLike;

export type NodeTypes = Record<string, Component>;
