import React, { Component } from 'react';

import NavBar from './components/NavBar';

import ForumList from './components/ForumList';

import ForumModal from './components/ForumModal';

import { Container } from 'reactstrap';

import { Provider } from 'react-redux';

import store from './store';

import { loadUser } from './actions/authActions';

import './App.css';

class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }

  render() {
    return (
      <Provider store= {store}>
        <div className='App'>
          <NavBar />
            <Container>
              <ForumModal />
                <ForumList />
            </Container>
        </div>
      </Provider>
    );
  }
}


export default App;
