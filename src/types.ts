import React from 'react';
import * as spec from 'myst-spec';

export type NodeRenderer<T = any> = (
  node: T & { type: string; key: string },
  children?: React.ReactNode,
) => React.ReactNode;

type TableExts = {
  rowspan?: number;
  colspan?: number;
};

export type NodeRenderers = {
  strong: NodeRenderer<spec.Strong>;
  // strike
  emphasis: NodeRenderer<spec.Emphasis>;
  inlineCode: NodeRenderer<spec.InlineCode>;
  link: NodeRenderer<spec.Link>;
  paragraph: NodeRenderer<spec.Paragraph>;
  heading: NodeRenderer<spec.Heading>;
  break: NodeRenderer<spec.Break>;
  code: NodeRenderer<spec.Code>;
  inlineMath: NodeRenderer<spec.InlineMath>;
  math: NodeRenderer<spec.Math>;
  list: NodeRenderer<spec.List>;
  listItem: NodeRenderer<spec.ListItem>;
  container: NodeRenderer<spec.Container>;
  image: NodeRenderer<spec.Image>;
  caption: NodeRenderer<spec.Caption>;
  blockquote: NodeRenderer<spec.Blockquote>;
  admonition: NodeRenderer<spec.Admonition>;
  admonitionTitle: NodeRenderer<spec.AdmonitionTitle>;
  thematicBreak: NodeRenderer<spec.ThematicBreak>;
  crossReference: NodeRenderer<spec.CrossReference>;
  subscript: NodeRenderer<spec.Subscript>;
  superscript: NodeRenderer<spec.Superscript>;
  footnoteReference: NodeRenderer<spec.FootnoteReference>;
  abbr: NodeRenderer<spec.Abbreviation>;
  // Tables
  table: NodeRenderer<spec.Table>;
  tableRow: NodeRenderer<spec.TableRow>;
  tableCell: NodeRenderer<spec.TableCell & TableExts>;
  // captionNumber: Component<spec.CaptionNumber>;
} & Record<string, NodeRenderer>;
