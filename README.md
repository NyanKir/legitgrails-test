# Available routes 🗺️
```
GET /tasks/:id - get task by id
```
on https://legitgrails-test.vercel.app
# Quick start 🚀
### Docker

```bash
$ docker build --tag 'legitgrails' .

$ docker run -p 3000:3000 legitgrails 
```

### Manual
Node version: v20.10.0

To switch between different version of node.js. You can use the utility:
https://github.com/nvm-sh/nvm
```bash
$ nvm use
$ npm install
```
Create `.env` file, from example `.env.template`


```bash
# watch mode
$ npm run dev
```


# Bonus points ⭐

## Authorization
I would create a route for user authorization. The request body should include the user's ID and secret key.
Upon successful authorization, we generate a token and store it in our Redis cache.
However, the token will be deleted from Redis if the user stops using our service 
for a long period of time or if traffic originates from a different IP address(white-list).
In these cases, the user will need to re-authenticate.
## Rate limits
For user rate limiting, I will use Redis to count the number of requests in 10 seconds by Token.
If a user's token exceeds a certain limit, they will receive a 429 error.
After the wait period expires, they will be able to use our service again.
