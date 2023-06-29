export const BUY_CAKE = 'BUY_CAKE';
export const BUY_ICECREAM = 'BUY_ICECREAM';

const BUY_CAKE_ACTION = {
  type: BUY_CAKE,
  info: 'First redux action',
};

const BUY_ICECREAM_ACTION = {
  type: BUY_ICECREAM,
  info: 'First redux action',
};

//Action creator
export const buyCake = () => BUY_CAKE_ACTION;
export const buyIceCream = () => BUY_ICECREAM_ACTION;
