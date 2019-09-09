import React from 'react';
import ReactDOM from 'react-dom';

/* Here you can custom your own entry component */
/*  <> </> is the shorthand syntax for <Fragments></Fragments> but doesn't support keys or attributes */
const InitialComponent = () => <>React boilerplate</>
ReactDOM.render(<InitialComponent />, document.getElementById('app'))
  


