import { NodePlopAPI } from 'node-plop';
import { componentGenerator } from './component';
import { screenGenerator } from './screen';
import shell from 'shelljs';

interface CustomActionData {
  path: string;
  file?: string;
}

/**
 * Every generated backup file gets this extension
 */
export const BACKUPFILE_EXTENSION = 'rbgen';

export default function plop(plop: NodePlopAPI) {
  plop.setGenerator('component', componentGenerator);
  plop.setGenerator('screen', screenGenerator);

  plop.setActionType('prettify', (answers, config) => {
    const data = config?.data as CustomActionData;
    shell.exec(`yarn run prettify -- "${data.path}"`, { silent: true });
    return '';
  });
}
