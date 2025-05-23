npm create vite@latest my-react-app -- --template react
cd my-react-app
npm install
npm run dev
Pouria mohebbi, [5/23/2025 1:07 PM]
import React from 'react';

function HelloWorld() {
  return <h1>Hello, World!</h1>;
}

export default HelloWorld;

Pouria mohebbi, [5/23/2025 1:07 PM]
import React from 'react';
import HelloWorld from './HelloWorld';

function App() {
  return (
    <div>
      <HelloWorld />
    </div>
  );
}

export default App;