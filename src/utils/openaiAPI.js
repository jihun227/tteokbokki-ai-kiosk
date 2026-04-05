const openai = require('openai');

const openaiAPI = async (mood, preferences, availableToppings, spicinessLevel) => {
    const prompt = `Generate a tteokbokki recipe based on the following criteria:\nMood: ${mood}\nPreferences: ${preferences}\nAvailable Toppings: ${availableToppings.join(', ')}\nSpiciness Level: ${spicinessLevel}\n\nPlease provide the recipe instructions:`;

    try {
        const response = await openai.Completion.create({
            model: 'text-davinci-002',
            prompt: prompt,
            max_tokens: 150,
        });
        return response.choices[0].text.trim();
    } catch (error) {
        console.error('Error generating recipe:', error);
        throw error;
    }
};

module.exports = openaiAPI;