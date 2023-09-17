import React, { useState, useEffect } from 'react';

function App() {
  const initialPerson = {
    fullName: "Mehdi Chaaki",
    bio: "@Mehdi",
    imgSrc: "url-to-image",
    profession: "Software Developer"
  };

  const [person, setPerson] = useState(initialPerson);
  const [show, setShow] = useState(false);
  const [mountTime, setMountTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setMountTime(prevMountTime => prevMountTime + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const toggleShow = () => {
    setShow(!show);
  };

  return (
    <div className="App">
      <h1>Person Profile</h1>
      <button onClick={toggleShow}>
        Toggle Profile
      </button>
      {show && (
        <div>
          <h2>{person.fullName}</h2>
          <p>{person.bio}</p>
          <img src={person.imgSrc} alt="Profile" />
          <p>Profession: {person.profession}</p>
        </div>
      )}
      <p>Time since mount: {mountTime} seconds</p>
    </div>
  );
}

export default App;
