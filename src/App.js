import React from 'react';
import './styles/App.css';
import Header from "./components/header";
import About from "./components/about";
import Projects from "./components/projects";
import Contact from "./components/contact";
import Footer from "./components/footer";

const App= () => (
    <div className="App">
        <Header />
        <main>
            <About />
            <Projects />
            <Contact />
        </main>
        <Footer />
    </div>
);

export default App;
