import React from 'react';

const MoodSelector = () => {
    const moods = ['Happy', 'Sad', 'Excited', 'Angry', 'Relaxed'];

    return (
        <div>
            <h2>Select Your Mood</h2>
            <ul>
                {moods.map((mood, index) => (
                    <li key={index}>{mood}</li>
                ))}
            </ul>
        </div>
    );
};

export default MoodSelector;