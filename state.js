export const cakes = {
  numberofCake: 100,
  rogale: {
    czekoladowe: {
      count: 12,
    },
    waniliowe: {
      count: 12,
    },
  },
  paczki: {
    czekoladowe: {
      count: 12,
    },
    z_budyniem: {
      count: 12,
    },
  },
  validateState: function () {
    return this.rogale.czekoladowe.count;
  },
};

export const ice_scream = {
  numberofIceCream: 100,
  smaki: {
    czekoladowe: {
      count: 12,
    },
    waniliowe: {
      count: 12,
    },
  },
  validateState: function () {
    return this.rogale.czekoladowe.count;
  },
};
