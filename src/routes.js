import { Switch, Route } from 'react-router-dom';
import { Home, Contact, ShopPage, Product } from './layouts';
const Routes = (props) => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/contact-us" component={Contact} />
      <Route path="/shop-page" component={ShopPage} />
      <Route exact path="/product" component={Product} />
    </Switch>
  );
};
export default Routes;
