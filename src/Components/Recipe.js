import './Recipe.css';
// import RecipeSearchBar from './recipe-search-bar/recipe-search-bar';
import RecipeSearchEvent from './recipe-search-bar/recipe-search-event';


export default function Recipe() {
  return (
    <div className="Recipe">
      <header className="Recipe-header">
        <h4>Recipe Finder</h4>
      </header>
      <RecipeSearchEvent />
    </div>
  );
}

