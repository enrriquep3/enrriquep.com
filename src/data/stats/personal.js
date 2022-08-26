import React, { useState, useEffect } from 'react';

const Age = () => {
  const [age, setAge] = useState();

  const tick = () => {
    const divisor = 1000 * 60 * 60 * 24 * 365.2421897;
    const birthTime = new Date('1996-03-05T03:24:00');
    setAge(((Date.now() - birthTime) / divisor).toFixed(11));
  };

  useEffect(() => {
    const timer = setInterval(() => tick(), 25);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return <>{age}</>;
};

const data = [
  {
    key: 'age',
    label: 'Current age',
    value: <Age />,
  },
  {
    key: 'countries',
    label: 'Countries visited',
    value: 12,
    link:
      'https://www.google.com/maps/d/u/0/edit?mid=1oMzTrTuPrghRj9peUXVBpRT-s6MCFzbN&usp=sharing',
  },
  {
    key: 'location',
    label: 'Current city',
    value: 'Cincinnati, OH',
  },
  {
    key: 'Languages',
    label: 'Languages',
    value: 'English, Spanish',
  },
  {
    key: 'Repositories',
    label: 'GitHub Repositories',
    value: '36',
  },
];

export default data;
