const store = {
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

export default store;
