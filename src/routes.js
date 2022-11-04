import { Switch, Route } from 'react-router-dom';
import { Home, Contact, ShopPage, Product } from './layouts';
const Routes = (props) => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/contact-us" component={Contact} />
      <Route exact path="/shop-page" component={ShopPage} />
      <Route exact path="/shop-page/product" component={Product} />
    </Switch>
  );
};
export default Routes;
