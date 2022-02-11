const state = {
  data: {
    nombre: ""
  },
  listeners: [],
  getState() {
    return this.data;
  },
  setState(newState) {
    this.data = newState;
    for (const cb of this.listeners) {
      cb();
    }
    console.log("soy el state, he cambiado ", this.data)
  },
  subscribe(callback: (any) => any) {
    this.listeners.push(callback);
  },
};

export { state };
