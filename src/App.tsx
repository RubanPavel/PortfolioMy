import React from 'react';
import s from './App.module.css';
import Header from './components/header/Header'
import {Content} from "./components/content/Content/Content";
import Footer from "./components/footer/Footer";
import Header2 from "./components/header/Header2";


function App() {
    return (
        <div className={s.appWrapper}>
            <Header />
            <Header2 />
            <div className={s.bodyWrapper}>
                <Content/>

                <Footer/>
            </div>

        </div>

    );
}

export default App;
