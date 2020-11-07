import habitat from 'preact-habitat';

import RecipeIndex from './components/recipe-index';

/** Comment this out to remove embedding */
const _habitat = habitat(RecipeIndex);

export const entry = _habitat.render({
  selector: '[data-widget-host="habitat"]',
  clean: true,
});
