// // React와 ReactDOM을 선언해줘야 사용가능.
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App';


// // index.js는 자바스크립트 페이지
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

import React from "react";
import ReactDOM from "react-dom/client";
// 앞 글자가 대문자면 컴포넌트를 만들었다는 애기
import App from "./App.js";



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

