import React from 'react'
import ReactDOM from 'react-dom'
import './scss/index.scss'
import App from './App'
import store, { persistor } from './store'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import UserFact from './pages/UserFact'
import { PersistGate } from 'redux-persist/integration/react'

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <React.StrictMode>
        <Router>
          <div>
            <Switch>
              <Route path="/fact/:id" component={UserFact} />
              <Route exact path="/" component={App} />
            </Switch>
          </div>
        </Router>
      </React.StrictMode>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
)
