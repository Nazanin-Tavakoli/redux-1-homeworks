// explain below concepts and write an example for each one

// action:
For a 7-year-old:
Imagine you're telling your mom, "I want a cake!" This request is the action. You’re asking for something to be done for you.

For a high school computer science student:
An action is a message that tells the program what needs to happen. For example, when you press an "Add" button in a to-do list, the button sends an action saying a new item should be added to the list.

For a professional programmer:
An action is an object that contains at least a type key, defining what operation should be performed on the application's state. These actions are processed by reducers to update the state.

{
    type: 'ADD_TODO',
    payload: {
      id: 1,
      text: 'Run'
    }
  }
  

// action creator:
For a 7-year-old:
Before asking your mom for something, you think about what to say. The action creator is like that thought that tells you how to make your request.

For a high school computer science student:
An action creator is a function that generates different actions. For example, when you want to add something, there’s a predefined function that creates an "Add" action and sends it to the system.

For a professional programmer:
An action creator is a function that automatically generates required actions. These functions help keep the code readable and manageable, so you don’t have to manually define actions throughout your codebase.

const addTodo = (text) => {
    return {
      type: 'ADD_TODO',
      payload: {
        id: new Date().getTime(),
        text
      }
    };
  };
  
  
// reducer:
For a 7-year-old:
When you ask for cake, your mom checks if you have cake already and decides whether to give you more or not. The reducer does exactly that.

For a high school computer science student:
A reducer is a function that takes the current state and the action, then decides how the state should change. For example, when the "Add" action comes, the reducer adds a new item to the list.

For a professional programmer:
A reducer is a pure function that takes two inputs: the current state and an action. It then applies the required changes to the state based on the action type, producing a new state without directly modifying the original one.

const todoReducer = (state = [], action) => {
    switch (action.type) {
      case 'ADD_TODO':
        return [...state, action.payload];
      default:
        return state;
    }
  };
  

// store:
For a 7-year-old:
The store is like a box that holds everything you need. Whenever you want something, you get it from the box.

For a high school computer science student:
The store is where all the information (state) for the program is kept. Every change or update is stored here, so the program knows what its current state is.

For a professional programmer:
The store holds the entire state of the application in one place. This state can be updated through reducers and actions, and the store provides the ability to listen to state changes and access the current state as needed.

import { createStore } from 'redux';

const store = createStore(todoReducer);





