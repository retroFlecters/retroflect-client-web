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

### Getting started

```
yarn dev # start dev server on port 3000

yarn lint # lint and auto-format files, please run before each commit.
```

### Developing

```
# Don't commit directly to master, create a branch, push to GitHub and open a pull request.
git checkout -b feature/super-cool-feature

# *make changes to code, add, lint, commit*, when ready push to GitHub
git push -u origin feature/super-cool-feature # first push to GitHub
git push # subsequent pushes

# While working on a branch, periodically sync with master to keep up-to-date and avoid monster merges.
git pull origin master
# then *follow prompts to perform merge commit*
```

## User Stories

### As a visitor

[] I want to view a sign in form,
so I can attempt to sign in.

[] I want to view a sign up form,
so I can create an account.

[] I want to sign in with a registered email and password
so I can become an authenticated user.

### As an authenticated user

[] I want to click a sign out link,
so that my account is not accessible by anyone else.
