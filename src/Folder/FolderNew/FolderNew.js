import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import React, { useState } from "react";
import Modal from 'Components/Modal';
import ParentFolder from './Forms/ParentFolder';
import FileExtension from './Forms/FileExtension';
import Type from './Forms/Type';
import Name from './Forms/Name';


const FolderNew = (props) => {
  const { tree, folders, branches, insertBranch, countId } = props;
  const [open, setOpen] = useState(false)
  const [branch, setBranch] = useState({
    id: '',
    label: '',
    type: 'folder',
    extension: '',
    subTree: [],
  });

  const [parentFolder, setParentFolder] = useState('');

  const handleSubmit = () => {
    branch.id = branches.toString();
    if (branch.type === 'file') {
      delete branch.subTree;
      insertBranch(tree, parentFolder, branch);
    }
    if (branch.type === 'folder') {
      delete branch.extension;
      branch.subTree = [];
      insertBranch(tree, parentFolder, branch);
    }
    countId();
  }

  const handleModal = () => {
    setOpen(!open)
  }

  return (
    <Modal handleModal={handleModal} open={open}>
      <Grid spacing={1} container>
        <Grid item xs={12}>
          <Type
            branch={branch}
            setBranch={setBranch} />
        </Grid>
        <Grid item xs={12}>
          <ParentFolder
            value={parentFolder}
            setParent={setParentFolder}
            options={folders} />
        </Grid>
        <Grid item xs={branch.type === 'file' ? 6 : 12}>
          <Name
            branch={branch}
            setBranch={setBranch} />
        </Grid>
        {branch.type === 'file' ? <Grid item xs={6}>
          <FileExtension
            branch={branch}
            setBranch={setBranch} />
        </Grid> : null}
        <Grid item>
          <Button onClick={handleSubmit} variant='outlined' color='primary' >Save</Button>
        </Grid>
        <Grid item xs={6}>
          <Button onClick={handleModal} variant='outlined' color='primary' >Close</Button>
        </Grid>
      </Grid>
    </Modal>
  );
}

export default FolderNew;