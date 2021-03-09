import React from 'react';
import storiesDB from '../storiesDB';
import './StoriesHeader.css';

function StoriesHeader() {
  return (
    <div className="stories__header">
      {storiesDB.map(({avatar, mediaList}, index) => (
        <div
          style={{
            display: 'flex',
          }}
        >
          <img src={avatar} alt="" key={index} />
          <p>{mediaList.length}</p>
        </div>
      ))}
    </div>
  );
}

export default StoriesHeader;
