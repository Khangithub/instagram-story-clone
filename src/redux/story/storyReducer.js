import {NEXT_STORY, PRE_STORY} from './storyTypes';
import storiesDB from '../../storiesDB';

const initialState = {
  mainStoryIndex: 0,
  subStoryIndex: 0,
};

const storyReducer = (state = initialState, action) => {
  switch (action.type) {
    case NEXT_STORY:
      if (
        state.subStoryIndex >=
        storiesDB[state.mainStoryIndex].mediaList.length - 1
      ) {
        return {
          ...state,
          mainStoryIndex: state.mainStoryIndex + 1,
          subStoryIndex: 0,
        };
      } else {
        return {
          ...state,
          subStoryIndex: state.subStoryIndex + 1,
        };
      }

    case PRE_STORY:
      if (state.subStoryIndex <= 0) {
        return {
          ...state,
          mainStoryIndex: state.mainStoryIndex - 1,
          subStoryIndex:
            storiesDB[state.mainStoryIndex - 1].mediaList.length - 1,
        };
      } else {
        return {
          ...state,
          subStoryIndex: state.subStoryIndex - 1,
        };
      }

    default:
      return state;
  }
};

export default storyReducer;
