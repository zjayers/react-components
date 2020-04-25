import { combineReducers } from 'redux';

// Song List Reducter
const songsReducer = () => {
  return [
    { title: 'No Scrubs', duration: '4:05' },
    { title: 'Macarena', duration: '3:30' },
    { title: 'All Star', duration: '3:15' },
    { title: 'I Want It That Way', duration: '5:02' },
  ]
};

// Selected Song Reducer
const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }
  return selectedSong;
}

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});