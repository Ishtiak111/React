

export default function Cart() {
  let counter = 0;
  return (
    <div>
      <h3>Shopping Cart</h3>
      <p>Item in the cart: {counter}</p>
      <button>Add 1</button>
    </div>
  );
}

// function useState(initialValue){
//     let state = initialValue;
//     function setState(newValue){
//         state = newValue;
//     }
//     return [state, setState];
// }

// const [counter, setCounter] = useState(0);
// React:
// const [counter, setCounter] = useState(0)
