import React from 'react'
import ReactDOM from 'react-dom'
import { Router, browserHistory, Route, IndexRoute } from 'react-router'
import { Provider } from 'react-redux'
import store, { history } from './store'

// Styles
import css from './styles/style.styl'

// Components
import App from './App'
import PhotoGrid from './components/PhotoGrid'
import Single from './components/Single'

ReactDOM.render(
  <Provider store={ store }>
    <Router history={ history }>
      <Route path="/" component={ App }>
        <IndexRoute component={ PhotoGrid } />
        <Route path="/view/:postId" component={ Single } />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)
