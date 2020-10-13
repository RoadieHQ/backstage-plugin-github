/*
 * Copyright 2020 RoadieHQ
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import React, { useState, FC } from 'react';
import { makeStyles, Tabs, Tab } from '@material-ui/core';
import {
  Page,
  pageTheme,
  Content,
  ContentHeader,
  SupportButton,
} from '@backstage/core';
import { Entity } from '@backstage/catalog-model';
import InsightsTab from '../InsightsTab';
import PullRequestsTab from '../PullRequestsTab';

type InsightsPageProps = {
  entity: Entity;
};

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

const useStyles = makeStyles(theme => ({
  tabs: {
    marginBottom: theme.spacing(3)
  }
}));

const TabPanel = (props: TabPanelProps) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <>
        {children}
        </>
      )}
    </div>
  );
}

const a11yProps = (index: any) => {
  return {
    id: `simple-tab-${index}`,
    tabid: index,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const GitHubPage: FC<InsightsPageProps> = ({ entity }) => {
  const projectSlug = entity.metadata?.annotations?.['github.com/project-slug'];
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (_: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return projectSlug ? (
    <Page theme={pageTheme.tool}>
      <Content>
        <ContentHeader title="GitHub Plugin">
          <SupportButton>GitHub Plugin</SupportButton>
        </ContentHeader>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="GitHub Plugin Tabs"
            indicatorColor="primary"
            className={classes.tabs}
            centered
          >
            <Tab label="Insights" {...a11yProps(0)}/>
            <Tab label="Pull Requests" {...a11yProps(1)}/>
          </Tabs>

          <TabPanel value={value} index={0}>
            <InsightsTab entity={entity} />
          </TabPanel>

          <TabPanel value={value} index={1}>
            <PullRequestsTab entity={entity} />
          </TabPanel>
      </Content>
    </Page>
  ) : null;
};
export default GitHubPage;
