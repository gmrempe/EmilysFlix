# README

## Overview

  EmilysFlix is a robust clone of Netflix, a video streaming platform. EmilysFlix requires users to log in to view content and offers a fast, smooth and crisp UI/UX.

Try [EmilysFLix](https://emilysflix.herokuapp.com/#/this-is-emilysflix) yourself!


 ## Technologies Used
  * PostgreSQL
  * Ruby on Rails
  * AWS S3
  * Javascript ES6
  * React
  * Redux
  * HTML
  * CSS

## Getting Started

  Create an account or log in as the demo user to access the site. 
![Splash Page](https://github.com/gmrempe/EmilysFlix/blob/master/app/assets/images/Screen%20Shot%202019-04-05%20at%2010.15.50%20AM.png)

  Once you are logged in you can browse movies, search and enjoy viewing with a fullscreen experience.

  ![Browse Movies](https://github.com/gmrempe/EmilysFlix/blob/master/app/assets/images/Screen%20Shot%202019-04-05%20at%2010.33.30%20AM.png)
  
  Take advantage of the search bar to filter by title, genre or creator

  ![Search Bar](https://github.com/gmrempe/EmilysFlix/blob/master/app/assets/images/Screen%20Shot%202019-04-05%20at%2010.35.59%20AM.png)


 ## Video Show
  While browsing, a user may preview a movie by pressing the down chevron arrow. This triggers a re-render of the parent component which triggers a render of the video show component below the arrow button.

Trigger Re-Render
![Button to trigger sibling component render](https://github.com/gmrempe/EmilysFlix/blob/master/app/assets/images/Screen%20Shot%202019-04-05%20at%2011.04.28%20AM.png)

Rendered Video Show
 ![View of Rendered Component](https://github.com/gmrempe/EmilysFlix/blob/master/app/assets/images/Screen%20Shot%202019-04-05%20at%2011.08.32%20AM.png)

React does not enable child components to pass props to parent components so instead of having the child maintain state to trigger the video show, I made the parent component state track whether or not the video show component will render. This is accomplished by passing a function down to both child components as a prop.

```javascript
    toggleVideoShowClick(video) {
        return (e) => {
            if (video) {
                return this.setState({video: video});
            } else {
                return this.setState({video: null});
            }
        }
    }
```

 ## SessionForm Errors
  On login or signup the user is presented with errors as soon as they begin filling out the form. The errors are clear, simple and precise.

SignIn Form Errors
![sign up page](https://github.com/gmrempe/EmilysFlix/blob/master/app/assets/images/Screen%20Shot%202019-04-05%20at%2010.19.01%20AM.png)

The browser checks form validations as the user types making for a seamless UX. Validations then run at the model and database levels if the user gets past the form validations with invalid entries. These validations are displayed inline as well.

To display the form validation while the user is typing is solved in a way similar to Video Show above. However, this time I used css pseudo selectors to pass information between siblings.

```javascript
#password:invalid  ~ .form-password-message{
    display: inline;
}
```
```:invalid``` when the browser returns invalid on the form validation in the password input, the ```.form-password-message``` is displayed. The ```.form-password-message``` is a sibling of the password input so we need a ~ to select it.
