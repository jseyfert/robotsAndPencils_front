import React from 'react';
// import logo from './logo.svg';
import SimpleTable from './components/SimpleTable';
import Container from '@material-ui/core/Container';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <h1>SpaceX Launches</h1>
        <Container >
          
          <SimpleTable />
        </Container>
      {/* </header> */}
    </div>
  );
}

export default App;
