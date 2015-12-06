import React from 'react';
import styles from './section.css!css-modules';

export default class TextSection extends React.Component {
    render() {
        return (
            <section className={styles.section}>
                <h1 className={styles.title}>About Me</h1>

                <p>
                    I am a web developer currently working in Canterbury, UK for a tiny three-person agency. I also sometimes develop websites as a freelancer, though I&rsquo;m currently not taking on new jobs.
                </p>

                <p>
                    While I spend most of my time in back-end development, I try to stay on top of recent developments in front-end stuff as well. With this site, I&rsquo;ve been experimenting with React, PostCSS and CSS Modules, JSPM, and System.JS. Check out its development on <a href="https://github.com/kieranajp/websitev3">Github</a>.
                </p>
            </section>
        );
    }
}
