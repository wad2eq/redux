// Import stylesheets
import './style.css';

import store from './entities';
import { buyCake, buyIceCream } from './actions';

// get stat
//subscriber of the state
// Przekaz metode
store.subscribe(() => console.log('updated state', store.getState()));
store.dispatch(buyCake());
store.dispatch(buyIceCream());
// console.log(buyCake());
