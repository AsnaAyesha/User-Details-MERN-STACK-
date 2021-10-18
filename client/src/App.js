import "./app.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router , Switch , Route } from "react-router-dom";

import NavBar from './components/navBar/NavBar'
import AllUser from "./components/user/allUser/AllUser";
import AddUser from "./components/user/addUser/AddUser";
import EditUser from "./components/user/editUser/EditUser";
import NotFound from "./components/notFound/NotFound";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/" component={AllUser} />
          <Route exact path="/add" component={AddUser} />
          <Route exact path="/edit/:id" component={EditUser} />
          <Route component={NotFound} />
        </Switch> 
      </div>
    </Router>  
  );
}

export default App;
