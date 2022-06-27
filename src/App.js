// import logo from './logo.svg';
// import './App.css';
// import { useEffect, useState } from 'react';

// function App() {
//   const [data, setData] = useState(null);
//   const [toggle, setToggle] = useState(false);
//   const [inputValue, setInputValue] = useState('');

//   const onClick = () => {
//     setToggle((prev) => !prev);
//   };

//   useEffect(() => {
//     setTimeout(() => {
//       setData({});
//     }, 100);
//   }, []);

//   const handleInput = (e) => {
//     setInputValue(e.target.value);
//   };

//   return (
//     <div className="App">
//       <h1 data-testid="value-elem">{inputValue}</h1>
//       {toggle === true && <div data-testid="toggleDiv">toggle value</div>}
//       {data && (
//         <div style={{ color: 'red' }} className="active">
//           data
//         </div>
//       )}
//       <h1>Hello</h1>
//       <button onClick={onClick} data-testid="toggleBtn">
//         click
//       </button>
//       <input
//         type="text"
//         placeholder="input..."
//         value={inputValue}
//         onChange={handleInput}
//       />
//     </div>
//   );
// }

// export default App;

import React from 'react';

import { Navbar } from './components/Navbar/Navbar';
import { AppRouter } from './router/AppRouter';

export const App = () => {
  return (
    <>
      <Navbar />
      <AppRouter />
    </>
  );
};
