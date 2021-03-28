import { Route, Switch, Redirect } from 'react-router-dom'
import Home from './Components/Home/Home';
import About from './Components/About/About'
import Menu from './Components/Menu/Menu';
import Team from './Components/Team/Team';
import Gallery from './Components/Gallery/Gallery';
import Blog from './Components/Blog/Blog';
import Reservation from './Components/Reservation/Reservation';
import Contact from './Components/Contact/Contact';


const AppRouter = () => {
    return (
        <div className="routing">
            <Switch>
                <Route path="/home" component={Home}></Route>
                <Route path="/about" component={About}></Route>
                <Route path="/menu" component={Menu}></Route>
                <Route path="/team" component={Team}></Route>
                <Route path="/gallery" component={Gallery}></Route>
                <Route path="/blog" component={Blog}></Route>
                <Route path="/reservation" component={Reservation}></Route>
                <Route path="/contact" component={Contact}></Route>
                <Redirect to='/home' />
            </Switch>
        </div>
    );
}

export default AppRouter;