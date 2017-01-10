import React from 'react'
import ReactDOM from 'react-dom'
import { Router, browserHistory, Route, IndexRoute } from 'react-router'

// Styles
import css from './styles/style.styl'

// Components
import App from './App'
import PhotoGrid from './components/PhotoGrid'
import Single from './components/Single'

ReactDOM.render(
  <Router history={ browserHistory }>
    <Route path="/" component={ App }>
      <IndexRoute component={ PhotoGrid } />
      <Route path="/view/:postId" component={ Single } />
    </Route>
  </Router>,
  document.getElementById('root')
)
