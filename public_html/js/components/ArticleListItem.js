import React from 'react';
import styles from './articleListItem.css!css-modules';

export default class ArticleListItem extends React.Component {
    render() {
        return (
            <a href={this.props.key} className={styles.item}>
                <h2>{this.props.title}</h2>
                <aside className={styles.metadata}>{this.props.date}</aside>
            </a>
        );
    }
}
