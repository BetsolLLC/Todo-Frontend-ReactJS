# Frontend for Todo App

## Setup
1. Create a new React App Using - `npx create-react-app new-app`
2. Navigate to the App project directory - `cd new-app`

3. In the project directory, you can run:
### `npm install` 
Installs the necessary dependencies
### `npm start`
Runs the app in the development mode.

Open [http://localhost:3000](http://localhost:3000) to view it in your browser if it does not automatically open on the 'npm start' command.

## Notes

## React JS Introduction 
### Components
A Component is the core building block of a React application. These are  independent and reusable bits of code. Each component exists in the same space, but they work independently from one another and merge all in a parent component, which will be the final UI of your application.

### States
React components have a built-in state object. The state object is where you store property values that belongs to the component. When the state object changes, the component re-renders.

### Props
Props stand for "Properties." It is an object which stores the values of attributes of a tag and work similar to the HTML attributes. It gives a way to pass data from one component to other components. Props are passed to the component in the same way as arguments passed in a function.

## React Hooks
Hooks allows you to use state and other React features without writing a class. Hooks are the functions which "hook into" react states from function components. This allows us to manage component's state or perform an after effect when certain changes occur in state(s) without writing a class. 

### useState
The React useState Hook allows us to track state in a function component. State generally refers to data or properties that need to be tracking in an application.

useState accepts an initial state and returns two values:\
`const [stateVariable, setStateVariableFunction] = useSate(initialState)`

### useEffect
The useEffect Hook allows you to perform side effects in your components. Some examples of side effects are: fetching data, directly updating the DOM, and timers.

useEffect accepts two arguments: \
`useEffect(function, dependency_list)`

### useRef
The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated.

It is generally used to map to the value of a HTML element like below:\
`const inputText = useRef()`\
`<input type="text" ref="inputText"/>`

To retrieve the value of the input element at any given point, use:\
`const retrievedValue = inputText.current.value`

## Advances JS
### Array de-structuring
We may have an array or object that we are working with, but we only need some of the items contained in these. De-structuring makes it easy to extract only what is needed.

Example:

`const vehicles= [‘Mustang’ , ‘f-150’, ‘Expedition’];`\
`const [car, truck, suv] = vehicles;`

So, here variables `car = 'Mustang'`, `truck = 'f-150'` and `suv = 'Expedition'`

## Spread Operator
The JavaScript spread operator (...) allows us to quickly copy all or part of an existing array or object into another array or object respectively.\

Example: 

Arrays\
`const array1 = [1, 2, 3];`\
`const array2 = [4, 5, 6];`\
`const finalArray = […array1, …array2]; => [1,2,3,4,5,6]`

Objects\
`const object1 = {'name':'xyz', id: 1}`\
`const object2 = {'age': 50}`\
`const finalObject = {...object1, ...Object2}; => {'name':'xyz','id':1,'age':50}`
