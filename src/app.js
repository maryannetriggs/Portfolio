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
        <div className="welcome-text">
          <h2>Nice To Meet You</h2>
        </div>
      </>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)