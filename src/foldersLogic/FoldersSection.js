import React from "react";
import {connect} from 'react-redux'
import Folder from './folderItem'
import Typography from '@material-ui/core/Typography';

const Folders = ({addFolders}) => {
    if (!addFolders.length){
        return <Typography variant="h6">No folders yet</Typography>
    }
    return addFolders.map(folder => <Folder folder={folder} key={folder.id} />)
}

const mapStateToProps = state => {
    return {
        addFolders: state.folders.folders
    }
}

export default connect(mapStateToProps,null)(Folders)