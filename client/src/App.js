import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LandingPage from './js/LandingPage';
import AuthPage from './js/AuthPage';
import VonagePage from './js/Vonage'
// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/custom.scss';
import FormPage from './js/FormPage';
import ComparisonPage from './js/ComparisonPage';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/signup" component={AuthPage} />
        <Route path="/vonage" component={VonagePage} />
        <Route path="/form" component={FormPage} />
        <Route path="/comparison/:comparisonId" component={ComparisonPage} />
        <Route path="/comparison" component={ComparisonPage} />
        <Route path="/" component={LandingPage} />
      </Switch>
    </BrowserRouter>
  )
}

/*
const App = () => {
  const [list, setList] = useState(null);

  useEffect(() => {
    const getList = () => {
      fetch('/api/getList')
      .then(res => res.json())
      .then(list => setList(list))
    }

    getList();
    // console.log(list);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
          Here's something cool: {list}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/

export default App;
