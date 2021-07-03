import React from "react";
import { Item, Tree } from 'Components/Tree';

const FolderTree = (props) => {
  const { tree } = props;

  const renderTree = (nodes) => {
    return nodes.map((node) => {
      return (
        <Item
          key={node.id}
          nodeId={node.id}
          label={node.label}
          type={node.type}
        >
          {Array.isArray(node.subTree) ? renderTree(node.subTree) : null}
        </Item>
      );
    });
  };

  return (
    <Tree>
      {renderTree(tree)}
    </Tree>
  );
}

export default FolderTree;