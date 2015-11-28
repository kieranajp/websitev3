import React from 'react';
import styles from './section.css!css-modules';

import ProjectListItem from './ProjectListItem';

export default class TextSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = { projects: [] };
    }

    componentDidMount() {
        this.setState({
            projects : [{
                title: 'Bonzo\'s Babies',
                description: 'An online dating profile for Bonzo',
                slug: '/test1',
                image: 'http://placehold.it/200x150'
            },
            {
                title: 'Ralph\'s Rides',
                description: 'An online store for Ralph',
                slug: '/test2',
                image: 'http://placehold.it/200x150'
            },
            {
                title: 'Merlin\'s Modelling',
                description: 'A website for Merlin',
                slug: '/test3',
                image: 'http://placehold.it/200x150'
            }]
        });
    }

    render() {
        const projects = this.state.projects.map(project => {
            return (
                <ProjectListItem
                    key={project.slug}
                    title={project.title}
                    description={project.description}
                    image={project.image} />
            )
        });

        return (
            <section className={styles.section}>
                <h1 className={styles.title}>Projects</h1>

                {projects}
            </section>
        );
    }
}
