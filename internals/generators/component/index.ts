/**
 * Component Generator
 */

import { Actions, PlopGeneratorConfig } from 'node-plop';
import path from 'path';

import { componentExists, listComponentsDirectories } from '../utils';

export enum ComponentProptNames {
  'ComponentName' = 'ComponentName',
  'componentPath' = 'componentPath',
  'wantStyledComponents' = 'wantStyledComponents',
  'wantTranslations' = 'wantTranslations',
  'wantTests' = 'wantTests',
}

export const componentGenerator: PlopGeneratorConfig = {
  description: 'Add an unconnected component',
  prompts: [
    {
      type: 'input',
      name: ComponentProptNames.ComponentName,
      message: 'What should it be called?',
      default: 'Button',
      validate: value => {
        if (/.+/.test(value)) {
          return componentExists(value)
            ? 'A component with this name already exists'
            : true;
        }

        return 'The name is required';
      },
    },
    {
      type: 'list',
      name: ComponentProptNames.componentPath,
      message: 'Where should it be created ?',
      choices: listComponentsDirectories(),
    },
    {
      type: 'confirm',
      name: ComponentProptNames.wantStyledComponents,
      default: true,
      message: 'Do you want to use styled-components?',
    },
    {
      type: 'confirm',
      name: ComponentProptNames.wantTests,
      default: false,
      message: 'Do you want to have tests?',
    },
  ],
  actions: (data) => {
    const componentPath = `${path.join(
      __dirname,
      '../../../',
      data?.componentPath,
    )}/{{properCase ${ComponentProptNames.ComponentName}}}`;

    const actions: Actions = [
      {
        type: 'add',
        path: `${componentPath}/index.tsx`,
        templateFile: './component/index.tsx.hbs',
        abortOnFail: true,
      },
    ];

    if (data?.wantStyledComponents) {
      actions.push({
        type: 'add',
        path: `${componentPath}/styles.ts`,
        templateFile: './component/styles.ts.hbs',
        abortOnFail: true,
      });
    }

    if (data?.wantTests) {
      actions.push({
        type: 'add',
        path: `${componentPath}/__tests__/index.test.tsx`,
        templateFile: './component/index.test.tsx.hbs',
        abortOnFail: true,
      });
    }

    actions.push({
      type: 'prettify',
      data: { path: `${data?.componentPath}/${data?.ComponentName}/**` },
    });

    return actions;
  },
};
