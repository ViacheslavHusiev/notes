import React from 'react';
import {Grid} from '@material-ui/core';
import Header from "./components/Header";
import FirstColumn from './components/firstColumn';
import SecondColumn from './components/secondColumn';
import ThirdColumn from './components/secondColumn';

class App extends React.Component {


    render() {
        return (
            <Grid container direction='column'>
                <Grid item>
                    <Header/>
                </Grid>
                <Grid spacing={1} style={{background: '#eeeeee'}} item container direction='row'>
                    <Grid item xs={4} lg={2}>
                        <FirstColumn/>
                    </Grid>
                    <Grid item xs={3} lg={3}>
                        <SecondColumn/>
                    </Grid>
                    <Grid item xs={5} lg={7}>
                        <ThirdColumn/>
                    </Grid>
                </Grid>
            </Grid>
        );
    }
}


export default App;
