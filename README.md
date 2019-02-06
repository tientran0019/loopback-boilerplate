# loopback-boilerplate

A boilerplate for a RESTful API (api only) using LoopBack

### What is LoopBack and How Does It Work with Node?
LoopBack is a framework for creating APIs and connecting them with backend data sources. Built on top of Express, it can take a data model definition and easily generate a fully functional end-to-end REST API that can be called by any client.

LoopBack comes with a built-in client, API Explorer. We’ll use this since it makes it easier to see the results of our work, and so that our example can focus on building the API itself.

You will of course need Node installed on your machine to follow along. Get it here. npm comes with it, so you can install the necessary packages easily. Let’s get started.


### Get Started
- **Clone this repository or use npm**
```bash
$ git clone https://github.com/tientran0019/loopback-boilerplate.git
```

- **Install dependencies specified in package.json**
```bash
$ yarn
```

- **Start the server (default port is set to 3000)**
```bash
$ yarn start
```

### Scripts
- `yarn start`:  Starts developer server, with `nodemon`.

- `yarn dev`: Starts developer server, with `nodemon`.

- `yarn prod`: Starts production server `NODE_ENV=production`.

- `yarn prod:pm2`: Starts production server with `pm2`.

### Built-in example
- User model: login via email/password, facebook and google.

- Container model: [Storage component for LoopBack](https://github.com/strongloop/loopback-component-storage). Support Amazon S3.

- Slug: Make strings url-safe. Slugifies every string, even when it contains unicode.

```js
import slug from 'src/utils/slug';

export default function (Category) {
  Category.observe('before save', function (ctx, next) {  //!!important
    slug(Category, ctx, {
      separator: '-',
      slug: 'slug',
      fields: ['title'],
      lowercase: true,
    }, function (err) {
      if (err) return next(err);
      else next(null);
    });
  });
};
```

- Env: Configure with `.env` file.

```bash
# General
BRAND=Loopback
PORT=3000
WEB_URL=https://example.com
API_URL=https://api.example.com

# The addresses are allowed to call the api (separated by commas), leaving empty meaning that any place is called
CORS_DOMAIN=https://api.example.com,http://localhost:3001

# Mail server
EMAIL_HOST=smtp.gmail.com # Hoặc smtp.zoho.com
EMAIL_NAME=Name Web Services
EMAIL=email
EMAIL_PASSWORD=password#

# Amazon S3
S3_KEY=s3_key
S3_KEY_ID=s3_key_id

# Google login
GG_CUSTOMER_ID=google_login_id
GG_CLIENT_SECRET_CODE=google_login_code

# Mongo connect
MONGO_HOST=127.0.0.1
MONGO_PORT=27017
MONGO_URL=''
MONGO_DATABASE=db_name
MONGO_USER=db_user
MONGO_PASSWORD=''
```

- Custom style of `/expolorer`.

- Add email theme.

<img src="./screenshot/email.png" width="300" />

- Add pagination `/boot/pagination.js`

```js
{
  "total": 35,
  "limit": 12,
  "skip": 0,
  "data": [...],
}
```

- Custom return value of remove function `deleteById` `/boot/remote-delete-by-id.js`.

```js
{
  result = {
    ...ctx.result,
    id: idDeleted,
    instance: instanceDeleted,
  }
}
```

# Contributions
Trần Đức Tiến <tientran0019@gmail.com>
