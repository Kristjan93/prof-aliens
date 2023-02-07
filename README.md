This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# Getting Started

First, run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

# Generating components
This project uses [hygen](https://www.hygen.io/) to automatically generate components.
This ensures all new components conform to the setup of this project.
The hygen command have been aliased to handy yarn scripts:

## Create a new component
To create a new react component you run:
```bash
yarn cmp
```
This will automagically create:
- Folder for component under components
- An `index.tsx` file that exports the component
- An component file with the same name as the component
- A story file for storybook with the same name as the component

## Create new sub component
Sub components should only be used when the component is only used within a single component.
e.g. A component named `ListItem` that belongs to a component called `List`.
If a sub component is used outside of the component context it should be elevated to a regular component.

To create a new sub react component you run:
```bash
yarn sub
```
This will automagically create:
- Folder called subcomponents under the given component folder
- An sub component file with the same name as the subcomponent

# Husky
This project uses husky to ensure all code conforms to the given lint rules.
Husky will block you from creating a git commit,
you will need to fix all lint issues before commiting your code.

This can be done with:
```bash
lint:fix
```

# Expansion CLI
> You will need to add your personal access token under GITHUB_TOKEN in .env.local for this to work.
You can access any available expansion using:
```bash
yarn exp
````
This will open up a terminal interface that will guide you to any available extension from the [extension repository](https://github.com/KosmosOgKaos/starter-expansions)
