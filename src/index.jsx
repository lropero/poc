import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  useEffect(() => {
    console.log('SUCCESS')
  }, [])
  return <p>TEST</p>
}

if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
  ReactDOM.render(<App />, document.getElementById('app'))
}

export default App
