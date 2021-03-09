import React, {useState, useEffect} from 'react';
import storiesDB from '../storiesDB';
import StoriesHeader from '../components/StoriesHeader';
import {useSelector, useDispatch} from 'react-redux';
import {nextStory, preStory} from '../redux/story/storyActions';
import './Stories.css';

function Stories() {
  const mainStoryIndex = useSelector((state) => state.mainStoryIndex);
  const subStoryIndex = useSelector((state) => state.subStoryIndex);
  const dispatch = useDispatch();
  const [imgNextStory, setImgNextStory] = useState(null);
  
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
        <button
          onClick={() => {
            clearTimeout(imgNextStory);
            dispatch(preStory());
          }}
        >
          ◀
        </button>

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
                id="img"
                src={storiesDB[mainStoryIndex].mediaList[subStoryIndex].url}
                alt=""
                style={{
                  objectFit: 'contain',
                  display: 'flex',
                  width: '100%',
                }}
                onLoad={() => {
                  var image = document.getElementById('img');
                  var isLoaded = image.complete && image.naturalHeight !== 0;
                  if (isLoaded) {
                    console.log('loaded', mainStoryIndex, subStoryIndex);
                    setImgNextStory(
                      setTimeout(() => {
                        dispatch(nextStory());
                      }, 5000)
                    );
                  }
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
        <button
          id="nextStoryBtn"
          onClick={() => {
            clearTimeout(imgNextStory);
            dispatch(nextStory());
          }}
        >
          ▶
        </button>
      </div>
    </div>
  );
}

export default Stories;
