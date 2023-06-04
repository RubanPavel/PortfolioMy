import React from 'react';
import {Skills} from "../skills/Skills";
import {Examples} from "../examples/Examples";
import RemoteWork from "./RemoteWork";
import Home from "./Home";
import s from './Content.module.css'
import About from "./About";

export const Content = () => {
  return (
    <div className={s.contentWrapper}>
      <Home/>
      <About/>
      <Skills/>
      <Examples/>
      <RemoteWork/>
    </div>
  );
};

