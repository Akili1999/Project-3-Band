import React, { Component } from 'react';

import NavBar from ' ./components/Navbar';

import ForumList from './components/ForumList';

import ForumModal from './components/ForumModal';

import { Container } from 'reactstrap';

import { Provider } from 'react-redux';

import store from './store';

import { loadUser } from './actions/authActions'

import 'bootstrap/dist/css/boostrap.min.css'

import './App.css';

class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }

  render() {
    return (
      <Provider store= {store}>
        <div className='App'>
          <NavBar>
            <Container>
              <ForumModal>
                <ForumList>
                  
                </ForumList>
              </ForumModal>
            </Container>
          </NavBar>
        </div>
      </Provider>
    )
  }
}


export default App;
