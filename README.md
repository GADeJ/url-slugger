# Project: url-slugger
**URL shortner**

It takes a long URL and returns a short URL composed of your domain followed by a slug.

note: custom slug must be 6 to 10  alpha numeric characters.

## API Definition
### HTTP GET
> http://slug.co/SSLUGG **(redirects to url if it exits)**

> http://slug.co/SSLUGG/stats **(returns slug details with the daily visit frequency up to 60 days)**

### HTTP POST
> http://slug.co/

```
{"slug": "CUSTSLUG", "url": "https://www.longurl.com/series/of/characters"} (creates a custom slug)
{"url": "https://www.longurl.com/somelong/series/of/characters"}            (creates a random slug)
{"url": "https://www.longurl.com/somelong/series/of/characters"}            (returns slug beloging to url)
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
## How to test

### Test case 1
````
Version:
$ curl 'http://localhost:3000'
{"api":{"version":"0.0.1"}}
````

### Test case 2
````
Create a short url:
$ curl -d '{"url":"https://www.google.com"}' -H 'Content-Type: application/json' 'http://localhost.com:3000'
{"status":"success","data":{"slug":"w$qe92Ejg","url":"https://www.google.com"}}
````

### Test case 3
````
Redirect to URL:
$ curl 'http://localhost:3000/w$qe92Ejg'
Found. Redirecting to https://www.google.com
````

### Test case 4
````
Create custom slug:
$ curl -d '{"slug":"CuStOm10","url":"https://www.twitter.com"}' -H 'Content-Type: application/json' 'http://localhost.com:3000'
{"status":"success","data":{"slug":"CuStOm10","url":"https://www.twitter.com"}}
````

### Test case 5
````
Retrieve stats from slug:
$ curl -d 'http://glaudson.com/CUSTOM1'
{
  "status":"success",
  "data":{
    "slug":"CUSTOM1",
    "url":"https://www.reddit.com",
    "created":"2018-11-16T06:00:02.000Z",
    "count":9,
    "daily-visit-frequency":[
      {
        "year":2018,
        "month":11,
        "day":16,
        "count":9
      }]
  }
}
````
