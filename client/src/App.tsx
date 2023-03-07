import { useSockets } from "../context/socketcontext";

function App() {
  const val = useSockets();
  console.log(val);
  return <div>Hellfdfdo</div>;
}

export default App;
