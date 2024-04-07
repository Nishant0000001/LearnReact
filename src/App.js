import Jsx from "./container/Jsx.js"
import DataBinding from "./container/DataBinding.js"
import Users from "./container/Users.js"
import {Routes, NavLink, Route} from 'react-router-dom';

function App() {
  return (
    <div>
      <nav className= "navbar navbar-expand navbar-light bg-light">
        <ul className="nav navbar-nav">
          <li className="nav-item">
            <NavLink className="nav-link" to="/">Jsx</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/binding">binding</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/users">users</NavLink>
          </li>
          
        </ul>
      </nav>
      <div className="container">
        
        { /*<Jsx />
        <DataBinding /> 
        <Users />
        */}

        <Routes>
          <Route path="/" element={<Jsx />}></Route>
          <Route path="/binding" element={<DataBinding />}></Route>
          <Route path="/users" element={<Users />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
