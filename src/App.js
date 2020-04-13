// import useEffect hook
import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import NavMenu from './NavMenu';

// import Hub
import { Auth, Hub } from 'aws-amplify'


function App(props) {
    // in useEffect, we create the listener
  useEffect(() => {
    Hub.listen('auth', (data) => {
      const { payload } = data
      console.log('A new auth event has happened: ', data)
       if (payload.event === 'signIn') {
         console.log('a user has signed in!')
       }
       if (payload.event === 'signOut') {
         console.log('a user has signed out!')
       }
    })
  }, [])
  return (
    <div className="App">
        <NavMenu />
      <header className="App-header">
        
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        </p>
      </header>
    </div>
  )
}

export default App
