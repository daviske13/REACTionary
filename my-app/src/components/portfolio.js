import React from 'react';

const Portfolio = () => {
    return (
        <section id="portfolio">
            <h2>Portfolio</h2>
                <div className="project">
                    <h3>Project 1</h3>
                    <p>Description of the project.</p>
                    <a href="projects/demo.html">Demo</a>
                    <a href="projects/github.html">GitHub</a>
                </div>
        {/* Repeat the project div for other projects */}
        </section>
    );
};

export default Portfolio;
