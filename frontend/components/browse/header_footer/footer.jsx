import React from 'react';




export default () => {

    return (
        <footer className="main-footer">
            <a href="https://github.com/gmrempe">
                <img src={window.github} alt="Github link" />
            </a>
            <a href="https://www.linkedin.com/in/gregory-rempe-4372b3107/">
                <img width="35" height="auto" src={window.linkedin} alt="Linkedin link" />
            </a>
            {/* <a> */}
                <img width="35" height="auto" src={window.personalsite} alt="Personal Site" />
            {/* </a> */}
            {/* <ul>
                <li>Audio and Subtitles</li>
                <li>Media Center</li>
                <li>Privacy</li>
                <li>Legal Notices</li>
                <li>Help Center</li>
                <li>Audio Description</li>
                <li>Investor Relations</li>
                <li>Jobs</li>
                <li>Cookie Preferences</li>
                <li>Gift Cards</li>
                <li>Terms of Use</li>
                <li>Corporate Information</li>
            </ul> */}
            {/* <div>Service Code</div> */}
        </footer>
    )
}