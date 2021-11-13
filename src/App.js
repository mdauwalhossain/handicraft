import './App.css';
import {  BrowserRouter as Router,  Switch,  Route} from "react-router-dom";
import Explore from './Pages/Home/Explore/Explore';
import Home from './Pages/Home/Home/Home';
import Purchase from './Pages/Purchase/Purchase';
import Login from './Pages/Login/Login';
import Navigation from './Pages/Home/Navigation/Navigation';
import Register from './Pages/Login/Register/Register';
import AuthProvider from './context/AuthProvider/AuthProvider';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import NotFound from './Pages/NotFound/NotFound';



function App() {
  return (
    <div className="App">
     <AuthProvider>
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
         <Route path="*">
          <NotFound></NotFound>
         </Route>

         <PrivateRoute path="/purchase">
          <Purchase></Purchase>
         </PrivateRoute>
         
         <PrivateRoute path="/dashboard">
          <Dashboard></Dashboard>
         </PrivateRoute>

         <Route path="/login">
          <Login></Login>
         </Route>

         <Route path="/register">
          <Register></Register>
         </Route>

       </Switch>
     </Router>
     </AuthProvider>
    </div>
  );
}

export default App;
