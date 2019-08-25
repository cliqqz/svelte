// src/models/index.js
import { writable } from 'svelte/store';

function createModel(object) {
  let model = writable(object.state);
  model = {...model, ...object.reducers};
  return model;
}

function dispatcher(model) {
  return function(object){
    if (!object.hasOwnProperty('type')) return;
    if (!object.hasOwnProperty('payload')) object.payload = {};
    return model[object.type](object.payload);
  }
}

export default function (object) {
  let model = createModel(object);
  model.dispatch = dispatcher(model);
  return model;
}