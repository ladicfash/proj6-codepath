import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Dashboard.css';

const Dashboard = () => {
  const [recipes, setRecipes] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.spoonacular.com/recipes/complexSearch', {
          params: {
            apiKey: import.meta.env.VITE_SPOONACULAR_API_KEY,
            query: searchQuery,
            number: 10
          }
        });
        setRecipes(response.data.results);
      } catch (error) {
        console.error('Error fetching recipes:', error);
      }
    };

    fetchData();
  }, [searchQuery]);

  const filteredRecipes = recipes.filter(recipe =>
    (filter ? recipe.diets.includes(filter) : true)
  );

  return (
    <div className="dashboard">
      <h1>Recipe Dashboard</h1>
      <input 
        type="text" 
        placeholder="Search..." 
        value={searchQuery} 
        onChange={(e) => setSearchQuery(e.target.value)} 
      />
      <select onChange={(e) => setFilter(e.target.value)}>
        <option value="">All Diets</option>
        <option value="vegetarian">Vegetarian</option>
        <option value="vegan">Vegan</option>
        <option value="gluten free">Gluten Free</option>
        <option value="ketogenic">Ketogenic</option>
      </select>
      <div>
        <p>Total recipes: {recipes.length}</p>
      </div>
      <ul>
        {filteredRecipes.map(recipe => (
          <li key={recipe.id}>
            <h2>{recipe.title}</h2>
            <img src={recipe.image} alt={recipe.title} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
