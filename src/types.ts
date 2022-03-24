import React from 'react';
import type { GenericNode } from 'mystjs';

export type Component = (
  node: GenericNode,
  children?: React.ReactNode,
) => React.ReactNode;

export type NodeTypes = Record<string, Component>;
