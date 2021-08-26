import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Result from './page/Result';
import TestFin from './page/TestFin';
import TestSample from './page/TestSample';
import Test from './page/Test';
import UserInfo from './page/UserInfo';
import './App.css';
import { AnswerProvider } from './answerContext';

function App() {
  return (
    <AnswerProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/result">
            <Result />
          </Route>
          <Route exact path="/fin">
            <TestFin />
          </Route>
          <Route exact path="/example">
            <TestSample />
          </Route>
          <Route exact path="/progress">
            <Test />
          </Route>
          <Route exact path="/">
            <UserInfo />
          </Route>
        </Switch>
      </BrowserRouter>
    </AnswerProvider>
  );
}

export default App;
