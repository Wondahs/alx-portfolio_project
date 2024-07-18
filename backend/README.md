# JobSync Backend

![JobSync](https://github.com/Wondahs/alx-portfolio_project/blob/main/newDesign/src/assets/images/JobSync.jpg?raw=true)

#

## Overview

JobSync is a backend application designed to manage job listings and user authentication using social login options like Google, Facebook, and LinkedIn. The backend is built with Node.js, Express, and MongoDB.

## Table of Contents

- [JobSync Backend](#jobsync-backend)
  - [Overview][overview]
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [Technologies Used](#technologies-used)
  - [API Endpoints](#api-endpoints)
  - [License](#license)

## Features

- User authentication with Google, Facebook, and LinkedIn.
- CRUD operations for job listings.
- Rate limiting and security enhancements with Helmet and Express Rate Limit.
- Cross-Origin Resource Sharing (CORS) support.

## Technologies Used

- Node.js
- Express
- MongoDB
- Passport.js
- dotenv
- Helmet
- Express Rate Limit

## API Endpoints

### Authentication

- **POST /api/auth/google**: Authenticate with Google
- **POST /api/auth/facebook**: Authenticate with Facebook
- **POST /api/auth/linkedin**: Authenticate with LinkedIn

### Jobs

- **GET /api/jobs**: Get all job listings
- **POST /api/jobs**: Create a new job listing
- **GET /api/jobs/:id**: Get a job listing by ID
- **PUT /api/jobs/:id**: Update a job listing by ID
- **DELETE /api/jobs/:id**: Delete a job listing by ID

## License

This project is licensed under the Apache License 2.0. See the [LICENSE](LICENSE) file for details.

## :pencil: **Authors**
### :man: Ben Gabriel Isek
- [Github](https://github.com/Isek7)
- [Linkedin](https://www.linkedin.com/in/ben-gabriel-isek-811552176/)
### :woman: Delsa Marasha
- [Github](https://github.com/Dee2002)
### :man: Wonders Victor
- [Github](https://github.com/Wondahs)
### :man: Daniel Ene
- [Github](https://github.com/guyestguygithub001)
