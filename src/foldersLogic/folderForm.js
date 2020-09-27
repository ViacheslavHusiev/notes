import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import {createFolder} from "../redux/actions";
import {connect} from 'react-redux'


class FoldersForm extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            open: false
        }
        this.handleClose = this.handleClose.bind(this);
        this.handleClickOpen = this.handleClickOpen.bind(this);

    }



    handleClose() {
        this.setState({ open: false });
    }

    handleClickOpen() {
    this.setState({ open: true });
    }

    submitHandler = event => {
        event.preventDefault()

        const {title} = this.state

        const newFolder = {
            title,
            id: Date.now().toString()
        }

        this.props.createFolder(newFolder)
        this.handleClose()
        this.setState({title:''})
    }

    changeInputFolder = event => {
        event.persist()
        this.setState(prev =>({...prev, ...{
                [event.target.name]: event.target.value
            }}))
    }

    render() {
        const isEnabled = this.state.title.length > 0
        return (
            <div>
                <Button
                    size="large"
                    variant='contained'
                    startIcon={<AddCircleOutlineIcon/>}
                    fullWidth
                    onClick={(e) => { e.preventDefault(); this.handleClickOpen(); }}
                    style={{background: 'white'}}
                >
                    New folder
                </Button>
                <Dialog open={this.state.open} onClose={(e) => { e.preventDefault(); this.handleClose(); }} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">Folder name</DialogTitle>
                    <DialogContent>
                        <TextField
                            autoFocus
                            variant="outlined"
                            margin="dense"
                            name='title'
                            label="Name"
                            type="text"
                            value={this.state.title}
                            onChange={this.changeInputFolder}
                            fullWidth
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={(e) => { e.preventDefault(); this.handleClose(); }} color="primary">
                            Cancel
                        </Button>
                        <Button disabled={!isEnabled} onClick={this.submitHandler} color="primary">
                            Create
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}

const mapDispatchToProps = {
    createFolder: createFolder
}

export default connect(null, mapDispatchToProps)(FoldersForm)