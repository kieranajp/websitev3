import React from 'react';
import styles from './header.css!css-modules';

export default class Header extends React.Component {
    render() {
        return (
            <header className={styles.header}>
                <hgroup className={styles.hgroup}>
                    <p>My name is</p>
                    <h1 className={styles.title}>Kieran Patel</h1>
                    <p>and I make websites.</p>
                </hgroup>

                <a className={styles.link}>
                    Would you like to know more?
                    <br />
                    <span>&darr;</span>
                </a>
            </header>
        );
    }
}
