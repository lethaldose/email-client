# email-client

> Email client to send emails!

### UI

- UI has a simple form with 2 tabs
    - Email Form Component - to send emails
    - Metrics Component - number of emails sent and failed

- Email Form Interaction:
    - To, cc and bcc fields expects multiple email address which are comma separated
    - e.g. john@example.com, bar@example.com

![Email Client Home Screen](https://raw.githubusercontent.com/lethaldose/email-client/master/docs/email-client-tabs.gif)

![Send Email Form](https://raw.githubusercontent.com/lethaldose/email-client/master/docs/send-email-form.gif)

### Design

- Using material design library for layout and styles using  `vue-material`

### Validation

- Form Validation have been added vuelidate


### Build Setup

``` bash
# install dependencies
`yarn install` or `npm install`

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# run unit tests
npm run unit

# run all tests
npm test
```

### Pending
- improve messaging styles
- improve validations

