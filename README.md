# Weather app - svelte

> Svelte typescript SPA demo/boilerplate

# Features

- [x] Typescript
- [x] Storybook
- [x] Import aliases
- [ ] CLI for common tasks
- [ ] Deploy to GitHub pages on commit to master
- [ ] Demo service calls w/ unit tests (jest)
- [ ] Component testing

# Development

## Typescript setup

[conversion script](https://github.com/sveltejs/template/blob/master/scripts/setupTypeScript.js)

## Add a new directory alias

In order to work through tests, typescript, and, compilation need to update three files:

1. `package.json` in `jest.moduleNameMapper`
2. `rollup.config.js` in `plugins.alias ~> entries`
3. `tsconfig.js` in `compilerOptions.paths`
4. `.storybook/main.js` in `alias`

Each alias field has its own special way to do things. Follow what is already there.

# Links

- [bulma tooltips](https://demo.creativebulma.net/components/tooltip/1.2/)
- [bulma](bulma.io)
