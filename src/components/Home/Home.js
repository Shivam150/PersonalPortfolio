import React, { useState, useEffect } from 'react';
import '../../styles/Home.css';

function Home() {
  const [currentTime, setCurrentTime] = useState('');
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      const currentHour = now.getHours();

      // Set greeting based on the time of the day
      if (currentHour >= 5 && currentHour < 12) {
        setGreeting('Good morning');
      } else if (currentHour >= 12 && currentHour < 18) {
        setGreeting('Good afternoon');
      } else {
        setGreeting('Good evening');
      }

      // Format the current time
      const formattedTime = now.toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
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
        <div className='img'><img src='../../images/MyProfile.png' alt="" /></div>
        <h1>{greeting} everyone</h1>
        <p>My name is Shivam Singh.<br/>I am a Full-Stack-Blockchain Developer.</p>
      </div>
      <div>
        <p>Time: {currentTime}</p>
      </div>
    </section>
  );
}

export default Home;
