import {getRecipes} from '../models/Recipe'
import {getIngredient, getIngredients} from '../models/Ingredient'

/**
 * The root file that combines all of our resolvers
 */

// TODO: Write your resolvers
export default {
	Query: {
		recipes: (root, args) => {
			return getRecipes({vegetarian: args.vegetarian, ingredient: args.ingredient})
		},
		ingredients: getIngredients	
	},
	Recipe: {
		ingredients: (recipe) =>
			Promise.all(
			 recipe.ingredients.map((id) => getIngredient(id))
		 )
	},
};
