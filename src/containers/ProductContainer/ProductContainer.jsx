const ProductContainer = (props) => {
  return (
    <div className="container-fluid main-product-container">
      <div className="row">
        <div className="col-lg-6">
          <div className="row">
            <img
              src="https://cdn.shopify.com/s/files/1/0451/7468/5852/products/95D95493-3620-48F1-BB6D-2534B16D3521.jpg?v=1667148948&width=533"
              className="card-img-top"
              alt="cardblog"
            />
          </div>
          <div className="row mt-3">
            <div className="col">
              <img
                src="https://cdn.shopify.com/s/files/1/0451/7468/5852/products/95D95493-3620-48F1-BB6D-2534B16D3521.jpg?v=1667148948&width=533"
                className="card-img-bottom"
                alt="cardblog"
              />
            </div>
            <div className="col">
              <img
                src="https://cdn.shopify.com/s/files/1/0451/7468/5852/products/95D95493-3620-48F1-BB6D-2534B16D3521.jpg?v=1667148948&width=533"
                className="card-img-bottom"
                alt="cardblog"
              />
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="product-main-header">Some Product With Something</div>
          <div className="col product-reviews">
            <span className="product-rating">&#9733;</span>
            <span className="product-rating">&#9733;</span>
            <span className="product-rating">&#9733;</span>
            <span className="product-rating">&#9733;</span>
            <span className="product-rating">&#9733;</span>
            <span className="product-rating-font">5 Reviews</span>
          </div>
          <div className="price-product">&#8377; 449.43</div>

          <div className="quantity-text">Quantity</div>
          <div className="row add-product">
            <div className="col">+</div>
            <div className="col">1</div>
            <div className="col">-</div>
          </div>
          <div className="add-cart-button">Add to cart</div>
          <div className="buy-now-button">Buy now</div>
          <div className="description-box">
            <div className="description-header">Description</div>
            <p>
              Our iconic Cocoa+Clementine Lip Balm is now available in eco tube
              form! Made from recycled materials and fully recyclable, these{' '}
            </p>
            <p>
              One swipe of this soft, buttery balm and your lips will stay
              moisturised all day long. Cocoa Butter is of course the star of
              the show, which is well known for its nourishing properties, as
              well as Shea Butter and Coconut Oil which makes this dreamy
              formula your new favourite. We've switched out beeswax for a vegan
              alternative (Candelilla Wax) keeping it a highly protective balm.
            </p>
            <ul>
              <li>Never tested on animals</li>
              <li>Vegan</li>
              <li>Plastic free packaging</li>
            </ul>
            <p>
              This mighty tube comes in at a huge 25g making it nearly twice the
              size of our tins!
            </p>
            <p>
              Recyclable and biodegradable packaging. Keep in a cool dry place
              as the cardboard packaging can be easily damaged if not looked
              after.
            </p>
          </div>
          <div className="how-to-use-container">
            <div className="header-how-to-use">How to use</div>
            <p>
              Gently push the base of the tube up to reveal the top layer of
              balm. Swipe over the lips and enjoy the tasty scent of chocolate
              orange for hours! To close, use your lips to gently push the lip
              balm back down and place the lid on top.{' '}
            </p>
            <p>
              Please be careful not to push the tube up too high to avoid
              breakage and keep in a cool dry place so it stays protected!
            </p>
          </div>
          <div className="ingredients-container">
            <div className="ingredients-header">Ingredients</div>
            <p>
              Theobroma cacao (Cocoa) seed butter , Butyrospermum parkii (Shea)
              Butter , Caprylic /capric triglyceride (Coconut Oil) , Candelilla
              cera , Tocopherol (Vitamin E) , Helianthus Annus Seed Oil, Citrus
              aurantium dulcis (Orange) Peel Oil.{' '}
            </p>
            <p>ALLERGENS: CITRAL, LINALOOL, CITRONELLOL, LIMONENE.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductContainer;
