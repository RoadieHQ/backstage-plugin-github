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
import React from 'react';
import { Entity } from '@backstage/catalog-model';
import { Routes, Route } from 'react-router';
import { MissingAnnotationEmptyState } from '@backstage/core';
import { insightsRouteRef, pullRequestRouteRef } from '../plugin';
import { GITHUB_PULL_REQUESTS_ANNOTATION } from './useProjectName';
import InsightsTab from './InsightsTab';
import PullRequestsTab from './PullRequestsTab';

export const isPluginApplicableToEntity = (entity: Entity) =>
  Boolean(entity.metadata.annotations?.[GITHUB_PULL_REQUESTS_ANNOTATION]);

export const InsightsRouter = ({ entity }: { entity: Entity }) => !isPluginApplicableToEntity(entity) 
  ? <MissingAnnotationEmptyState annotation={GITHUB_PULL_REQUESTS_ANNOTATION} />
  : (
    <Routes>
      <Route
        path={`/${insightsRouteRef.path}`}
        element={<InsightsTab entity={entity} />}
      />
    </Routes>
  );

export const PullRequestsRouter = ({ entity }: { entity: Entity }) => !isPluginApplicableToEntity(entity) 
  ? <MissingAnnotationEmptyState annotation={GITHUB_PULL_REQUESTS_ANNOTATION} />
  : (
    <Routes>
      <Route
        path={`/${pullRequestRouteRef.path}`}
        element={<PullRequestsTab entity={entity} />}
      />
    </Routes>
  );