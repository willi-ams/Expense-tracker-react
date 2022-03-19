import ReactDOM from 'react-dom';  // importing some ReactDOM objects from the package.json file(react-dom), importing to this index.js file

import './index.css';
import App from './App';    // App is a component

ReactDOM.render(<App />, document.getElementById('root')); // we're importing it(ReactDOM Object), to render the content of the "root". the root contents should be replaced with App 
