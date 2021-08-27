import React from 'react';
import { useMediaQuery } from 'common/mediaQueries/useMediaQuery.js';

import Essay from './Essay.jsx';
import SunAndMoon from '../SunAndMoon/SunAndMoon.jsx'


const Homework = () => {

    const { media } = useMediaQuery();

    console.log('media', media);

    return (
        <div>
            
            { media.mdUp && <SunAndMoon /> }

            <h2>HOMEWORK</h2>
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
                SPAs are browser webpages that load all content upon landing, but dynamically serve the user content from the initial load. The data is loaded via API and JS.
            </Essay>
            <Essay
                number={4}
                question='What is the difference between Web Designer, Front End Developer and Back End Developer?'
            >
                A Web Designer, generally, creates the visual look and feel of a webpage. A front-end developer focuses on programming the user interactive components of the webpage, client-side. They usually focus on languages such as HTML, CSS and JS. A back-end developer focuses on programming the server-side logic, data, security and integration of the application. They typically work with PHP, Ruby, Python, Java and more.
            </Essay>
            <Essay
                number={5}
                question='Distinguish the difference between Site Relative, Document Relative, and Absolute Paths.'
            >
                A link is absolute if the entire URL path can be used to locate a specific web page. It includes the protocol and subfolder or subfile, if applicable. A link is relative if the link only specifies the name of the file or folder within the same document. Document-relative links are relative links from one page to another, within the same website. Site-relative links are similar, except that the link is relative to the website's root folder, containing the home page and all other folders of the site.
            </Essay>
            <Essay
                number={6}
                question='What is the difference between JPG, GIF, PNG and SVG images?'
            >
                <p>JPG, PNG and GIF are all rasterized images, meaning it is composed of colored pixels in a grid. JPGs use a "lossy" compression algorithm, meaning the quality of the image may be lost. GIFs use a "lessless" compression algorithm, supports transparency and animation, but have a limited color palette. PNGs are also "lossless" but support a greater range of colors (24-bit) and the RGB palette.</p>
                SVG images are an example of vectorized images, which are composed of points, along the X and Y axes, and the lines that connect them. Using algorithms, these points and lines can be scaled up and down based on the algorithm. 
            </Essay>
            <Essay
                number={7}
                question='Define the following roles: Project Manager, Business Analyst, Scrum Master, UX designer, Web Developer/Engineer, Quality Assurance Tester, and DevOps.'
            >
                    <p><u>Project Manager:</u> Responsible for moving the project along all phases, from planning to execution, start to finish.<br></br>
                    <u>Business Analyst:</u> Evaluates prior and current business data to improve decision-making processes, products and services within the organization.<br></br>
                    <u>Scrum Master:</u> In charge of implementing the Scrum framework for a project or organization. Scrum is an agile mindset with the following components: a Product Owner odering the work into the backlog, a Scrum team selecting items into Increments within development Sprints, and a Scrum team and stakeholders that evaluate the results and adapt the future Sprint(s) as needed.<br></br>
                    <u>UX Designer:</u> Ideates and creates products that prioritize an end-user's experiences and needs, including aspects such as branding, visual design, usability and functionality.<br></br>
                    <u>Web Developer/Engineer:</u> A programmer of the World Wide Web, creating applications and websites with programming languages such as HTML, CSS, JS, etc., techniques and other tools to support the apps/sites. <br></br>
                    <u>Quality Assurance Tester:</u> Ensures that the product is at its best version and state, consistent with the needs of the project and the standardized protocols/prodcedural requirements of the organization.<br></br>
                    <u>DevOps:</u> The combination of development and IT operation philosophies, practices and tools that increase an organization's efficiency and efficacy in building, testing and deploy applications/services.</p>
            </Essay>
            <Essay
                number={8}
                question='What is considered the right size for an image or video asset?'
            >
                We want to use the right quality of asset for viewing based on viewport size and function of the asset. We don't want to use files larger than necessary for storage purposes.
            </Essay>
            <Essay
                number={9}
                question='What it means for a company to be Agile. What is the purpose of using Agile, and its Pros and Cons.'
            >
                Agile is a method of project completion focused on delivering small increments of the product in a continuous manner. It is typically meant to increase the speed and accuracy of product delivery for project management and software development.

                It allows for the end-users to start using the product as soon as possible. However, the speed and lack of thorough testing/research means that users will often experience frequent changes and updates to the product as the testing is conducted. 

                To maximize efficiency, the entire team must be consistent with their practices and timeline or else 
            </Essay>
            <Essay
                number={10}
                question='What are testing environments? What is the difference between Local, Dev, QA and Production?'
            >
                Developing products requires quality assurance and control. In order to test product for quality, various environments are created outside of what the public sees, often referred to as "production" in software development. Often, a developer has a local machine that they are coding and testing their code on. Once the developer pushes this code to the Dev environment, several developers see and test the code in the context of its use with other pieces of the application. QA environments are meant to be finalized versions of code, not frequently changed. It is often used to ensure specific bugs are fixed. Production environments are where the end-user and client sees and uses the released version of the application.
            </Essay>
            <Essay
                number={11}
                question='Function vs Form: When are web images considered part of the content (HTML) as opposed to part of the appearance (CSS)?'
            >
                The intention of HTML is to deliver informative content. If the image is a logo that provides branding, or an icon that delivers user feedback, these are all critical situations that warrant an image's presence in the HTML. If the image is purely decorative and only meant to enhance the user experience of animation, visual imagery, etc., then these images perform better in CSS, such as background images.
            </Essay>
            <Essay
                number={12}
                question='What is the difference between IDs, Classes and Tags? How does Specificity play a role in the selection of HTML elements (both in CSS and JS)'
            >
                Tags are the most basic keywords in HTML, indicating the start and end of individual elements and how the webpage should display the content within the tag. HTML files must have the essential tags for the file to be valid and correctly displayed. IDs and classes are used within the start of a tag, acting like an additional attribute of the tag. IDs are unique to an element and can only appear once per page. They are used to identify an element. Classes can be applied to multiple components and pages. They are used to style elements.
                <br></br>
                Specificity places multiple and possibly overlapping styling IDs and classes into a scored hierarchy to be applied to each element. The declaration with the highest specificity will be applied to the element. 
            </Essay>
            <Essay
                number={13}
                question='What is a CSS Preprocessor? What are some examples? In React, what are styled components? How do Styled Components violate separation of concerns?'
            >
                Allows programming containing logic such as variables, nesting, inheritance, etc. that is then compiled into a regular CSS, which is then reference by the main HTML doc client side. Some examples are Sass, LESS and Stylus. <br></br>
                Separation of concerns is the idea that developers program like with like, language with language, for the sake of initial programming. In React, styled components allow CSS to be included in JS components, allowing scoped styling, which fundamentally mixes languages together. The benefit of this arises when one single component or feature needs an update spanning all 3 languages. This now introduces multiple files for review rather than React's proposed single file/component review.
            </Essay>
            <Essay
                number={14}
                question='Final Project: Who is the client? (e.g. Me, a friend of mine starting a business, Coffee Bean, Made Up Widget Company) What is its purpose? (e.g. an online brochure for a coffee shop, to promote my portfolio work) Why did you choose this subject?'
            >
                <li>Client: Zeal Interior & Design, an imaginary interior design company.</li>
                <li>Purpose: Online presence and marketing of the services, past works and contact of the company.</li>
                <li>Reason: I have a lot of inspiration pictures for our home remodel, which made me think of the designers behind it all.</li>
            </Essay>
            <Essay
                number={15}
                question='What is the difference between Web Hosts, Domains, and FTP?'
            >
                Answer
            </Essay>
            <Essay
                number={16}
                question='What is a Package Manager (e.g. NPM, Composer)? How does it play a role in software development?'
            >
                Answer
            </Essay>
        </div>
    );
}

export default Homework;