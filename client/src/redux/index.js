let intialState = ["ahmad", "afghan", "khan"];

function reducer(state = intialState, action) {
  switch (action.type) {
    case "songs/addSong": {
      return [...state, action.payload];
    }

    case "songs/removeSong": {
      state = state.filter((song) => song !== action.payload);
      return [...state];
    }

    default:
      return state;
  }
}

const addSong = reducer(intialState, {
  type: "songs/addSong",
  payload: "wali",
});

console.log(addSong);

const removeSong = reducer(addSong, {
  type: "songs/removeSong",
  payload: "ahmad",
});

console.log(removeSong);
