import logo from './logo.svg';
import './App.css';
import AppCountJS from "./Component/AppCountJS";
import AppCount from "./Component/AppCount";
import RadioGroup from "./Component/RadioGroup";
import CheckboxGroup from "./Component/CheckboxGroup";

function App() {
  return (
      <div className="container">
          {/*<AppCount/>*/}
          <CheckboxGroup/>
      </div>
  );
}

export default App;
