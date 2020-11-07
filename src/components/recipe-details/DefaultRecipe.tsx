import { h, Component, Fragment } from 'preact';

type Props = {
  recipeId: number;
  storeId: number;
};

export default function DefaultRecipe(props: Props) {
  return <h1>Single recipe</h1>;
}
