import logo from './logo.svg';
import './App.css';
import UseState from "./components/UseState";
import TwoWayBinding from "./components/TwoWayBinding";
import TwoWayBindingFormSubmit from "./components/TwoWayBindingFormSubmit";

function App() {
  return (
      <div className="container">
        {/*<UseState/>*/}
        {/*<TwoWayBinding/>*/}
        <TwoWayBindingFormSubmit/>
      </div>
  );
}

export default App;
