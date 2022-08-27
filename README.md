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
