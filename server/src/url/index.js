import create from './create';
import get from './get';

export default (app) => {
  create(app);
  get(app);
};
