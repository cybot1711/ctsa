# Overview

This application scaffold used is [CRA](https://create-react-app.dev/) (Crate React APP).

This project makes of the following dev config:

- [x] Typescript
- [x] SCSS
- [x] Redux
- [x] Redux Persist
- [x] Redux-Thunk
- [x] ESLint
- [x] Prettier
- [x] Husky

Although this setup was not necessary for the requirement I felt obliged to add it to showcase tooling skills.
Adding a custom config for formatting and linting lays the groundwork for consistency in the team.  

I tried to type everything as far as I could. Adds robust type checking as a standard. Typescript has also become the 
de facto industry standard.  

I must mention that the eslint config is a bit stricter than needs to be but this is something that can be debated.

A very basic storybook setup has been added to the repo to enable building living style guides as the project progresses.

## Getting started
![start](http://gph.is/2prM2JC)

After cloning the repo run:

- `yarn` or `npm i` It is up to you whether you want to use npm or yarn (I prefer Yarn)
- `yarn dev` to start development locally
- `yarn build` to build the project
- `yarn start` to start and run production build
- `yarn type-check` to check for typing errors
- `yarn format` to check for formatting errors
- `yarn lint` to check for linting errors
- `yarn test-all` run pre-commit and pre-push scripts 
- `yarn build-storybook` builds fresh storybook
- `yarn storybook` run storybook

## Future improvements and considerations.
- Improve coverage. Although we have extensive coverage.
- More refactor with more time. Extract all the hooks into custom hooks, so they can be tested.
- Use a component Library. Don't recreate the wheel.
- Use a proven search library for search and pagination. Algolia / ElasticSearch / Solr.
- Use server side pagination. We don't want to process thousands of records on the frontend.
- Use an approach like Atomic design for structuring components and styles.
- Set global theme defaults.
- Work on Accessibility.
- Don't deploy on Fridays.
- Help your team succeed at all costs.

### Notes
There will be one error visible in the console, and it comes from tilt.js. A good opportunity to contribute to that repo.  
My design skills are average.