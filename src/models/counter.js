// src/models/counter.js
import model from 'models';

const reducers = {
  increment() {
    this.update(n => n + 1);
  },
  decrement() {
    this.update(n => n - 1);
  }
}

export default model({
  state: 0,
  reducers
});