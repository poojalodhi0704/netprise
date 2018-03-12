import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import createHistory from 'history/createBrowserHistory';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import reducers from '../redux/reducers';
import rootSaga from '../redux/sagas';

const history = createHistory();
const sagaMiddleware = createSagaMiddleware();
const middlewares = [thunk, sagaMiddleware];
if(process.env.NODE_ENV === 'development'){
	middlewares.push(logger);
}

const store = createStore(
	combineReducers({
		...reducers,

	}),
	compose(applyMiddleware(...middlewares))
	);
sagaMiddleware.run(rootSaga);

export {store ,history};