import { nanoid } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { add, decrement, increment, remove } from "reduxTools/slices";
// import { decrement, increment } from "reduxTools/actions";

function Home() {
  const dispatch = useDispatch();
  const storeValue = useSelector(state => state.storeValues.value);

  const items = useSelector(state => state.storeItems);

  let count = 0;
  return (
    <>
      <h2>Home</h2>
      <p>{storeValue}</p>
      <button type="button" onClick={() => dispatch(increment(100))}>
        Increment
      </button>
      <button type="button" onClick={() => dispatch(decrement(50))}>
        Decrement
      </button>

      <p>{items}</p>
      <button
        type="button"
        onClick={() => dispatch(add({ id: 1, count: (count += 1) }))}>
        Add Item
      </button>
      <button type="button" onClick={() => dispatch(remove(1))}>
        Remove Item
      </button>
    </>
  );
}

export default Home;
