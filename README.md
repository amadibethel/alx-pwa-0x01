# ALX Project 0x14 - Movie Database API Overview

## API Overview

The **MoviesDatabase API** is a powerful RESTful API that allows developers to access extensive data on movies, TV shows, actors, and related content. It provides endpoints to search for titles, retrieve details about specific movies, filter by genre or release year, and access cast and crew information. The API supports pagination and filtering for optimal data retrieval and performance. It's ideal for building applications involving movie discovery, recommendations, and entertainment analytics.

## Version

v1

## Available Endpoints

- **/titles**:  
  Retrieve a list of movie or TV titles. Supports filters like year, genre, and pagination.

- **/titles/search/title**:  
  Search for movies by title keyword.

- **/titles/x/titles-by-ids**:  
  Get full details of movies by passing an array of title IDs.

- **/titles/{id}**:  
  Get detailed information about a specific movie using its unique ID.

- **/genres**:  
  Fetch a list of all available movie genres.

- **/actors**:  
  Retrieve a list of actors and related metadata.

## Request and Response Format

### Example Request:

```http
GET /titles?genre=Action&year=2022&page=1
Headers:
  X-RapidAPI-Key: YOUR_API_KEY
  X-RapidAPI-Host: moviesdatabase.p.rapidapi.com
