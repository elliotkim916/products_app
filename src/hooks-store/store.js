import { useState, useEffect } from 'react';

let globalState = {};
let listeners = [];
let actions = {};

// if a component uses a custom hook and that custom hook uses useState,
// that component will re-render when useState in the custom hook triggers a re-render
export const useStore = (shouldListen = true) => {
  // managing data from outside of the hook, every file that imports this file gets the same shared data
  const [state, setState] = useState(globalState);

  const dispatch = (actionIdentifier, payload) => {
    const newState = actions[actionIdentifier](globalState, payload);
    globalState = { ...globalState, ...newState };

    for (const listener of listeners) {
      // listener is setState
      listener(globalState);
    }
  };

  useEffect(() => {
    if (shouldListen) {
      listeners.push(setState);
    }
    // setState from useState, React guarantees this never changes for a given component
    // so this effect will only run once and only clean up once

    return () => {
      listeners = listeners.filter((li) => li !== setState);
    };
  }, [shouldListen]);

  return [globalState, dispatch];
};

export const initStore = (userActions, initialState) => {
  if (initialState) {
    globalState = { ...globalState, ...initialState };
  }

  actions = { ...actions, ...userActions };
};
