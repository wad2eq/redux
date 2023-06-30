// Import stylesheets
import './style.css';

import store from './entities';
import { buyCake, buyIceCream } from './actions';

//subscribe the functrions
// store.subscribe(() => console.log('updated state', store.getState()));

//Update the state
store.dispatch(buyCake());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());
