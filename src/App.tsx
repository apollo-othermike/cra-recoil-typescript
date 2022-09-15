import { useRecoilValue } from "recoil";
import { testAtomState, restEndpointState, validatorsQuery } from "./data";

function App() {
  const stateTest = useRecoilValue(testAtomState);
  const restEndpoint = useRecoilValue(restEndpointState);
  const validators = useRecoilValue(validatorsQuery);

  return (
    <div className="App">
      <h1>Hello World</h1>
      <div>test: {stateTest}</div>
      <div>rest endpoint: {restEndpoint}</div>
      <div>validators: {JSON.stringify(validators)}</div>
    </div>
  );
}

export default App;
