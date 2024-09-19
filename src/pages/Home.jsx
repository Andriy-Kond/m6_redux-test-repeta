import { nanoid } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { add, decrement, increment, remove } from "reduxTools/slices";
// import { decrement, increment } from "reduxTools/actions";

export function Home() {
  const dispatch = useDispatch();
  const storeValue = useSelector(state => state.storeValues.value);

  const items = useSelector(state => state.storeItems);

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

      <p>Items</p>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            {item.a}
            <button type="button" onClick={() => dispatch(remove(item.id))}>
              Remove Item
            </button>
          </li>
        ))}
      </ul>
      <button
        type="button"
        onClick={() => dispatch(add({ id: nanoid(), a: 111 }))}>
        Add Item
      </button>
    </>
  );
}

// export default Home;
