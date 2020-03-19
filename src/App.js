import React from 'react';
import NavBar from './components/navbar'
// import TextBox from './components/textbox'
import Content from './components/content'
import Navigator from './components/navigator'
import Client from './components/clientpart'
import Search from './components/search'
import { connect } from 'react-redux';

function App(props) {
  return (
    <div className="App">
      <NavBar />
      {/* <TextBox /> */}
      {/* {props.data.map(i => i.name)} */}
      <Client>
        <Navigator>
          <Search />
        </Navigator>
        <Content />
      </Client>
    </div>
  );
}

export default connect(
  state => ({
    data: state.data
  })
)(App);
