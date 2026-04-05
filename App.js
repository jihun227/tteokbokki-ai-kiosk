import React, { useState } from 'react';
import MoodSelector from './MoodSelector';
import PreferenceSelector from './PreferenceSelector';
import RecipeRecommendation from './RecipeRecommendation';

const App = () => {
  const [mood, setMood] = useState('');
  const [preferences, setPreferences] = useState([]);
  const [recipe, setRecipe] = useState(null);

  const handleMoodChange = (newMood) => {
    setMood(newMood);
  };

  const handlePreferencesChange = (newPreferences) => {
    setPreferences(newPreferences);
  };

  const handleRecipeRecommendation = (recommendedRecipe) => {
    setRecipe(recommendedRecipe);
  };

  return (
    <div>
      <h1>Tteokbokki AI Kiosk</h1>
      <MoodSelector onMoodChange={handleMoodChange} />
      <PreferenceSelector onPreferencesChange={handlePreferencesChange} />
      <RecipeRecommendation recipe={recipe} />
    </div>
  );
};

export default App;