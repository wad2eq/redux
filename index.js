// Import stylesheets
import './style.css';
import { buyCake } from './actions.js';
import state from './state.js';
import reducer from './reducer.js';
// Write Javascript code!
import 

const shop = reducer({ action: buyCake() });
console.log(shop.validateState());
