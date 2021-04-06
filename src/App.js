import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './pages/Home'
import FormSoal from './pages/FormSoal'
import FormJawaban from './pages/FormJawaban'
import FormMaker from './pages/FormMaker'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/jawaban">
            <FormJawaban />
          </Route>
          <Route path="/soal/:id">
            <FormSoal />
          </Route>
          <Route path="/formMaker">
            <FormMaker />
          </Route>
          <Route path="/" >
            <Home />
          </Route>
        </Switch>      
    </Router>
    </div>
  );
}

export default App;
