import { UserConfig } from '@commitlint/types';

const configuration: UserConfig = {
  extends: ['@commitlint/config-conventional'],
  parserPreset: 'conventional-changelog-conventionalcommits',
  formatter: '@commitlint/format',
};

export default configuration;
