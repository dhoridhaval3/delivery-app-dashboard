import thunk from 'redux-thunk';
import { applyMiddleware, createStore } from 'redux';
import rootReducer from '../reducer/rootReducer';

export const store = createStore(rootReducer, applyMiddleware(thunk));

// export type RootState = ReturnType<typeof store.getState>;
