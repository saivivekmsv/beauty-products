import { PromiseContainer } from './promiseConatiner';
const productPromises = [
  {
    name: 'eco conscious practices',
  },
  {
    name: 'plant powered formulas',
  },
  {
    name: 'cruelty free, always',
  },
  {
    name: 'competitive pricing',
  },
];
const HomeConatiner = (props) => {
  return (
    <div className="container-fluid home fluid-container-padding">
      <div className="home-page-banner">
        <div className="home-page-image-container">
          <img
            alt="banner"
            className="image-banner"
            src="https://cdn.shopify.com/s/files/1/0451/7468/5852/files/D5C421C4-C758-4255-BEFC-9DD763C9EF07.jpg?v=1665923974&width=1500"
          />
        </div>
        <div className="banner-text-container">
          <div className="banner-main-text">
            Have some good products for your beauty
          </div>
          <div className="banner-buttons-container">
            <div className="banner-buttons">Shop Now</div>
            <div className="banner-buttons">Try the Product</div>
          </div>
        </div>
      </div>
      {/* start */}
      <div className="grid image-grid-home">
        <div className="inner-image-grid-home">
          <div className="main-grid-image g-col-6">
            <img
              alt="gridimage"
              className="main-grid-image-1"
              src="https://cdn.shopify.com/s/files/1/0451/7468/5852/files/lip_balm_tube_4c2e9739-2b14-49e3-b3ef-aabcb3af70cc.jpg?v=1665924476&width=1500"
            />
          </div>

          <div className="main-grid-side-container g-col-6">
            <div className="main-grid-text-heading">
              Give the gift of glow✨
            </div>
            <div className="main-grid-text">
              <p>
                Treat yourself or a loved one to our natural skincare range.
                From pick me up minis to hand wrapped bundles of glow.{' '}
              </p>
            </div>
            <div className="main-grid-button">
              I know someone would love this
            </div>
          </div>
        </div>
      </div>
      <div className="product-nature-container">
        <div className="product-nature-container-heading">
          the product we promise
        </div>
        <div className="product-nature-inner-container">
          <div className="accordion accordion-flush " id="accordionExample">
            {productPromises.map((e, i) => (
              <PromiseContainer key={i} product={e} index={i} />
            ))}
          </div>
        </div>
      </div>
      {/* start */}
      <div className="review-products">
        <div className="review-card">
          <div className="review-image">
            <img
              alt="reviewImage"
              className="review-image-container"
              src="https://cdn.shopify.com/s/files/1/0451/7468/5852/files/Untitled_design_90.png?v=1656447712"
            />
          </div>
          <div className="review-stars">
            <h3>⭐⭐⭐⭐⭐</h3>
          </div>
          <div className="review-text">
            <p>
              "This face cream does not disappoint. It is light, non greasy,
              absorbs quickly and is such a nice but not over powering scent! I
              can tell it will last ages as a small amount goes a long way.
              Another product that I will be sure to purchase again!!"
            </p>
          </div>
          <div className="review-tag-link">Orange Blossom Face Cream</div>
        </div>
        <div className="review-card">
          <div className="review-image">
            <img
              alt="reviewImage"
              className="review-image-container"
              src="https://cdn.shopify.com/s/files/1/0451/7468/5852/files/Untitled_design_90.png?v=1656447712"
            />
          </div>
          <div className="review-stars">
            <h3>⭐⭐⭐⭐⭐</h3>
          </div>
          <div className="review-text">
            <p>
              "This face cream does not disappoint. It is light, non greasy,
              absorbs quickly and is such a nice but not over powering scent! I
              can tell it will last ages as a small amount goes a long way.
              Another product that I will be sure to purchase again!!"
            </p>
          </div>
          <div className="review-tag-link">Orange Blossom Face Cream</div>
        </div>
        <div className="review-card">
          <div className="review-image">
            <img
              alt="reviewImage"
              className="review-image-container"
              src="https://cdn.shopify.com/s/files/1/0451/7468/5852/files/Untitled_design_90.png?v=1656447712"
            />
          </div>
          <div className="review-stars">
            <h3>⭐⭐⭐⭐⭐</h3>
          </div>
          <div className="review-text">
            <p>
              "This face cream does not disappoint. It is light, non greasy,
              absorbs quickly and is such a nice but not over powering scent! I
              can tell it will last ages as a small amount goes a long way.
              Another product that I will be sure to purchase again!!"
            </p>
          </div>
          <div className="review-tag-link">Orange Blossom Face Cream</div>
        </div>
      </div>
      {/* end */}
      <div className="join-form">
        <div className="join-heading">Join the Beauty Club</div>
        <div className="join-sub-heading">
          The place to be for exlusive offers, skincare tips + tricks and the
          latest launches.
        </div>
        <div className="join-email">
          <form>
            <input
              type="email"
              className="form-control join-input"
              id="inputEmail"
              placeholder="Email"
            />
          </form>
        </div>
      </div>
      {/* end */}
      <div className="blog-main-container">
        <div className="blog-heading">Blog Posts</div>
        <div className="blog-post-cards">
          <div className="card blog-card">
            <img
              src="https://cdn.shopify.com/s/files/1/0451/7468/5852/articles/Autumn_Skincare_Checklist.png?v=1664664536"
              className="card-img-top"
              alt="cardblog"
            />
            <div className="card-body">
              <h4 className="card-title">Autumn Skin Care Checklist</h4>
              <div className="date-text">october 24th, 2022</div>
              <p className="card-text">
                As we transition from a pretty extreme summer to autumn, your
                skin might be in need of a little extra TLC. Month long droughts
                and highs of 40 would have...
              </p>
            </div>
          </div>
          <div className="card blog-card">
            <img
              src="https://cdn.shopify.com/s/files/1/0451/7468/5852/articles/Autumn_Skincare_Checklist.png?v=1664664536"
              className="card-img-top"
              alt="cardblog"
            />
            <div className="card-body">
              <h4 className="card-title">Autumn Skin Care Checklist</h4>
              <div className="date-text">october 24th, 2022</div>
              <p className="card-text">
                As we transition from a pretty extreme summer to autumn, your
                skin might be in need of a little extra TLC. Month long droughts
                and highs of 40 would have...
              </p>
            </div>
          </div>
          <div className="card blog-card">
            <img
              src="https://cdn.shopify.com/s/files/1/0451/7468/5852/articles/Autumn_Skincare_Checklist.png?v=1664664536"
              className="card-img-top"
              alt="cardblog"
            />
            <div className="card-body">
              <h4 className="card-title">Autumn Skin Care Checklist</h4>
              <div className="date-text">october 24th, 2022</div>
              <p className="card-text">
                As we transition from a pretty extreme summer to autumn, your
                skin might be in need of a little extra TLC. Month long droughts
                and highs of 40 would have...
              </p>
            </div>
          </div>
        </div>
        <div className="blog-view-button">View All</div>
      </div>
      <div className="footer-content">
        <div className="footer-content-left"></div>
        <div className="footer-content-right"></div>
      </div>
    </div>
  );
};
export default HomeConatiner;
