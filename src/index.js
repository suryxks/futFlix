import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { DataProvider } from './contexts/DataContext';
import { AuthProvider } from './contexts/AuthContext';
import { LikedProvider } from './contexts/LikedContext'
import { PlaylistProvider } from './contexts/PlayListContext'
// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <DataProvider>
          <PlaylistProvider>
            <LikedProvider>
              <App />
            </LikedProvider>
          </PlaylistProvider>
        </DataProvider>
      </AuthProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
