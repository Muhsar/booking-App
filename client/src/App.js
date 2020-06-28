import React,{Component} from 'react';
import './App.css';
import Home from './components/home'
import Menu from './components/menu'
import Reserve from './components/reserve'
import Navbar from './components/navbar'
import Detail from './components/detail'
import Cart from './components/cart'
import Reservation from './components/reservation'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route  path='/reservation' component={Reservation}/>
            <Route path='/menu' component={Menu} />
            <Route path='/reserve' component={Reserve} />
            <Route path='/cart' component={Cart} />
            <Route path='/:appetizer_id' component={Detail} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
