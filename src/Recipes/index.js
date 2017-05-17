import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { compose, withState } from 'recompose';
import withLoading from '../withLoading';

const Recipes = ({
  data,
  vegetarianFilter,
  setVegetarianFilter,
  ingredientFilter,
  setIngredientFilter
}) => {
  console.log(vegetarianFilter);
  return (
  <div>
    <h3>Vegetarian Filter</h3>
    <div>
      <button
        style={{ background: vegetarianFilter === null ? '#ccc' : '#fff' }}
        onClick={() => setVegetarianFilter(null)}
      >
        Off
      </button>
      <button
        style={{ background: vegetarianFilter === true ? '#ccc' : '#fff' }}
        onClick={() => setVegetarianFilter(true)}
      >
        Yes
      </button>
      <button
        style={{ background: vegetarianFilter === false ? '#ccc' : '#fff' }}
        onClick={() => setVegetarianFilter(false)}
      >
        No
      </button>
    </div>
    <h3>Ingredient Filter</h3>
    <div>
      <select
        value={ingredientFilter}
        onChange={({ target }) => {
          setIngredientFilter(target.value ? target.value : undefined);
        }}
      >
        <option value={''}>Not active</option>
        {data.ingredients.map(ingredient => (
          <option value={ingredient._id}>{ingredient.name}</option>
        ))}
      </select>
    </div>
    <h1>Recipes</h1>
    {data.recipes.map(({ title, preparation, ingredients, _id }) => (
      <div key={_id}>
        <h2>{title}</h2>
        <h3>Preparation</h3>
        <div>
          {preparation.map(entry => <p key={entry}>{entry}</p>)}
        </div>
        <h3>Ingredients</h3>
        <div>
          {ingredients.map(ingredient => (
            <div key={ingredient._id}>
              {ingredient.name}
            </div>
          ))}
        </div>
      </div>
    ))}
  </div>
)};

const RecipeQuery = gql`query RecipeQuery($vegetarian: Boolean, $ingredient: String){
  recipes(vegetarian: $vegetarian, ingredient: $ingredient){
    _id,
    title,
    vegetarian,
    preparation,
    ingredients{
      _id,
      name
    }
  },
  ingredients{
    _id,
    name
  }
}`;
const enhance = compose(
  withState('vegetarianFilter', 'setVegetarianFilter', ''),
  withState('ingredientFilter', 'setIngredientFilter', ''),
  graphql(RecipeQuery, {
    options: props => ({
      variables: {
        vegetarian: props.vegetarianFilter,
        ingredient: props.ingredientFilter
      }
    })
  }),
  withLoading
);

export default enhance(Recipes);
