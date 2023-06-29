export const BUY_CAKE = 'BUY_CAKE';

const BUY_CAKE_ACTION = {
  type: BUY_CAKE,
  info: 'First redux action',
};

//Action creator
export const buyCake = () => BUY_CAKE_ACTION;
