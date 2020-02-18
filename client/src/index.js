import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addSlide, updateSlide, addCategory} from './newSlide';
import {addProduct, updateProduct} from './newProduct';
import {deleteOneProduct, deleteAllProducts} from './deleteProducts';
import {addLinks} from './newLinks';

import * as serviceWorker from './serviceWorker';



// addSlide();
// updateSlide();


// addProduct();
// updateProduct();


// deleteOneProduct();
// deleteAllProducts();


// addCategory()

 ReactDOM.render(<App />,  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
