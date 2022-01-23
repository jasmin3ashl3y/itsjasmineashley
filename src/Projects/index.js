import React from 'react';


function Projects(props) {
    const { currentCategory } = props;
    return (
        <div>
            <h1>{capitalizeFirstLetter(currentCategory.name)}</h1>
            <p>{currentCategory.description}</p>
        </div>
    )
}

export default Projects;