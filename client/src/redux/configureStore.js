import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger/src'
import { composeWithDevTools } from 'redux-devtools-extension'
import history from "./features/history"
import users from "./features/users"


const logger = createLogger()

export const store = createStore(combineReducers({
  history,
  users,
}), composeWithDevTools(applyMiddleware(thunk, logger)))