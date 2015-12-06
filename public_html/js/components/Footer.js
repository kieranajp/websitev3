import React from 'react';
import styles from './footer.css!css-modules';

export default class Footer extends React.Component {
    render() {
        return (
            <footer className={styles.footer}>
                <ul className={styles.list}>
                    <li><a href="https://twitter.com/kieranajp">Twitter</a></li>
                    <li><a href="http://blog.kieranajp.co.uk">Tumblr</a></li>
                    <li><a href="https://www.instagram.com/kieran/">Instagram</a></li>
                    <li><a href="https://github.com/kieranajp">Github</a></li>
                    <li><a href="https://linkedin.com/in/kieranajp">LinkedIn</a></li>
                    <li><a href="https://last.fm/user/kieranajp">Last.fm</a></li>
                </ul>
            </footer>
        );
    }
}
