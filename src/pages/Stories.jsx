import React, {useEffect} from 'react';
import storiesDB from '../storiesDB';
import StoriesHeader from '../components/StoriesHeader';
import {useSelector, useDispatch} from 'react-redux';
import {nextStory, preStory} from '../redux/story/storyActions';
import './Stories.css';

function Stories() {
  const mainStoryIndex = useSelector((state) => state.mainStoryIndex);
  const subStoryIndex = useSelector((state) => state.subStoryIndex);
  const dispatch = useDispatch();

  useEffect(() => {
    const progressList = Array.from(document.querySelectorAll('.progress'));

    for (var i = 0; i < progressList.length; i++) {
      if (i === subStoryIndex) {
        progressList[i].classList.add('progress__loading__start');
      } else {
        progressList[i].classList.remove('progress__loading__start');
      }
    }

    const initProgress = progressList[subStoryIndex];

    initProgress.addEventListener(
      'animationend',
      function () {
        initProgress.classList.remove('progress__loading__start');
      },
      false
    );

    console.log('out of the event');
  }, [subStoryIndex, mainStoryIndex, dispatch]);

  return (
    <div className="stories">
      <StoriesHeader />
      <div>
        <button onClick={() => dispatch(preStory())}>◀ </button>

        <div className="story__container">
          <div>
            <img src={storiesDB[mainStoryIndex].avatar} alt="" />
            <span>...</span>
          </div>
          <div>
            {storiesDB[mainStoryIndex].mediaList.map((media, index) => (
              <div
                key={index}
                style={{
                  animationDuration: `${media.duration}s`,
                }}
                className="progress"
              ></div>
            ))}
          </div>
          <div
            style={{
              display: 'flex',
              width: '100%',
              background: 'pink',
              justifyContent: 'center',
            }}
          >
            {storiesDB[mainStoryIndex].mediaList[subStoryIndex].type ===
            'image' ? (
              <img
                src={storiesDB[mainStoryIndex].mediaList[subStoryIndex].url}
                alt=""
                style={{
                  objectFit: 'contain',
                  display: 'flex',
                  width: '100%',
                }}
              />
            ) : (
              <video
                src={storiesDB[mainStoryIndex].mediaList[subStoryIndex].url}
                style={{
                  display: 'flex',
                  width: '100%',
                }}
                controls
                autoPlay
                onEnded={() => dispatch(nextStory())}
              />
            )}
          </div>
        </div>
        <button id="nextStoryBtn" onClick={() => dispatch(nextStory())}>
          ▶
        </button>
      </div>
    </div>
  );
}

export default Stories;
