[![CircleCI](https://circleci.com/gh/jfredrickson/ejeff-api.svg?style=svg)](https://circleci.com/gh/jfredrickson/ejeff-api)

# ejeff.org API

## Seeding

To seed the database with an initial user, run:

```
bin/createuser USERNAME PASSWORD
```

## Development and Testing

To use a fake SMTP service in development, [create an Ethereal account](https://ethereal.email/)
and add the connection information to `.env` (see `.env.example`).
