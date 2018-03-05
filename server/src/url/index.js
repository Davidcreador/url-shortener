import create from './create';
import get from './get';
import seederBot from './seeder-bot';

export default (app) => {
  create(app);
  get(app);
  seederBot(app);
};
