import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';



const InputSectionFolder = () =>{

            const isEnabled = this.state.title.length > 0

            return (
                <div>
                    <Button
                        size="large"
                        variant='contained'
                        startIcon={<AddCircleOutlineIcon/>}
                        fullWidth
                        onClick={null}
                        style={{background: 'white'}}
                    >
                        New folder
                    </Button>
                    <Dialog open={null} onClose={null} aria-labelledby="form-dialog-title">
                        <DialogTitle id="form-dialog-title">Folder name</DialogTitle>
                        <DialogContent>
                            <TextField
                                autoFocus
                                variant="outlined"
                                margin="dense"
                                name='title'
                                label="Name"
                                type="text"
                                value={null}
                                onChange={null}
                                fullWidth
                            />
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={null} color="primary">
                                Cancel
                            </Button>
                            <Button disabled={!isEnabled} onClick={null} color="primary">
                                Create
                            </Button>
                        </DialogActions>
                    </Dialog>
                </div>
            );}

export default InputSectionFolder
