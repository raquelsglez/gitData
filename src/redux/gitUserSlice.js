import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: null,
  inputUsername: '',
  followers: 0,
  publicRepos: 0,
  image: null,
  gitUsername: '',
};

export const gitUserSlice = createSlice({
  name: 'gitUser',
  initialState,
  reducers: {
    addUser: (state, action) => {
        const { name, login, followers, public_repos, avatar_url } = action.payload;
        state.name = name;
        state.gitUsername = login;
        state.followers = followers;
        state.publicRepos = public_repos;
        state.image = avatar_url;
        state.inputUsername = '';
    },
    setInputUsername: (state, action) => {
        state.inputUsername = action.payload;
      },
  },
});


export const { addUser, setInputUsername } = gitUserSlice.actions;
export default gitUserSlice.reducer;
