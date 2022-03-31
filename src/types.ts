import React from 'react';
import * as spec from 'myst-spec';

export type Component<T = any> = (
  node: T & { type: string; key: string },
  children?: React.ReactNode,
) => React.ReactNode;

type TableExts = {
  rowspan?: number;
  colspan?: number;
};

export type NodeTypes = {
  strong: Component<spec.Strong>;
  // strike
  emphasis: Component<spec.Emphasis>;
  inlineCode: Component<spec.InlineCode>;
  link: Component<spec.Link>;
  paragraph: Component<spec.Paragraph>;
  heading: Component<spec.Heading>;
  break: Component<spec.Break>;
  code: Component<spec.Code>;
  inlineMath: Component<spec.InlineMath>;
  math: Component<spec.Math>;
  list: Component<spec.List>;
  listItem: Component<spec.ListItem>;
  container: Component<spec.Container>;
  image: Component<spec.Image>;
  caption: Component<spec.Caption>;
  blockquote: Component<spec.Blockquote>;
  admonition: Component<spec.Admonition>;
  admonitionTitle: Component<spec.AdmonitionTitle>;
  thematicBreak: Component<spec.ThematicBreak>;
  crossReference: Component<spec.CrossReference>;
  subscript: Component<spec.Subscript>;
  superscript: Component<spec.Superscript>;
  footnoteReference: Component<spec.FootnoteReference>;
  abbr: Component<spec.Abbreviation>;
  // Tables
  table: Component<spec.Table>;
  tableRow: Component<spec.TableRow>;
  tableCell: Component<spec.TableCell & TableExts>;
  // captionNumber: Component<spec.CaptionNumber>;
} & Record<string, Component>;
