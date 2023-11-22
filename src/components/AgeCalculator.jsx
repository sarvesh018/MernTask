import React, { useState } from 'react';

const AgeCalculator = () => {
  const [birthDate, setBirthDate] = useState('');
  const [age, setAge] = useState(null);

  const calculateAge = () => {
    const today = new Date();
    const birthDateObj = new Date(birthDate);

    if (isNaN(birthDateObj)) {
      alert('Please enter a valid date of birth!');
      return;
    }

    const ageDiff = today - birthDateObj;
    const ageDate = new Date(ageDiff);

    setAge(Math.abs(ageDate.getUTCFullYear() - 1970));
  };

  return (
    <div className='flex flex-col  items-center justify-center gap-10'>
      <label>
        Enter your date of birth: {"  "}
        <input
          type="date"
          value={birthDate}
          onChange={(e) => setBirthDate(e.target.value)}
        />
      </label>
      <button onClick={calculateAge}>Calculate Age</button>
      {age !== null && <p>Your age is: {age} years</p>}
    </div>
  );
};

export default AgeCalculator;
