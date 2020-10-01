import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputSectionFolder from "../foldersLogic/InputSectionFolder";
import FoldersSection from "../foldersLogic/FoldersSection";

const useStyles = makeStyles((theme) => ({
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
            <div style={{height:730}}>
                <FoldersSection />
            </div>
            <InputSectionFolder />
        </div>
    );
}
export default FirstColumn;