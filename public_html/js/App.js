import React from 'react';

import Nav from './components/Nav';
import Header from './components/Header';
import ArticleSection from './components/ArticleSection';
import TextSection from './components/TextSection';
import ProjectSection from './components/ProjectSection';
import Footer from './components/Footer';
import './global/index';

export default class App extends React.Component {
    render() {
        return (
            <div>
                <Nav />

                <Header />

                {/*<ArticleSection />*/}

                <TextSection />

                {/*<ProjectSection />*/}

                <Footer />
            </div>
        );
    }
}
