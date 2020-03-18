import React from 'react';
import NavBar from './components/navbar'
import TextBox from './components/textbox'
import Content from './components/content'
import { connect } from 'react-redux';

function App(props) {
  return (
    <div className="App">
      <NavBar />
      {/* <TextBox /> */}
      {/* {props.data.map(i => i.name)} */}
      <Content />
    </div>
  );
}

export default connect(
  state => ({
    data: state.data
  })
)(App);
