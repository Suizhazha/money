import React from 'react';
import './App.css';
import styled from 'styled-components'

const Box = styled.div `
 border: 1px solid red;
 min-width: 300px;
 min-height: 300px;
 margin: 20px;
 box-shadow:  0 0 3px rgba(0,0,0,0.5);
`

function App() {
  return (
    <div >
      <Box>xxx</Box>
    </div>
  );
}

export default App;
