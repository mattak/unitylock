import React                from 'react'
import ReactDOM             from 'react-dom'
import { Provider }         from 'react-redux'
import { compose, createStore } from 'redux'
import persistState         from 'redux-localstorage'
import injectTapEventPlugin from 'react-tap-event-plugin'
import MuiThemeProvider     from 'material-ui/styles/MuiThemeProvider'

import reducers             from './reducers'
import App                  from './containers/App'
import search               from './action_creators/Search'
import login                from './action_creators/Login'
import snack_message        from './action_creators/SnackMessage'

injectTapEventPlugin()

const enhancer = compose(persistState('user'))
const store    = createStore(reducers, enhancer)
const rootElement = document.getElementById('root')

function render()
{
  ReactDOM.render(
      <MuiThemeProvider>
        <Provider store={store}>
          <App />
        </Provider>
      </MuiThemeProvider>,
      rootElement
  )
}

if (store.state) {
  console.log("logined user: " + store.state.user);
}

render()
store.subscribe(render)

// initial request
search(store.dispatch).then((_) => 
  snack_message(store.dispatch, 'Welcome! ' + store.getState().user)
)

