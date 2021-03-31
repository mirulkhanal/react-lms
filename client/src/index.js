import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import axios from 'axios'
import { BrowserRouter as Router } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'

// allowing axios to set cookies
axios.defaults.withCredentials = true

ReactDOM.render(
  <Router>
    <AuthProvider>
      <App />
    </AuthProvider>
  </Router>,
  document.getElementById('root')
)
