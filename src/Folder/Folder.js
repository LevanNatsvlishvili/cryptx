import Box from "@material-ui/core/Box";
import React, { useEffect, useState } from "react";
import FolderTree from './FolderTree';
import FolderNew from "./FolderNew/";

const Folder = () => {
  const [opts, setOpts] = useState([]);
  const [branches, setBranches] = useState(8);
  const [tree, setTree] = useState([
    {
      id: '0', label: 'Tree 1', type: 'folder', subTree: [
        { id: '2', label: 'Tree 3', type: 'file' },
        {
          id: '3', label: 'Tree 4', type: 'folder', subTree: [
            { id: '4', label: 'Tree 5', type: 'file', subTree: [] },
          ]
        },
        {
          id: '5', label: 'Tree 6', type: 'folder', subTree: [
            { id: '6', label: 'Tree 7', type: 'file' },
            { id: '7', label: 'Tree 8', type: 'folder', subTree: [] },
          ]
        },
      ]
    },
    { id: '1', label: 'Tree 2', type: 'file' },
  ]);

  const countId = () => {
    setBranches(branches + 1);
  }



  const insertBranch = (nodes, id, newValue) => {
    if (Array.isArray(nodes)) nodes.map((node) => {
      if (node.id === id) {
        node.subTree.push(newValue);
        return true;
      }
      if (Array.isArray(node.subTree)) {
        insertBranch(node.subTree, id, newValue)
      }
      return false;
    });
    setTree([...tree]);
    return;
  };

  useEffect(() => {
    const filterFolders = (nodes) => {
      nodes.map((node) => {
        if (node.type === 'folder') {
          if (opts.indexOf(node) < 0) {
            opts.push(node)
            setOpts(opts)
          }
        }
        if (Array.isArray(node.subTree)) {
          filterFolders(node.subTree)
        }
        return true;
      });
      return;
    };

    filterFolders(tree);
  }, [tree])


  return (
    <div >
      <FolderNew
        insertBranch={insertBranch}
        folders={opts}
        countId={countId}
        branches={branches}
        tree={tree} />

      <Box mt={2} pl={1} border='1px solid black' width='400px' height='500px'>
        <FolderTree
          tree={tree} />
      </Box>
    </div>
  );
}

export default Folder;