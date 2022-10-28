import { Switch, Route } from 'react-router-dom';
import { Home, Contact } from './layouts';
const Routes = (props) => {
  return (
    <Switch>
      <Route exact path="/beauty-products/" component={Home} />
      <Route exact path="/beauty-products/contact-us" component={Contact} />
    </Switch>
  );
};
export default Routes;
