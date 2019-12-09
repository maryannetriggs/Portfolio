import React from 'react'
import ReactDOM from 'react-dom'

import './style.scss'

class App extends React.Component {
  render() {
    return (
      <>
        <nav>
          <a>About</a>
          <a>Projects</a>
          <a>Contact</a>
        </nav>
        <h1>Nice To Meet You</h1>
      </>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)