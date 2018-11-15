# Project: url-slugger
**URL shortner**

It takes a long URL and returns a short URL composed of your domain followed by a slug.

note: custom slug must be 6 to 10  alpha numeric characters.

## Functionality
### HTTP GET
> http://domain/SSLUGG **(redirects to url if it exits)**

> http://domain/SSLUGG/info **(returns slug infromation: slug, url, date and time created)**

> http://domain/SSLUGG/count **(return how many time a slug has been redirected)**

> http://domain/SSLUGG/stats **(return the frequency in which a slug has been refirected by day)**

### HTTP POST
> http://domain/

```
{"slug": CUSTSLUG, "url": "https://www.longurl.com/series/of/characters"} (creates a custom slug)
{"url": "https://www.longurl.com/somelong/series/of/characters"}          (creates a random slug)
{"url": "https://www.longurl.com/somelong/series/of/characters"}          (returns slug beloging to url)
```

## Tech Stack
* mysql version 8.0.12
* yarn version 1.12.3
* nodejs version 11.0.0
  * Modules:
    * See package.json

## How to run
1. Ensure that you have the software about already installed
2. Clone this repository
3. Create database and tables using project_schema.sql in the documentation directory
4. Create the following environment variables:
````
$ export DB_USER="username"
$ export DB_PWD="YourDatabasePassword"
````
5. Install required node modules
````
$ yarn install
````
6. Start nodejs application
````
$ yarn run start
````
