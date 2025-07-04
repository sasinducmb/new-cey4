import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import clsx from "clsx";

const NavMenu = ({ menuWhiteClass, sidebarMenu }) => {
  const { t } = useTranslation();
  
  return (
    <div
      className={clsx(
        sidebarMenu
          ? 'sidebar-menu'
          : `main-menu ${menuWhiteClass ? menuWhiteClass : ''}`
      )}
    >
      <nav>
        <ul>
          <li>
            <Link to={process.env.PUBLIC_URL + '/'}>
              {t('home')}
              {sidebarMenu ? (
                <span>
                  <i className="fa fa-angle-right"></i>
                </span>
              ) : (
                <i className="" />
              )}
            </Link>
          </li>
          <li>
            <Link to={process.env.PUBLIC_URL + '/shop-grid-standard'}>
              {' '}
              {t('shop')}
              {sidebarMenu ? (
                <span>
                  <i className="fa fa-angle-right"></i>
                </span>
              ) : (
                <i className="" />
              )}
            </Link>
          </li>
          {/* <li>
            <Link to={process.env.PUBLIC_URL + '/'}>
              {t('pages')}
              {sidebarMenu ? (
                <span>
                  <i className="fa fa-angle-right"></i>
                </span>
              ) : (
                <i className="fa fa-angle-down" />
              )}
            </Link>
            <ul className="submenu">
              <li>
                <Link to={process.env.PUBLIC_URL + '/cart'}>{t('cart')}</Link>
              </li>
              <li>
                <Link to={process.env.PUBLIC_URL + '/checkout'}>
                  {t('checkout')}
                </Link>
              </li>
              <li>
                <Link to={process.env.PUBLIC_URL + '/wishlist'}>
                  {t('wishlist')}
                </Link>
              </li>
              <li>
                <Link to={process.env.PUBLIC_URL + '/my-account'}>
                  {t('my_account')}
                </Link>
              </li>
              <li>
                <Link to={process.env.PUBLIC_URL + '/login-register'}>
                  {t('login_register')}
                </Link>
              </li>
            </ul>
          </li> */}
          
          <li>
            <Link to={process.env.PUBLIC_URL + '/about'}>{t('about_us')}</Link>
          </li>
          <li>
            <Link to={process.env.PUBLIC_URL + '/contact'}>
              {t('contact_us')}
            </Link>
          </li>
          <li>
            <Link to={process.env.PUBLIC_URL + '/collabaration'}>
              {t('Collabaration')} 
              </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

NavMenu.propTypes = {
  menuWhiteClass: PropTypes.string,
  sidebarMenu: PropTypes.bool,
};

export default NavMenu;
