import React from 'react';
import './season-display.style.css';

const seasonConfig = {
  summer: {
    text: 'Let\'s hit the beach!',
    iconName: 'sun'
  },
  winter: {
    text: 'Brrr, it\'s cold!',
    iconName: 'snowflake'
  }
}

const getSeason = (lat) => {
  const month = new Date().getMonth();

  if (month > 2 && month < 9) {
    return lat > 0 ? 'summer' : 'winter'
  } else {
    return lat < 0 ? 'summer' : 'winter'
  }
}

const SeasonDisplay = ({ lat }) => {

  const season = getSeason(lat);
  const {text, iconName} = seasonConfig[season];

  return (
    <div className={`season-display ${season}`}>
      <i className={`${iconName} icon massive icon-left`} />
      <h1>{text}</h1>
      <i className={`${iconName} icon massive icon-right`} />
    </div>
  );
}

export default SeasonDisplay;