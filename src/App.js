import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import StartPage from './page/StartPage';
import HomePage from './page/HomePage';

export default function App() {
  return (
    <BrowserRouter>
      <>
        <Switch>
          <Route path="/" component={StartPage} exact/>
          <Route path="/home/:username/:id" component={HomePage} />
        </Switch>
      </>
    </BrowserRouter>
  )
}
