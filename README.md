# Autobahn Application

Display lists of Highway's, data is fetched from API where user's can browse the highways. 

## Features
- API call to fetch all highways
- Details View Page which shows more information about selected highway 
- Additional highway information includes-  Name, Title, Subtitle, Coordinates and Description.
- Feature to add a highway to favorites list
- Feature to add/remove a highway to/from your favorites
- Editable field where User can add comment and color-code for favorites highway
- Favorites view which list all favorites
- Pagination
- LocalStorage

## Live Demo

Link - https://autobahn-application.netlify.app/highways

## Application Architecture

The application is architectured as a single Angular module.

Storing favorites and accessing the highway API is abstracted as a service, allowing for replacing the implementation in the future if the need arises.

The favorite storage service uses the browser's LocalStorage, and stores the favorite details as a JSON-encoded array.

The highway API service makes use of Angular's HttpClient.

# Getting Started

Building this project requires Node.JS and npm installation.


- Clone the repository

  ` git clone https://github.com/ashishshah1995/autobahn-application-angular`

- To install all the dependencies.

  `npm install` 

- Running the application in the project directory:

  `npm start`

  Runs the app in the development mode.

  Open http://localhost:4200 to view it in your browser.
  
  The page will reload when you make changes.

  ## Deploying

  Once the app is built, the static files ready for deployment can be found at the `/dist` directory.

  Upload them to any static file host, and configure it to direct all requests to `index.html`.

  # Built With

- Angular
- Typescript
- Bulma- CSS framework
- HTML




