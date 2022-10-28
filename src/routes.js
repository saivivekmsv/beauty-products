import { Switch, Route } from 'react-router-dom';
import { Home, Contact } from './layouts';
const Routes = (props) => {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route exact path="/contact-us" component={Contact} />
    </Switch>
  );
};
export default Routes;
