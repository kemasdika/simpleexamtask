import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './pages/Home'
import FormSoal from './pages/FormSoal'
import FormJawaban from './pages/FormJawaban'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/jawaban">
            <FormJawaban />
          </Route>
          <Route path="/soal">
            <FormSoal />
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
