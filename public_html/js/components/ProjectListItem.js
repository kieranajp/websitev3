import React from 'react';
import styles from './projectListItem.css!css-modules';

export default class ProjectListItem extends React.Component {
    render() {
        return (
            <div className={styles.item}>
                <img src={this.props.image} />
            </div>
        );
    }
}
