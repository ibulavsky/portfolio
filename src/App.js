import React from 'react';
import './App.css';
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";
import AboutMe from "./components/aboutMe/AboutMe";
import Contacts from "./components/contacts/Contacts";
import Footer from "./components/footer/Footer";
import ParticlesContainer from "./common/ParticlesContainer"
import BurgerMenuWrapper from "./components/header/burgerMenu/BurgerMenu"

const App = () => (
    <div className="App">
        <div className="portfolio">
            <ParticlesContainer/>
            <BurgerMenuWrapper/>
            <Header/>
            <Main/>
            <Skills/>
            <Projects/>
            <AboutMe/>
            <Contacts/>
            <Footer/>
        </div>
    </div>
)

export default App;
