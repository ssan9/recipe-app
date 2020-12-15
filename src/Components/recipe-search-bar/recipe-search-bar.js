import React from 'react';
import './recipe-search-bar.css';
import DisplayRecipes from '../display-recipes/display-recipes';

export default class RecipeSearchBar extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		console.log('submitValue', this.props.submitValue);
		console.log('this.props.handleSearch', this.props.handleSearch);

		const recipeList = this.props.q;
		console.log('recipeList', recipeList);

		// const recipeArray = Object.values(recipeList).map((recipes, i) => {
		// 	// console.log('recipes', recipeList[recipes].recipe.label);
		// 	const a = Object.values(recipes);
		// 	console.log('ar', a);
		// 	console.log('a', a[0].label);
		// 	return (
		// 		<div key={i}>
		// 			{a[0].label}
		// 		</div>
		// 	);

		// });

		let recipeA = [];
		// let ingredientList = []

		for(let recipes in recipeList) {
			for(let recipe in recipeList[recipes]) {
				recipeA.push(recipeList[recipes][recipe]); 
			}
		}

		const recipeArray = this.props.submit && recipeA.map((recipes, i) => {
								return (
									<div key={i}>
										<DisplayRecipes
											label={recipes.label}
											image={recipes.image}
											ingredients={recipes.ingredients}
										/>
									</div>
								);
							});

		// console.log('recipeA', recipeA);

		// const recipeB = recipeA.map((recipes, i) => {
			// recipes.map((recipe, i) => {
			// 	console.log('recipeB', recipes.ingredients);
			// ingredientList.push(recipes.ingredients);
			// <div key={i}>
			// 	<DisplayRecipes
			// 		ingredients={recipes.ingredientLines}
			// 	/>
			// </div>
		// });

		// const ingredientsArray = ingredientList.map((recipes, i) => {
		// 	console.log('ingredientsArray', recipes);
		// })

		// console.log('ingredientList', ingredientList);


		// const recipeArray = recipeB.map((recipes, i) => {
		// 	console.log('recipeB', recipes);
		// 	return (
		// 		<div key={i}>
		// 			{recipes.label}
		// 		</div>
		// 	);
		// }); 

				

		// const recipeArray = recipeA.map((recipes, i) => (
		// 	<div key={i}>
		// 		<DisplayRecipes
		// 			label={recipes.label}
		// 			image={recipes.image}
		// 		/>
		// 	</div>
		// )); 

		// console.log('recipeA', recipeA);

		// console.log('recipeB', recipeB);

		// const ingredientsArray = recipeA[0];

		// let arr = [];

		// arr.push(Object.keys(ingredientsArray));	

		// console.log('ingredientsArray', recipeA[0]);

		// console.log('ingredientsArraysss', arr);

		// console.log('label', ingredientsArray);

		return (
			<div>
				<form onSubmit={this.props.handleSearch}>
					<div className="search-bar">
						<input type="text"
						className="search-text"
						name="recipe-search" 
						// value={}
						value={this.props.value}
						onChange={this.props.handleChange} />
						<button type="submit" 
							className="search-button"
							onClick={this.props.handleSearch}>Search</button>
					</div>
				</form>
				{recipeArray}
			</div>
		);
	}	
}