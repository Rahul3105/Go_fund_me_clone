import Main from "./components/components/main";
import Works from './components/components/works';
import Donate from './components/components/donate';
import Demo from './components/components/demo';
import Rahul from './components/rahul';
import {Switch,Route} from "react-router-dom";
export default function App() {
  
  return (
    <Switch>
      <Route exact path='/' component={Main} />
      <Route exact path='/works' component={Works} />
      <Route path='/rahul' component={Rahul} />
      <Route path='/donate' component={Donate} />
      <Route path='/demo' component={Demo} />
    </Switch>
  );
}
