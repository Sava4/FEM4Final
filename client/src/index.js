import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addSlide, updateSlide} from './newSlide'
import {addProduct, updateProduct} from './newProduct'
import {deleteOneProduct, deleteAllProducts} from './deleteProducts'

import * as serviceWorker from './serviceWorker';



// // addSlide();
// updateSlide();

// addProduct();
// updateProduct();

// deleteOneProduct();
// deleteAllProducts();

 ReactDOM.render(<App />,  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
