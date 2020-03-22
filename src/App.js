import React, { useEffect, useRef } from 'react';
import NavBar from './components/navbar'
// import TextBox from './components/textbox'
import Content from './components/content'
import Navigator from './components/navigator'
import Client from './components/clientpart'
import Search from './components/search'
import ErrorBoundary from './components/error'
import { connect } from 'react-redux';
import { asyncGetMovie } from './actions/content'


function App(props) {
  const width = useRef(0)

  useEffect(() => {
    props.onGetMovie()
  }, [])
  return (
    <div className="App">

      <NavBar width={width} />
      <Client>
        <Navigator width={width}>
          <Search />
        </Navigator>
        <ErrorBoundary>
          <Content />
        </ErrorBoundary>
      </Client>
    </div>
  );
}

export default connect(
  state => ({
  }),
  dispatch => ({
    onGetMovie: () => {
      dispatch(asyncGetMovie())
    }
  })
)(App);
