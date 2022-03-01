import { createElement as e } from 'react';
import classNames from 'classnames';
import { NodeTypes } from './types';

function getCaptionStart(kind?: string) {
  switch (kind) {
    case 'figure':
      return 'Figure';
    case 'table':
      return 'Table';
    default:
      return 'Unknown';
  }
}

export const defaultNodes: NodeTypes = {
  strike(node, children) {
    return <del key={node.key}>{children}</del>;
  },
  strong(node, children) {
    return <strong key={node.key}>{children}</strong>;
  },
  emphasis(node, children) {
    return <em key={node.key}>{children}</em>;
  },
  inlineCode(node, children) {
    return <code key={node.key}>{children}</code>;
  },
  link(node, children) {
    return (
      <a key={node.key} target="_blank" href={node.url}>
        {children}
      </a>
    );
  },
  paragraph(node, children) {
    return <p key={node.key}>{children}</p>;
  },
  heading(node, children) {
    // TODO: Add node ID here
    return e(`h${node.depth}`, { key: node.key, id: node.key }, children);
  },
  break(node) {
    return <br key={node.key} />;
  },
  code(node) {
    return (
      <pre key={node.key}>
        <code>{node.value}</code>
      </pre>
    );
  },
  inlineMath(node) {
    return <code key={node.key}>{node.value}</code>;
  },
  math(node) {
    return <code key={node.key}>{node.value}</code>;
  },
  list(node, children) {
    if (node.ordered) {
      return <ol key={node.key}>{children}</ol>;
    }
    return <ul key={node.key}>{children}</ul>;
  },
  listItem(node, children) {
    return <li key={node.key}>{children}</li>;
  },
  container(node, children) {
    return (
      <figure key={node.key} id={node.identifier}>
        {children}
      </figure>
    );
  },
  image(node) {
    return <img key={node.key} src={node.url} />;
  },
  caption(node, children) {
    return <figcaption key={node.key}>{children}</figcaption>;
  },
  blockquote(node, children) {
    return <blockquote key={node.key}>{children}</blockquote>;
  },
  // iframe: IFrame,
  admonition(node, children) {
    return (
      <aside key={node.key} className={classNames('admonition', node.kind)}>
        {children}
      </aside>
    );
  },
  admonitionTitle(node, children) {
    return (
      <p key={node.key} className="admonition-title">
        {children}
      </p>
    );
  },
  thematicBreak(node) {
    return <hr key={node.key} />;
  },
  contentReference(node, children) {
    return (
      <a key={node.key} href={`#${node.identifier}`}>
        {children}
      </a>
    );
  },
  captionNumber(node, children) {
    return (
      <span key={node.key} className="caption-number">
        {getCaptionStart(node.kind)} {children}:
      </span>
    );
  },
  table(node, children) {
    return <table key={node.key}>{children}</table>;
  },
  tableRow(node, children) {
    return <tr key={node.key}>{children}</tr>;
  },
  tableCell(node, children) {
    return <td key={node.key}>{children}</td>;
  },
  subscript(node, children) {
    return <sub key={node.key}>{children}</sub>;
  },
  superscript(node, children) {
    return <sup key={node.key}>{children}</sup>;
  },
  footnoteReference(node) {
    return <sup key={node.key}>[1]</sup>;
  },
  abbr(node, children) {
    return (
      <abbr key={node.key} title={node.title}>
        {children}
      </abbr>
    );
  },
};
