# # retroflect-client-web

## Repository Description

This repository contains the web client for the retroFlect app.

## How this project was initialized

This project was originally initialized using the create-next-app package as follows:

```bash
npx create-next-app
```

## Contributing to development

The `package.json` contains a list of up-to-date scripts.

```
yarn install # after each pull of the project to ensure latest dependencies are installed
yarn dev # start dev server on port 3000
yarn lint # lint and auto-format files, please run before each commit.
```

## User Stories / Product Backlog

### As a visitor

[] I want to view a sign in form,  
so I can attempt to sign in.

[] I want to view a sign up form,  
so I can attempt to create an account.

Case: Visitor to sign in form page  
[] I want to see a link to the sign up form,  
so I can view the sign up form.

Case: Visitor to sign up form page  
[] I want to see a link to the sign in form,  
so I can view the sign in form.

[] I want to sign in with a registered email and password,  
so I can become an authenticated user.

### As an authenticated user

[] I want to click a sign out link,  
so that my account is not accessible by anyone else.

[] I want see my name,  
so that I can tell who I'm logged in as.

Case: authenticated user signs out  
[] I want to be redirected to /index,  
so that I can login again or as another user.
