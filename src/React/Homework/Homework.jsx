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
                HTML is the basic, typically unformatted content of a webpage. CSS is the visual styling of a webpage, including colors, fonts, etc. JavaScript is the interactive behavior of elements on a webpage. <p>If we take a button as an example, the fact that a button exists on the webpage is done by HTML. What color and shape the button is, is done by CSS. What happens when you hover over the button, click it or hold it, is done by JavaScript.</p>
            </Essay>
            <Essay
                number={3}
                question='What are Single Page Apps (SPAs)? How do they differ from traditional multi-page Web Sites?'
            >
                Answer
            </Essay>
        </div>
    );
}

export default Homework;