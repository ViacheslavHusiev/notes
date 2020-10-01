import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import {useDispatch, useSelector} from "react-redux";
import folderActions from "../redux/actions/folderActions";
import folderInputActions from "../redux/actions/folderInputActions";
import EditIcon from '@material-ui/icons/Edit';



const InputSectionFolder = () =>{
    const id = useSelector(state => state.foldersInputReducer.id);
    const title = useSelector(state => state.foldersInputReducer.title);
    const open = useSelector(state => state.openDialogReducer.open)
    const dispatch = useDispatch();

    const addFolder = () => {
        if (title){
            dispatch(folderActions.addFolder({
                title
            }))

            dispatch(folderInputActions.resetInputs())
        }
        handleClickClose()
    }

    const editFolder = () => {
        if (title){
            dispatch(folderActions.editFolder(id, {
                title,
            }))
        }
        dispatch(folderInputActions.resetInputs())
        handleClickClose()
    }

    const deleteFolder = () =>{
        dispatch(folderActions.deleteFolder(id))
        dispatch(folderInputActions.resetInputs())
    }

    const handleClickOpen = () => {
        dispatch(folderActions.openDialog(open))
    };

    const handleClickClose = () => {
        dispatch(folderActions.closeDialog(open))
    };

    const isEnabled = title.length > 0

            return (
                <div>
                    <div>
                        <Button
                            size="large"
                            variant='contained'
                            startIcon={id === -1 ? <AddCircleOutlineIcon/> : <EditIcon/>}
                            fullWidth
                            onClick={id === -1 ? handleClickOpen : handleClickOpen}
                            style={id ===-1 ? {background: 'white'} : {background: '#b3e5fc'}}
                        >
                            {id === -1 ? 'NEW FOLDER' : 'EDIT FOLDER'}
                        </Button>
                        {id !== -1 &&
                        <Button
                            onClick={deleteFolder}
                            size="large"
                            variant='contained'
                            fullWidth
                            style={{background: '#f27573'}}
                        >
                            DELETE FOLDER
                        </Button>
                        }
                    </div>
                    <Dialog open={open} onClose={handleClickClose} aria-labelledby="form-dialog-title">
                        <DialogTitle id="form-dialog-title">Folder name</DialogTitle>
                        <DialogContent>
                            <TextField
                                autoFocus
                                variant="outlined"
                                margin="dense"
                                name='title'
                                label="Name"
                                type="text"
                                value={title}
                                onChange={e =>
                                    dispatch(folderInputActions.setInputTitle(e.target.value))
                                }
                                fullWidth
                            />
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleClickClose} color="primary">
                                Cancel
                            </Button>
                            <Button  disabled={!isEnabled} onClick={id ===-1 ? addFolder : editFolder} color="primary">
                                {id === -1 ? 'Create' : 'EDIT'}
                            </Button>
                        </DialogActions>
                    </Dialog>
                </div>
            );}

export default InputSectionFolder
