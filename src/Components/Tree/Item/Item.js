import React from "react";
import TreeItem from '@material-ui/lab/TreeItem';
import DescriptionIcon from '@material-ui/icons/Description';
import FolderIcon from '@material-ui/icons/Folder';

const Item = (props) => {
  const { type, children, ...rest } = props;

  return (
    <TreeItem
      icon={type === 'file' ? <DescriptionIcon /> : <FolderIcon />}
      {...rest}
    >
      {children}
    </TreeItem>
  );
}

export default Item;