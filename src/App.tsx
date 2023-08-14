import {Provider} from 'react-redux';
import React from 'react';
import store from './store';
import PostsApp from './components/PostsApp';

function App() {
  return (
    <Provider store={store}>
      <PostsApp />
    </Provider>
  );
}

export default App;
