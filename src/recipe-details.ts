import habitat from 'preact-habitat';

import DefaultRecipe from './components/recipe-details/DefaultRecipe';

/** Comment this out to remove embedding */
const _habitat = habitat(DefaultRecipe);

export const entry = _habitat.render({
  selector: '[data-widget-host="habitat"]',
  clean: true,
});
