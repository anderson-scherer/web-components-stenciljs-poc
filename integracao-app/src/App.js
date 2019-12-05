import React from 'react';
import logo from './logo.svg';
import './App.css';
import '@andersonscherer/web-components-uni'

function App() {

  const loopvariaveis = [
    {
      width: '800px',
      color: 'purple',
      label: 'Lorem Ipsum',
      description: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...'
    },
    {
      width: '800px',
      color: 'aquamarine',
      label: 'Lorem Ipsum - 1',
      description: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...'
    }
  ];

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <hello-world></hello-world>
        {
          loopvariaveis.map((array) => {
            return (
              <tag-accordion
                label={array.label}
                description={array.description}
                color={array.color}
                width={array.width}>
              </tag-accordion>
            )
          })
        }
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
