# React useState & useEffect Practice Notes

This project is a simple practice app created to understand the concepts of `useState` and `useEffect` in React. It includes a user input that updates state and logs changes using side effects.

---

## 🔹 What is `useState`?

### 🧠 Concept:
`useState` is a React Hook that allows functional components to store and manage local state (data).

It helps React remember values that change over time, like input data, button clicks, or toggles.

### ✅ Syntax:

```
const [value, setValue] = useState(initialValue);
```

* value: current state value (readable)

* setValue: function to update the state

* initialValue: default value of the state

🎯 Example Use Case:
```

const [name, setName] = useState('');
```
Here, name holds the value of a text input, and setName is used to update it.

## 🔹 What is useEffect?
### 🧠 Concept:
useEffect is a React Hook used to run side effects after the component renders.

It’s used when we want to:

Fetch data from an API

Listen to changes in variables

Run something once when the page loads (like analytics, timers, messages)

## ✅ Syntax:
```
useEffect(() => {
  // code to run after render
}, [dependencies]);
```
* If dependencies is empty ([]), it runs once when the component loads.

* If it contains a variable like [name], it runs every time name changes.

### 🎯 Real-life Example:
```
useEffect(() => {
  console.log('Name changed:', name);
}, [name]);
```
Whenever name changes, this code runs and logs the new name.

### 💻 App Functionality
A text input lets the user type their name.

The useState hook stores the name.

The useEffect hook listens for name changes and logs them to the console