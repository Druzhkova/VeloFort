import { Route, Switch, Redirect } from 'react-router-dom';
import { Layout } from './layout';
import {
  Information, Map, Settings, Sight, NotFound, SightDetails,
} from './pages';

function App() {
  return (
    <Layout>
      <Switch>
        <Route exact path="/" component={Map} />
        <Route exact path="/sight" component={Sight} />
        <Route exact path="/information" component={Information} />
        <Route exact path="/settings" component={Settings} />
        <Route exact path="/not-found" component={NotFound} />
        <Route exact path={'/:title'} component={SightDetails} />
        <Redirect to="/not-found" />
      </Switch>
    </Layout>
  );
}

export default App;
