import create from './create';
import get from './get';
import getBoard from './getBoard';
import seederBot from './seeder-bot';

export default (app) => {
  create(app);
  seederBot(app);
  getBoard(app);
  get(app);
};
