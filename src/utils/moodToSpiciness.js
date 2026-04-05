// moodToSpiciness.js

// Mapping of mood to spiciness level
const moodToSpiciness = {
    "happy": "high",
    "sad": "low",
    "neutral": "medium",
    "excited": "very high",
    "relaxed": "low",
    "angry": "very high",
};

// Function to get spiciness based on mood
const getSpicinessLevel = (mood) => {
    return moodToSpiciness[mood.toLowerCase()] || "unknown";
};

module.exports = { getSpicinessLevel };