/**
 * Container Generator
 */

import { Actions, PlopGeneratorConfig } from 'node-plop';
import path from 'path';

import { containerExists } from '../utils';

export enum ContainerProptNames {
  'ComponentName' = 'ComponentName',
  'wantHeaders' = 'wantHeaders',
  'wantSlice' = 'wantSlice',
  'wantSaga' = 'wantSaga',
  'wantStyledComponents' = 'wantStyledComponents',
  'wantTranslations' = 'wantTranslations',
  'wantTests' = 'wantTests',
}

const containersPath = path.join(__dirname, '../../../src/app/screens');
const rootStatePath = path.join(__dirname, '../../../src/redux/RootState.ts');

export const screenGenerator: PlopGeneratorConfig = {
  description: 'Add a screen component',
  prompts: [
    {
      type: 'input',
      name: ContainerProptNames.ComponentName,
      message: 'What should it be called?',
      default: 'Form',
      validate: value => {
        if (/.+/.test(value)) {
          return containerExists(value)
            ? 'A screen with this name already exists'
            : true;
        }

        return 'The name is required';
      },
    },
    {
      type: 'confirm',
      name: ContainerProptNames.wantSlice,
      default: true,
      message:
        'Do you want a redux slice(actions/selectors/reducer) for this container?',
    },
    {
      type: 'confirm',
      name: ContainerProptNames.wantSaga,
      default: true,
      message: 'Do you want sagas for asynchronous flows? (e.g. fetching data)',
    },
    {
      type: 'confirm',
      name: ContainerProptNames.wantStyledComponents,
      default: true,
      message: 'Do you want to use styled-components?',
    },
    {
      type: 'confirm',
      name: ContainerProptNames.wantTests,
      default: false,
      message: 'Do you want to have tests?',
    },
  ],
  actions: (data) => {
    const containerPath = `${containersPath}/{{properCase ${ContainerProptNames.ComponentName}}}`;

    const actions: Actions = [
      {
        type: 'add',
        path: `${containerPath}/index.tsx`,
        templateFile: './screen/index.tsx.hbs',
        abortOnFail: true,
      },
    ];

    if (data?.wantSlice) {
      actions.push({
        type: 'add',
        path: `${containerPath}/slice.ts`,
        templateFile: './screen/slice.ts.hbs',
        abortOnFail: true,
      });
      actions.push({
        type: 'add',
        path: `${containerPath}/selectors.ts`,
        templateFile: './screen/selectors.ts.hbs',
        abortOnFail: true,
      });
      actions.push({
        type: 'add',
        path: `${containerPath}/types.ts`,
        templateFile: './screen/types.ts.hbs',
        abortOnFail: true,
      });
      actions.push({
        type: 'modify',
        path: `${rootStatePath}`,
        pattern: new RegExp(/.*\/\/.*\[IMPORT NEW CONTAINERSTATE ABOVE\].+\n/),
        templateFile: './screen/importContainerState.hbs',
        abortOnFail: true,
      });
      actions.push({
        type: 'modify',
        path: `${rootStatePath}`,
        pattern: new RegExp(/.*\/\/.*\[INSERT NEW REDUCER KEY ABOVE\].+\n/),
        templateFile: './screen/appendRootState.hbs',
        abortOnFail: true,
      });
    }
    if (data?.wantSaga) {
      actions.push({
        type: 'add',
        path: `${containerPath}/saga.ts`,
        templateFile: './screen/saga.ts.hbs',
        abortOnFail: true,
      });
    }

    if (data?.wantStyledComponents) {
      actions.push({
        type: 'add',
        path: `${containerPath}/styles.ts`,
        templateFile: './screen/styles.ts.hbs',
        abortOnFail: true,
      });
    }

    if (data?.wantTests) {
      actions.push({
        type: 'add',
        path: `${containerPath}/index.spec.tsx`,
        templateFile: './screen/index.spec.tsx.hbs',
        abortOnFail: true,
      });
    }

    actions.push({
      type: 'prettify',
      data: { path: `${containersPath}/${data?.ComponentName}/**` },
    });

    return actions;
  },
};
