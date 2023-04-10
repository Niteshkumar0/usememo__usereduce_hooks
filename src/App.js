import Usememo from "./components/Usememo";
import Usereduce from "./components/Usereduce";

function App() {
  return (
    <>
      <h1>useMemo</h1>
         <Usememo/>
         <hr />
         <h1>useReducer</h1>
         <Usereduce/>
    </>
  );
}

export default App;
