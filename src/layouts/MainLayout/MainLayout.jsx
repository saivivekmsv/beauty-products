import { Link } from 'react-router-dom';
const links = [
  {
    name: 'Skin Care',
    link: '/',
    innerLinks: [
      {
        name: 'Lip Care',
        link: '/shop-page/1',
      },
      {
        name: 'Cleansers',
        link: '/shop-page/2',
      },
      {
        name: 'Toners',
        link: '/shop-page/3',
      },
      {
        name: 'Serums',
        link: '/shop-page/4',
      },
      {
        name: 'Moisturisers',
        link: '/shop-page/4',
      },
      {
        name: 'Facial oils',
        link: '/shop-page/4',
      },
    ],
  },
  {
    name: 'Hair Care',
    link: '/shop-page',
  },
  {
    name: 'Body Care',
    link: '/shop-page/3',
  },
  {
    name: 'Shop Tools',
    link: '/shop-page/4',
  },
  {
    name: 'Blog',
    link: '/blog',
  },
  {
    name: 'Contact Us',
    link: '/contact-us',
  },
];
const MainLayout = (props) => {
  const { children } = props;
  return (
    <div className="container-fluid h-100 fluid-container-padding">
      <div className="menu-bar">
        <div className="menu-bar-heading">Wild Berry Botanicals</div>
        <div className="menu-bar-links">
          {links.map((e, i) => {
            if (e.name === 'Skin Care') {
              return (
                <div className="menu-bar-dropdown">
                  <div className="link-tag">
                    {e.name}
                    <div className="shop-now-dropdown">
                      <div className="shop-all-skin-care-text">
                        <Link className="link-tag-text" key={i}>
                          Shop All Skin Care
                        </Link>
                      </div>
                      <div className="sub-products-skin-care">
                        <div className="shop-by-category">Shop By Category</div>
                        {e.innerLinks.map((f, j) => (
                          <Link
                            className="link-tag-categories"
                            to={f.link}
                            key={j}
                          >
                            {f.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            }
            return (
              <div className="menu-bar-items">
                <Link className="link-tag" to={e.link} key={i}>
                  {e.name}
                </Link>
              </div>
            );
          })}
          {/* <ul className="link-buttons">
            {links.map((e, i) => (
              <li key={i} className="link-text">
                <Link className="link-tag" to={e.link}>
                  {e.name}
                </Link>
              </li>
            ))}
          </ul> */}
        </div>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default MainLayout;
