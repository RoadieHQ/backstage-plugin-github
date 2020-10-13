# GitHub Plugin for Backstage

![GitHub Plugin for Backstage by Roadie](https://github.com/RoadieHQ/backstage-plugin-github/blob/master/docs/roadie-backstage-github-plugin.jpg)

## Plugin Setup

1. If you have standalone app (you didn't clone this repo), then do

```bash
yarn add @roadiehq/backstage-plugin-github
```

3. Add plugin to the list of plugins:

```ts
// packages/app/src/plugins.ts
export { plugin as GitHub } from '@roadiehq/backstage-plugin-github';
```

4. Add plugin API to your Backstage instance:

```ts
// packages/app/src/components/catalog/EntityPage.tsx
import { Router as GitHubRouter } from '@roadiehq/backstage-plugin-github';

...

const ServiceEntityPage = ({ entity }: { entity: Entity }) => (
  <EntityPageLayout>
    ...
    <EntityPageLayout.Content
          path="/github"
          title="GitHub"
          element={<GitHubRouter entity={entity} />}
        />
  </EntityPageLayout>
```

5. Run backstage app with `yarn start` and navigate to services tabs.

## Widgets setup

1. You must install plugin by following the steps above to add widget to your Overview.

2. There are five widgets to choose from right now:
  * Pull Requests
  * Contributors
  * Languages
  * ReadMe
  * Releases

3. Adding widgets to your Overview tab is simple. For example in order to add Pull Requests widget:

```ts
// packages/app/src/components/catalog/EntityPage.tsx
import { PullRequestsStatsCard } from '@roadiehq/backstage-plugin-github';

...

const OverviewContent = ({ entity }: { entity: Entity }) => (
  <Grid container spacing={3}>
    ...
    <Grid item md={6}>
      <PullRequestsStatsCard entity={entity} />
    </Grid>
  </Grid>
);

```

4. All widgets can be added same way as the Pull Request widget. 

## Features

- List Pull Requests with filtering and search as well as Releases, Contributors, Languages and Read Me for your repository.
- 5 widgets available to show data directly on the Overview tab of your component.

## Links

- [Backstage](https://backstage.io)
- Get hosted, managed Backstage for your company: https://roadie.io
