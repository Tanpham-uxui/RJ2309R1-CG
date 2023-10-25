import logo from './logo.svg';
import './App.css';
import AppCountJS from "./Component/AppCountJS";
import AppCount from "./Component/AppCount";
import RadioGroup from "./Component/RadioGroup";
import CheckboxGroup from "./Component/CheckboxGroup";
import ConditionalRendering from "./Component/HomeWork/ExpandCollapse";
import Calculator from "./Component/HomeWork/Calculator";

function App() {
  return (
      <div className="container">
        {/*<AppCount/>*/}
        {/*<CheckboxGroup/>*/}
        {/*<ConditionalRendering/>*/}
        <Calculator/>
      </div>
  );
}

export default App;
