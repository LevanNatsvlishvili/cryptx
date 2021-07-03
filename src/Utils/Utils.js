export const filterFolders = (nodes, opts) => {
  return nodes.map((node) => {
    if (node.type === 'folder') {
      opts.push(node)
    }
    if (Array.isArray(node.subTree)) {
      filterFolders(node.subTree)
    }
    return true;
  });

};


export const searchFolders = (nodes, id, newValue) => {
  nodes.map((node) => {
    if (node.id === id) {
      // console.log(node.subTree);
      node.subTree.push(newValue)
      return true;
    }
    if (Array.isArray(node.subTree)) {
      searchFolders(node.subTree, id, newValue)
    }
    return false;
  });
};