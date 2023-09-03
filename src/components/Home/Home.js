import React, { useState, useEffect } from 'react';
import '../../styles/Home.css';

import Type  from './Type';

function Home() {
  const [currentTime, setCurrentTime] = useState('');
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      const currentHour = now.getHours();

      if (currentHour >= 4 && currentHour < 12) {
        setGreeting('Good morning');
      } else if (currentHour >= 12 && currentHour < 18) {
        setGreeting('Good afternoon');
      } else if(currentHour >= 18 && currentHour < 20) {
        setGreeting('Good evening');
      }
      else {
        setGreeting("Good night");
      }

      // Format the current time
      const formattedTime = now.toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      });

      setCurrentTime(formattedTime);
    };

    // Update time every second
    const interval = setInterval(updateDateTime, 1000);
    updateDateTime(); // Call it initially

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <section className="home">
      <div>
        <h1>{greeting} everyone</h1>
        <p>I am Shivam Singh</p>
      </div>
      <div className='position'>
         <Type />
      </div>
      <div>
        <p>Time: {currentTime}</p>
      </div>
    </section>
  );
}

export default Home;
