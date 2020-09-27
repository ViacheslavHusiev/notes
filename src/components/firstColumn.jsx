import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import FoldersForm from "../foldersLogic/folderForm";
import Folders from "../foldersLogic/folders";

const useStyles = makeStyles((teme) => ({
    root: {
        width: '100%',
        height: 820,
        backgroundColor: '#f5f5f5',
        marginTop: 2,
    }
}));

const FirstColumn = () => {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <List component="content">
                <div style={{height:760}}>
                    <Folders />
                </div>
            </List>
                <FoldersForm/>
        </div>
    );
}
export default FirstColumn;