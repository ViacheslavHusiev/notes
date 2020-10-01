import {compose, createStore} from "redux";
import rootReducers from './reducers'

export default createStore(rootReducers, compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))