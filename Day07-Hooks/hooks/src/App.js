import logo from './logo.svg';
import './App.css';
import UseState from "./components/UseState";
import TwoWayBinding from "./components/TwoWayBinding";
import TwoWayBindingFormSubmit from "./components/TwoWayBindingFormSubmit";
import InitStateCallBack from "./components/InitStateCallBack";
import PlayListApp from "./components/PlayList/PlayListApp";
import SelectCar from "./components/HomeWork/SelectCar";
import TodoList from "./components/HomeWork/TodoList";

function App() {
  return (
      <div className="container">
        {/*<UseState/>*/}
        {/*<TwoWayBinding/>*/}
        {/*<TwoWayBindingFormSubmit/>*/}
        {/*<InitStateCallBack/>*/}
        {/*<PlayListApp/>*/}
        {/*<SelectCar/>*/}
        <TodoList/>
      </div>
  );
}

export default App;
