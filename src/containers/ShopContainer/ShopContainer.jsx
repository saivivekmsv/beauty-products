import { useHistory } from 'react-router-dom';
const ShopContainer = (props) => {
  const history = useHistory();
  return (
    <div className="container-fluid shop-container">
      <div className="row">
        <div className="main-header">Products</div>
      </div>
      <div className="row">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3].map((e, i) => {
          return (
            <div className="col-12 col-lg-3 product-card">
              <div
                className="card product"
                onClick={() => history.push('/shop-page/product')}
              >
                <img
                  src="https://cdn.shopify.com/s/files/1/0451/7468/5852/products/95D95493-3620-48F1-BB6D-2534B16D3521.jpg?v=1667148948&width=533"
                  className="card-img-top"
                  alt="cardblog"
                />
                <div className="card-body">
                  <h4 className="card-title">Autumn Skin Care Checklist</h4>
                  <h5>&#8377; 449.43</h5>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default ShopContainer;
