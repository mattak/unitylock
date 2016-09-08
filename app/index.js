import React                from 'react'
import ReactDOM             from 'react-dom'
import { Provider }         from 'react-redux'
import { createStore }      from 'redux'
import injectTapEventPlugin from 'react-tap-event-plugin'
import MuiThemeProvider     from 'material-ui/styles/MuiThemeProvider'
import list                 from './reducers'
import App                  from './containers/App'
import search               from './action_creators/Search'
import login                from './action_creators/Login'

injectTapEventPlugin()

const store       = createStore(list)
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

render()
store.subscribe(render)

// initial request
search(store.dispatch)
// login(store.dispatch)
