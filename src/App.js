import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './pages/Home';
import CreateForm from './pages/CreateForm';
import Details from './pages/Details';
import EditForm from "./pages/EditForm"

function App() {
  return (
    <Router>
    <div >
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link class="nav-link " aria-current="page" to="/">Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/create">Create Form</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/details">Details</Link>
        </li>
       
      </ul>
    </div>
  </div>
</nav>

     

      {/*
        A <Switch> looks through all its children <Route>
        elements and renders the first one whose path
        matches the current URL. Use a <Switch> any time
        you have multiple routes, but you want only one
        of them to render at a time
      */}
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/create">
          <CreateForm />
        </Route>
        <Route path="/details">
          <Details />details
        </Route>
        <Route path="/editperson/:id" component={EditForm} />
      </Switch>
    </div>
  </Router>
  );
}

export default App;
