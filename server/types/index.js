//import {Recipe} from '../models/Recipe'
/**
 * The root file that combines all of our types
 */
const Recipe = /* GraphQL */`
	type Recipe {
		_id: ID
		title: String
		vegetarian: Boolean
		preparation: [String]
		ingredients: [Ingredient]
	}
`;

const Ingredient = /* GraphQL */`
	type Ingredient {
		_id: ID
		name: String
	}
`;

// TODO: Define your queries
const Query = /* GraphQL */`
	type Query {
		recipes(vegetarian: Boolean, ingredient: String): [Recipe]
		ingredients: [Ingredient]
	}
`;

const Schema = /* GraphQL */`
	schema {
		query: Query,
	}
`

// TODO: Add all of your types to this array
export default [Schema, Query, Recipe, Ingredient];
