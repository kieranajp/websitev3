import React from 'react';
import styles from './section.css!css-modules';

import ArticleListItem from './ArticleListItem';

export default class ArticleSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = { articles: [] };
    }

    componentDidMount() {
        this.setState({
            articles : [{
                title: 'Test 1',
                date: '12th December 2014',
                slug: '/test1'
            },
            {
                title: 'Test 2',
                date: '12th December 2014',
                slug: '/test2'
            },
            {
                title: 'Test 3',
                date: '12th December 2014',
                slug: '/test3'
            }]
        });
    }

    render() {
        const articles = this.state.articles.map(article => <ArticleListItem key={article.slug} title={article.title} date={article.date} />);

        return (
            <section className={styles.section}>
                <h1 className={styles.title}>Articles</h1>

                {articles}
            </section>
        );
    }
}
