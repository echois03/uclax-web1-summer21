import React from 'react';

import Essay from './Essay.jsx';

const Homework = () => {
    return (
        <div>
            HOMEWORK
            <Essay
                number={1}
                question='What is the difference between Git, GitHub and Heroku?'
            >
                Git is a method of local version control of a developer's source code. Git allows us to write in increments, share the code to other locations and people. In a team, multiple developers can be code on their local machines and use Git to pull other developer's code into their branches. Developers can likewise push their code to other developers in locations like GitHub. GitHub is a cloud-based platform that stores code repositories. Developers can use GitHub as their remote repository before deploying their code to a server for interpretation, such as Heroku. Heroku is a container-based cloud platform that deploys, manages and scales applications on servers owned by Heroku. 
            </Essay>
            <Essay
                number={2}
                question='Explain the difference between HTML, CSS and JS.'
            >
                Answer 2  
            </Essay>
        </div>
    );
}

export default Homework;