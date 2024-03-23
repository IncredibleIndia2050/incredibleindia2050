import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  HashRouter,
  Routes,
  Route,
} from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import Contact from './components/contact/contact';
import 'bootstrap/dist/css/bootstrap.css';
import StateGuide from './states/state';



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
          <Route path="/" element={<App />} />
          <Route path="/contacts/:contactId" element={<Contact />} />
          <Route path="/:country/:state/:city" element={<StateGuide />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
