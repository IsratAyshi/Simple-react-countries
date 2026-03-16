
//Which hook is commonly used to load data from an API in React? answer: useEffect

//What does .catch() do when used with a fetch promise? answer: handle errors

//In React, how do you display a list of countries from an array of data? answer: map

//Which prop is required when rendering a list of elements in React? answer: key

//If a flag image URL is missing, how can you display alternative text in React? answer: alt

//What does "lifting up the state" mean in React? answer: moving state up to a parent component. 

//Why is array comparison in React state tricky? answer: Because arrays are compared by reference, not by value


//------*****Why is this wrong? 
//    items.push("apple")
//    setItems(items)  answer: In JavaScript, push() modifies the original array, but React checks state changes using reference comparison. Since the reference didn’t change, React may think: 'State didn't change → no re-render needed'. Correct way is to create a new array and set it. 
// setItems([...items, "apple"]); or 
// setItems(prevItems => [...prevItems, "apple"]);


//