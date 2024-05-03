import React from 'react';
import ReactDOM from 'react-dom/client';
import 'antd/dist/reset.css';
import TodoList from './components/TodoList';
// import Page from './App';
import { Provider } from 'jotai'
import BigLayout from './components/BigLayout';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Provider>

        <BigLayout>
          <Routes>
            <Route path="/option1" element={<TodoList />} />


            {/* Other routes can go here */}
          </Routes>
        </BigLayout>

      </Provider>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

