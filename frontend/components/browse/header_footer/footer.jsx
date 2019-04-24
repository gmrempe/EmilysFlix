import React from 'react';




export default () => {

    return (
        <footer className="main-footer">
            <a href="https://github.com/gmrempe">
                <img src={window.github} alt="Github link" />
            </a>
            <a href="https://www.linkedin.com/in/gregory-rempe-4372b3107/">
                <img width="32" height="auto" src={window.linkedin} alt="Linkedin link" />
            </a>
            <a style={{ width: "40px" }} href="#">
                <img width="32" height="auto" src={window.personalsite} alt="Personal Site" />
            </a>
            <a href="https://angel.co/gregory-rempe-1">
                <i className="fab fa-angellist fa-2x"></i>
            </a>
        </footer>
    )
}