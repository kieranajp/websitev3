import React from 'react';
import styles from './nav.css!css-modules';

export default class Nav extends React.Component {
    render() {
        return (
            <nav className={styles.nav}>
                <h1 className={styles.title}>
                    <a href="/" className={styles.link}>
                        Kieran Patel
                    </a>
                </h1>

                {/*<ul className={styles.navList}>
                    <li>
                        <a href="/articles" className={styles.link}>
                            Articles
                        </a>
                    </li>
                </ul>*/}
            </nav>
        );
    }
}
