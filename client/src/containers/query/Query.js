import React from 'react';
import {
  BrowserRouter,
  Route,
  Routes,
  useMatch,
  Link
} from 'react-router-dom';

export default function query() {
  return (
    <BrowserRouter>
        <h1 className="container__header">Query</h1>
        <div className='buttonContainer'>

        </div>
    </BrowserRouter>
  )
}
