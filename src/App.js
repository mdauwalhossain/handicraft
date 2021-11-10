import './App.css';
import {  BrowserRouter as Router,  Switch,  Route} from "react-router-dom";
import Explore from './Pages/Home/Explore/Explore';
import Home from './Pages/Home/Home/Home';
import Purchase from './Pages/Purchase/Purchase';
import Login from './Pages/Login/Login';
import Navigation from './Pages/Home/Navigation/Navigation';
import Register from './Pages/Login/Register/Register';



function App() {
  return (
    <div className="App">
     <Router>
       <Navigation></Navigation>
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
         <Route path="/login">
          <Login></Login>
         </Route>
         <Route path="/register">
          <Register></Register>
         </Route>
       </Switch>
     </Router>
    </div>
  );
}

export default App;
