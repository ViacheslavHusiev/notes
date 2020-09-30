import React from "react";
import ListItem from '@material-ui/core/ListItem';
import makeStyles from "@material-ui/core/styles/makeStyles";
import ListItemText from "@material-ui/core/ListItemText";

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
}));

export default ({folder}) => {
    const classes = useStyles();


    const [selectedIndex, setSelectedIndex] = React.useState(1);

    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
     };

    return (
        <ListItem
            className={classes.root}
            button
            selected={selectedIndex === 2}
            onClick={(event) => handleListItemClick(event, 2)}
        >
            <ListItemText primary={folder.title} />
        </ListItem>
    )
}

