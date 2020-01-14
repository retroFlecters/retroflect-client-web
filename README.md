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

Case: Visit "/" route  
[] I want be redirected to "/signin" route,  
so I can view the sign in page

[x] I want to see the app title,  
so that I know what app I am using.

[x] I want to view a sign in form,  
so I can attempt to sign in.

[x] I want to view a sign up form,  
so I can attempt to create an account.

Case: Visitor viewing the sign in form page  
[x] I want to see a link to the sign up form,  
so I can view the sign up form.

Case: Visitor viewing the sign up form page  
[x] I want to see a link to the sign in form,  
so I can view the sign in form.

[] I want to sign up with an first name, last name, email and password,  
so I can become a registered user.

[] I want to sign in with a registered email and password,  
so I can become an authenticated user.

Case: Visitor successfully signs in  
[] I want be redirected to "/" route,  
so I can view my secure user specific data.

### As an authenticated user

[] I want to see the app title,  
so that I know what app I am using.

[] I want to click a sign out link,  
so that my account is not accessible by anyone else.

[] I want see my name,  
so that I can tell who I'm logged in as.

Case: Authenticated user signs out  
[] I want to be redirected to "/" route,  
so that I can login again or as another user.

[] I want to see a dated entry  
so that I know which dates reflection I am viewing.

Within: an entry  
[] I want to see a **diary** section with a text input box  
so that I free-form reflect for that date.

Within: an entry  
[] I want to see a **moods** section  
so that I reflect on how I am feeling.

Within: the **moods** section  
[] I want to see sliders between positive and negative moods, scale 0-100  
so that I can reflect on my mood for that date.

Within: the **moods** section  
[] I want an emoji to represent each moods value when 0-49 or 50-100  
so that I can view my moods graphically for that date.

Within: the **moods** section  
[] I want an emoji to represent each moods value when 0-49 or 50-100  
so that I can view my moods graphically for that date.

Within: an entry  
[] I want to see a **questions** section  
so that I view a list of self reflection questions

Within: the **questions** section  
[] I want to see a list of questions each with a corresponding answer text input  
so that I can be guided through my self reflection
