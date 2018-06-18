# arcping

A serverless function built with [architect](https://arc.codes/) that checks for a valid SSL certificate.

# Install

`npm install @architect/workflows`

`npm install`

# Run

`export AWS_PROFILE=YOUR_PROFILE`

`export AWS_REGION=YOUR_AWS_REGION`

`npx create`

# Deploy

`npx env production SITE example.site`

`npx env production SENDEMAIL example@gmail.com`

`npx env production RECEIVEEMAIL example@example.com`

`npx env production SENDPASSWORD example`

`export ARC_DEPLOY=production`

Run this to update and install all the `node_modules` in `src/`: `npx hydrate`

`npx deploy`