import './App.css';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Login from './pages/Login';
import Registration from './pages/Registration';
import Public from './pages/Public';
import Private from './pages/Private';
import { Container, Nav } from 'react-bootstrap';

function App() {
  return (
    <BrowserRouter>
      <Container className="App">
        <Nav className="justify-content-center">
          <Nav.Item >
            <Nav.Link href="/public">Public</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/private">Private</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/registration">Registration</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/login">Login</Nav.Link>
          </Nav.Item>
        </Nav>
        <Switch>
          <Route component={Login} path={'/login'}></Route>
          <Route component={Registration} path={'/registration'}></Route>
          <Route component={Public} exact path={'/public'} ></Route>
          <Route component={Private} path={'/private'}></Route>
        </Switch>
      </Container >
    </BrowserRouter >
  );
}
export default App;
