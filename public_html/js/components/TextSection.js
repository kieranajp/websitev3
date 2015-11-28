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
                    While I spend most of my time in back-end development, I&rsquo;d consider myself almost as strong at front-end stuff as well. This site, for example, is using (at time of writing) some pretty bleeding-edge stuff: React, PostCSS and CSS Modules, JSPM and System.JS, with more to come in future. Check out its development on <a href="https://github.com/kieranajp/websitev3">Github</a>.
                </p>
            </section>
        );
    }
}
