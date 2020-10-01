import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import FolderItem from "./FolderItem";
import {useDispatch, useSelector} from "react-redux";
import folderInputActions from "../redux/actions/folderInputActions";

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        overflow: 'auto',
        height:730
    },
}));


const FoldersSection = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const folders = useSelector(state => state.foldersReducer.folders)
    // const select = useSelector(state => state.foldersInputReducer.select)

    const onItemClicked = (item, index) => {
        // dispatch(folderInputActions.resetInputs(item.select));
        // dispatch(folderInputActions.selectFolder(select));
        dispatch(folderInputActions.setInputId(index));
        dispatch(folderInputActions.setInputTitle(item.title));
    }

    if (folders.length === 0) {
        return (
            <div style={{
                paddingTop:5,
                alignItems: 'center',
                display: 'flex',
                color: 'gray'
            }}>
                <p>There is no folders yet.</p>
            </div>

        )
    }

    return (
        <div className={classes.root}>
            {folders.map((item, index) => {
                if(item) {
                    return (
                        <FolderItem
                            title={item.title}
                            // selected={select}
                            onItemClicked={() => {
                                onItemClicked(item, index)
                            }}
                        />
                    )
                }
                return null;
            })}
        </div>
    );
}


export default FoldersSection