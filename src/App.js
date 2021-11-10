import './App.css';
import {  BrowserRouter as Router,  Switch,  Route} from "react-router-dom";
import Explore from './Pages/Home/Explore/Explore';
import Home from './Pages/Home/Home/Home';
import Purchase from './Pages/Purchase/Purchase';



function App() {
  return (
    <div className="App">
     <Router>
       <Switch>
         <Route exact path="/">
         <Home></Home>
         </Route>
         <Route path="/home">
          <Home></Home>
         </Route>
         <Route path="/explore">
          <Explore></Explore>
         </Route>
         <Route path="/purchase">
          <Purchase></Purchase>
         </Route>
       </Switch>
     </Router>
    </div>
  );
}

export default App;
