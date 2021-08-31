import { useState } from "react";

function MoodPickerDemo(): JSX.Element {
  const [moodValueFromCurrentRender, queueRerenderWithNewMoodValue] =
    useState("confused");

  const handleMoodChangeToHappy = () => {
    queueRerenderWithNewMoodValue("happy");
  };

  const handleMoodChangeToConfused = () => {
    queueRerenderWithNewMoodValue("confused");
  };

  const handleMoodChangeToSad = () => {
    queueRerenderWithNewMoodValue("sad");
  };

  console.log(
    "Component is rendering with a mood value of",
    moodValueFromCurrentRender
  );
  return (
    <>
      <h1>Mood Picker Demo</h1>
      <p>Chosen mood: {moodValueFromCurrentRender.toUpperCase()}</p>
      <button onClick={handleMoodChangeToHappy}>😀</button>
      <button onClick={handleMoodChangeToConfused}>🤔</button>
      <button onClick={handleMoodChangeToSad}>😢</button>
      <button onClick={() => queueRerenderWithNewMoodValue("laugh")}>😆</button>
      <button onClick={() => queueRerenderWithNewMoodValue("silent")}>
        🤐
      </button>
      <button onClick={() => queueRerenderWithNewMoodValue("cool")}>😎</button>
    </>
  );
}

export default MoodPickerDemo;
