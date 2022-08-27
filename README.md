# Superhero Application Build on MERN Stack.

This application helps you to search for your superhero, view name, powerstats, appearance, biography and work of the searched superhero.This application help you to save the favorite superhero. The saved superhero is stored in database and you can viewed your saved superhero in "Your Saved" tab in navbar. You can also edit saved powerstats of superhero and update in database. Edit operation only can be performed once you "Add to favorite" the searched superhero.

## Technology Used

Mongodb, Express, React, Node, Redux, Bootstrap

## How to Use

- clone the repo `git clone ....`
- run `cd ntd-api`
- run `npm install`
- run `npm start`

Note: You need to have nodemon installed globally. If you do not have it installed, run `npm install -g nodemon`

All the sample api has been written in the rest.http file.

## API Used

    - For superhero: `https://akabab.github.io/superhero-api/api/all.json`
    - RootUrl: `http://localhost:8000/api/v1`
    - RegisterEndpoint:`{RootUrl}/registerlogin`
    - LoginEndPoint: `{RegisterEndpoint}/login`
    - FavoriteEndPoint: `{RootUrl}/favorite`

### Register Api

All the register api will follow: `{RootUrl}/registerlogin`

| #   | API | METHOD | DESCRIPTION                        |
| --- | --- | ------ | ---------------------------------- |
| 1.  | `/` | POST   | Register all the users in database |

### Login Api

All the login api will follow: `{RegisterEndpoint}/login`

| #   | API | METHOD | DESCRIPTION                                                          |
| --- | --- | ------ | -------------------------------------------------------------------- |
| 1.  | `/` | POST   | Helps to check the email and database from user when login from user |

### Favorite Api

All the favorite api will follow: `{RootUrl}/favorite`

| #   | API    | METHOD | DESCRIPTION                                            |
| --- | ------ | ------ | ------------------------------------------------------ |
| 1.  | `/`    | GET    | fetch all the favorite superhero saved from database   |
| 2.  | `/`    | POST   | Send new favorite info to database                     |
| 3.  | `/_id` | PATCH  | update favorite superhero, i.e powerstats of superhero |
| 4.  | `/`    | DELETE | delete singe favorite superhero from database          |


### Application pages 

This is MultiPages application build in react. The pages are:
- Login Page
- Register Page
- Dashboard Page
- Saved Page

### Features Added

Login and Registration features is added to make this application more authentic.  

### Assumptions 

- User need to Register before using this application. All the register users data(i.e firstName, lastName, email, password) are stored in database, password of users are encrypted and stored.
- After registration, Users are navigated to login page.  Users need to used correct email and password for login, the email and password which is used for registration.
- After successful login, user data(i.e email, firstName, lastName, _id) is stored in session storages and users are navigated to dashboard.
- In dashboard, Users need to search for their super hero name. The name of super hero need to started with capital latter and spelling of super hero need to be correct. After that, users is displayed with data(i.e image, name, powerstats, appearance, biography and work) of super hero.
- "Add to Favorite" button is displayed, this button will save the your super hero as a favorite in database.
- "Your Saved" tab in navbar, will displayed all the saved super hero.
- In "Saved" page of application, you can edit the powerstats of your favorite super hero and update in database.
- In "Saved" page in application, have "Remove from favorite", when you click it, your saved favorite super hero will remove from database and update.
- "Logout" tab in navbar, will logout the user from any page (i.e. dashboardPage or savedPage) and navigated to login page. All the user data will be removed from Session storage. User need to login again.


### Technical Challenges 

I cannot fetch the data from given api, so i have used the different api for getting the data. 


### Application Features

- User friendly 
- Mobile Responsive 
- CRUD operation 


