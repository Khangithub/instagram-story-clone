import {NEXT_STORY, PRE_STORY} from './storyTypes';

export const nextStory = () => ({
  type: NEXT_STORY,
});

export const preStory = () => ({
  type: PRE_STORY,
});
