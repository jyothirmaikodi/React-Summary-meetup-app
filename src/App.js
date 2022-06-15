import { Route } from 'react-router-dom';
import NewMeetup from './pages/NewMeetup';
import Favourite from './pages/Favourite';
import AllMeetups from './pages/AllMeetups';
import { Switch } from 'react-router-dom';
//import MainNavigation from './components/layout/MainNavigation';
import Layout from './components/layout/Layout';



function App() {
  return (
    <Layout >
    <Switch>
    <Route path='/' exact><AllMeetups/></Route>
    <Route path='/new-meetup' exact><NewMeetup/></Route>
    <Route path='/favourite'><Favourite/></Route>
    </Switch>
    </Layout>
  );
}

export default App;
