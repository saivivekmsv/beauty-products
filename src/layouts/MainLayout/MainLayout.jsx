import { Link } from 'react-router-dom';
const links = [
  {
    name: 'Home',
    link: '/',
  },
  {
    name: 'Shop Now',
    link: '/shop-page',
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
        <div className="menu-bar-heading">Beauty Balm</div>
        <div className="menu-bar-links">
          <ul className="link-buttons">
            {links.map((e, i) => (
              <li key={i} className="link-text">
                <Link className="link-tag" to={e.link}>
                  {e.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default MainLayout;
