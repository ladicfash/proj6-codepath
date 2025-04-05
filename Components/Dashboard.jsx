import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Dashboard.css';

const Dashboard = () => {
  const [recipes, setRecipes] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [cuisine, setCuisine] = useState('');
  const [diet, setDiet] = useState('');
  const [maxReadyTime, setMaxReadyTime] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.spoonacular.com/recipes/complexSearch', {
          params: {
            apiKey: import.meta.env.VITE_SPOONACULAR_API_KEY,
            query: searchQuery,
            cuisine,
            diet,
            maxReadyTime: maxReadyTime ? parseInt(maxReadyTime) : undefined,
            number: 10
          }
        });
        setRecipes(response.data.results);
      } catch (error) {
        console.error('Error fetching recipes:', error);
      }
    };

    fetchData();
  }, [searchQuery, cuisine, diet, maxReadyTime]);

  return (
    <div className="dashboard">
      <h1>Recipe Dashboard</h1>
      <div>
        <input 
          type="text" 
          placeholder="Search..." 
          value={searchQuery} 
          onChange={(e) => setSearchQuery(e.target.value)} 
        />
        <select value={cuisine} onChange={(e) => setCuisine(e.target.value)}>
          <option value="">All Cuisines</option>
          <option value="african">African</option>
          <option value="american">American</option>
          <option value="british">British</option>
          <option value="cajun">Cajun</option>
          <option value="caribbean">Caribbean</option>
          <option value="chinese">Chinese</option>
          <option value="eastern european">Eastern European</option>
          <option value="european">European</option>
          <option value="french">French</option>
          <option value="german">German</option>
          <option value="greek">Greek</option>
          <option value="indian">Indian</option>
          <option value="irish">Irish</option>
          <option value="italian">Italian</option>
          <option value="japanese">Japanese</option>
          <option value="jewish">Jewish</option>
          <option value="korean">Korean</option>
          <option value="latin american">Latin American</option>
          <option value="mediterranean">Mediterranean</option>
          <option value="mexican">Mexican</option>
          <option value="middle eastern">Middle Eastern</option>
          <option value="nordic">Nordic</option>
          <option value="southern">Southern</option>
          <option value="spanish">Spanish</option>
          <option value="thai">Thai</option>
          <option value="vietnamese">Vietnamese</option>

        </select>
        <select value={diet} onChange={(e) => setDiet(e.target.value)}>
          <option value="">All Diets</option>
          <option value="gluten free">Gluten Free</option>
          <option value="ketogenic">Ketogenic</option>
          <option value="vegetarian">Vegetarian</option>
          <option value="vegan">Vegan</option>
          <option value="pescetarian">Pescetarian</option>
          <option value="paleo">Paleo</option>
          <option value="primal">Primal</option>
          <option value="whole30">Whole30</option>
          <option value="low FODMAP">Low FODMAP</option>
          <option value="dairy free">Dairy Free</option>
          <option value="lacto ovo vegetarian">Lacto Ovo Vegetarian</option>
          <option value="paleo vegetarian">Paleo Vegetarian</option>
          <option value="high protein">High Protein</option>
          <option value="low carb">Low Carb</option>
          <option value="low fat">Low Fat</option>
          <option value="low sodium">Low Sodium</option>
        </select>
        <input 
          type="number" 
          placeholder="Max Ready Time (minutes)" 
          value={maxReadyTime} 
          onChange={(e) => setMaxReadyTime(e.target.value)} 
        />
      </div>
      <div>
        <p>Total recipes: {recipes.length}</p>
      </div>
      <ul>
        {recipes.map(recipe => (
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
