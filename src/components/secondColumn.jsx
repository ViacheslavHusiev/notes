import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';


const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        height: 820,
        backgroundColor: '#f5f5f5',
        marginTop: 2,
    },

    buttonColor: {
        background: 'white',
    }
}));

const SecondColumn = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <List component="nav">

            </List>
        </div>
    );
}
export default SecondColumn;