import React                from 'react'
import ReactDOM             from 'react-dom'
import { createStore }      from 'redux'
import injectTapEventPlugin from 'react-tap-event-plugin'
import list                 from './reducers'
import App                  from './containers/App'

injectTapEventPlugin()

const store       = createStore(list)
const rootElement = document.getElementById('root')

function render()
{
  ReactDOM.render(
      <App state={store.getState()} />,
      rootElement
  )
}

render()
store.subscribe(render)
