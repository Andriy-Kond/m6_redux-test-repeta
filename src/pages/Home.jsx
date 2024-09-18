import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "reduxTools/actions";

function Home() {
  const dispatch = useDispatch();
  const storeValue = useSelector(state => state.value);

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
    </>
  );
}

export default Home;
