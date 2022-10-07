import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import $ from "jquery";
import { Logo,Img_04,Flags_us,Flags_fr,Flags_es,Flags_de } from '../imagepath';

const Header = (props) => {
  const [isOpen,setisopen] = useState(false)
  useEffect(() => {
    $('.main-nav a').on('click', function(e) {
			if($(this).parent().hasClass('has-submenu')) {
				e.preventDefault();
			}
			if(!$(this).hasClass('submenu')) {
				$('ul', $(this).parents('ul:first')).slideUp(350);
				$('a', $(this).parents('ul:first')).removeClass('submenu');
				$(this).next('ul').slideDown(350);
				$(this).addClass('submenu');
			} else if($(this).hasClass('submenu')) {
				$(this).removeClass('submenu');
				$(this).next('ul').slideUp(350);
			}
		});
}, [isOpen]);

    const pathname = props.location.pathname.split("/")[1];

    return (
      <>
      {/* Header */}
      <header className="header">
        <nav className="navbar navbar-expand-lg header-nav">
          <div className="navbar-header">
            <a id="mobile_btn" href="">
              <span className="bar-icon">
                <span />
                <span />
                <span />
              </span>
            </a>
            <Link to="/index" className="navbar-brand logo">
              <img src={Logo} className="img-fluid" alt="Logo" />
            </Link>
          </div>
          <div className="main-menu-wrapper">
            <div className="menu-header">
              <Link to="/index" className="menu-logo">
                <img src={Logo} className="img-fluid" alt="Logo" />
              </Link>
              <a id="menu_close" className="menu-close" href="">
                <i className="fas fa-times" />
              </a>
            </div>
            <ul className="main-nav">
              <li className={pathname === "index" ? "active" : ""}>
                <Link to="/index">Home</Link>
              </li>
              <li  className={`has-submenu ${pathname === "developer" || pathname === "developer-details" || pathname === "dashboard" ||
                          pathname === "manage-projects" || pathname === "favourites" || pathname === "invited-freelancer" || pathname === "membership-plans" || 
                          pathname === "milestones" || pathname === "chats" || pathname === "review" || pathname === "deposit-funds" ||
                          pathname === "withdraw-money"||pathname === "transaction-history" || pathname === "verify-identity" || 
                          pathname === "profile-settings"|| pathname === "tasks" || pathname === "files"||
                          pathname==="view-project-detail" ||pathname === "project-payment" ? "active" : ""}`}>
                <a href="">
                  For Employers
                  <i className="fas fa-chevron-down" />
                </a>
                <ul className="submenu">
                  <li className={`has-submenu ${pathname === "developer" || pathname === "developer-details" ? "active" : ""}`}>
                    <a href="#">Freelancer</a>
                    <ul className="submenu">
                      <li className={pathname === "developer" ? "active" : ""}>
                        <Link to="/developer">Freelancer</Link>
                      </li>
                      <li className={pathname === "developer-details" ? "active" : ""}>
                        <Link to="/developer-details">Freelancer Details</Link>
                      </li>
                    </ul>
                  </li>
                  <li className={pathname === "dashboard" ? "active" : ""}>
                    <Link to="/dashboard">Dashboard</Link>
                  </li>
                  <li className={pathname === "manage-projects" ? "active" : ""}>
                    <Link to="/manage-projects">Projects</Link>
                  </li>
                  <li className={pathname === "favourites" || pathname === "invited-freelancer" ? "active" : ""}>
                    <Link to="/favourites">Favourites</Link>
                  </li>
                  <li className={pathname === "membership-plans" ? "active" : ""}>
                    <Link to="/membership-plans">Membership</Link>
                  </li>
                  <li className={pathname==="view-project-detail" || pathname === "milestones" || pathname === "tasks" || pathname === "files"||
                  pathname === "project-payment" ? "active" : ""}>
                    <Link to="/milestones">Milestones</Link>
                  </li>
                  <li className={pathname === "chats" ? "active" : ""}>
                    <Link to="/chats">Chats</Link>
                  </li>
                  <li className={pathname === "review" ? "active" : ""}>
                    <Link to="/review">Review</Link>
                  </li>
                  <li className={pathname === "deposit-funds" ||pathname === "withdraw-money"||pathname === "transaction-history" ? "active" : ""}>
                    <Link to="/deposit-funds">Payments</Link>
                  </li>
                  <li className={pathname === "verify-identity" ? "active" : ""}>
                    <Link to="/verify-identity">Verify Identity</Link>
                  </li>
                  <li className={pathname === "profile-settings" ? "active" : ""}>
                    <Link to="/profile-settings">Settings</Link>
                  </li>
                </ul>
              </li>
              <li className={`has-submenu ${pathname === "project" || pathname === "project-details" || pathname === "freelancer-dashboard" ||
              pathname === "freelancer-project-proposals" || pathname === "freelancer-favourites"|| pathname === "freelancer-invitations" || pathname === "freelancer-membership" || 
              pathname === "freelancer-change-password" || pathname === "freelancer-chats" || pathname === "freelancer-review" || 
              pathname === "freelancer-completed-projects" || pathname === "freelancer-cancelled-projects" ||
              pathname === "freelancer-withdraw-money" || pathname === "freelancer-verify-identity" || pathname === "freelancer-ongoing-projects" ||
              pathname === "freelancer-profile-settings"|| pathname === "freelancer-transaction-history" || 
              pathname === "freelancer-project-proposals" || pathname === "freelancer-view-project-detail" || pathname === "freelancer-milestones"
                   || pathname === "freelancer-task" || pathname === "freelancer-files" || pathname === "freelancer-payment" ? "active" : ""}`}>
                <a href="">
                  For Freelancer
                  <i className="fas fa-chevron-down" />
                </a>
                <ul className="submenu">
                  <li className={`has-submenu ${pathname === "project" || pathname === "project-details" ? "active" : ""}`}>
                    <a href="#">Projects</a>
                    <ul className="submenu">
                      <li className={pathname === "project" ? "active" : ""}>
                        <Link to="/project">Projects</Link>
                      </li>
                      <li className={pathname === "project-details" ? "active" : ""}>
                        <Link to="/project-details">Project Details</Link>
                      </li>
                    </ul>
                  </li>
                  <li className={pathname === "freelancer-dashboard" ? "active" : ""}>
                    <Link to="/freelancer-dashboard">Dashboard</Link>
                  </li>
                  <li className={pathname === "freelancer-project-proposals" || pathname === "freelancer-ongoing-projects" ||
                  pathname === "freelancer-completed-projects" || pathname === "freelancer-cancelled-projects" ||
                  pathname === "freelancer-project-proposals" || pathname === "freelancer-view-project-detail" || pathname === "freelancer-milestones"
                  || pathname === "freelancer-task" || pathname === "freelancer-files" || pathname === "freelancer-payment" ? "active" : ""}>
                    <Link to="/freelancer-project-proposals">Projects</Link>
                  </li>
                  <li className={pathname === "freelancer-favourites" || pathname === "freelancer-invitations" ? "active" : ""}>
                    <Link to="/freelancer-favourites">Favourites</Link>
                  </li>
                  <li className={pathname === "freelancer-membership" ? "active" : ""}>
                    <Link to="/freelancer-membership">Membership</Link>
                  </li>
                  <li className={pathname === "freelancer-change-password" ? "active" : ""}>
                    <Link to="/freelancer-change-password">Change Password</Link>
                  </li>
                  <li className={pathname === "freelancer-chats" ? "active" : ""}>
                    <Link to="/freelancer-chats">Chats</Link>
                  </li>
                  <li className={pathname === "freelancer-review" ? "active" : ""}>
                    <Link to="/freelancer-review">Review</Link>
                  </li>
                  <li className={pathname === "freelancer-withdraw-money"|| pathname === "freelancer-transaction-history" ? "active" : ""}>
                    <Link to="/freelancer-withdraw-money">Payments</Link>
                  </li>
                  <li className={pathname === "freelancer-verify-identity" ? "active" : ""}>
                    <Link to="/freelancer-verify-identity">Verify Identity</Link>
                  </li>
                  <li className={pathname === "freelancer-profile-settings" ? "active" : ""}>
                    <Link to="/freelancer-profile-settings">Settings</Link>
                  </li>
                </ul>
              </li>
              <li className={`has-submenu ${pathname === "about" || pathname === "blank-page" || pathname === "404-page" ||
              pathname === "user-account-details" || pathname === "login" || pathname === "register" || 
              pathname === "forgot-password" || pathname === "change-password" || pathname === "freelancer-invoices" || 
              pathname === "view-invoice"  ? "active" : ""}`}>
                <a href="">
                  Pages <i className="fas fa-chevron-down" />
                </a>
                <ul className="submenu">
                  <li className={pathname === "about" ? "active" : ""}>
                    <Link to="/about">About us</Link>
                  </li>
                  <li className={pathname === "blank-page" ? "active" : ""}>
                    <Link to="/blank-page">Starter Page</Link>
                  </li>
                  <li className={pathname === "404-page" ? "active" : ""}>
                    <Link to="/404-page">404 Page</Link>
                  </li>
                  <li className={pathname === "user-account-details" ? "active" : ""}>
                    <Link to="/user-account-details">User Details</Link>
                  </li>
                  <li className={`has-submenu ${pathname === "freelancer-invoices" || pathname === "view-invoice"  ? "active" : ""}`}>
                    <Link to="/invoices">Invoices</Link>
                    <ul className="submenu">
                      <li className={pathname === "freelancer-invoices" ? "active" : ""}>
                        <Link to="/freelancer-invoices">Invoices</Link>
                      </li>
                      <li className={pathname === "view-invoice" ? "active" : ""}>
                        <Link to="/view-invoice">Invoice View</Link>
                      </li>
                    </ul>
                  </li>
                  <li className={pathname === "login" ? "active" : ""}>
                    <Link to="/login">Login</Link>
                  </li>
                  <li className={pathname === "register" ? "active" : ""}>
                    <Link to="/register">Register</Link>
                  </li>
                  <li className={pathname === "forgot-password" ? "active" : ""}>
                    <Link to="/forgot-password">Forgot Password</Link>
                  </li>
                  <li className={pathname === "change-password" ? "active" : ""}>
                    <Link to="/change-password">Change Password</Link>
                  </li>
                </ul>
              </li>
              
              <li className={`has-submenu ${pathname === "blog-list" || pathname === "blog-grid" || 
              pathname === "blog-details" ? "active" : ""}`}>
                <a href="">
                  Blog <i className="fas fa-chevron-down" />
                </a>
                <ul className="submenu">
                  <li className={pathname === "blog-list" ? "active" : ""}>
                    <Link to="/blog-list">Blog List</Link>
                  </li>
                  <li className={pathname === "blog-grid" ? "active" : ""}>
                    <Link to="/blog-grid">Blog Grid</Link>
                  </li>
                  <li className={pathname === "blog-details" ? "active" : ""}>
                    <Link to="/blog-details">Blog Details</Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          {pathname === "user-account-details" ? 
            <ul className="nav header-navbar-rht" >
              {/* User Menu */}
              <li className="nav-item dropdown has-arrow main-drop account-item" >
                <a href="#" id="dropdownmenu" className={`dropdown-toggle nav-link `} data-toggle="dropdown">
                  <span className="user-img">
                    <img src={Img_04} alt="" />
                  </span>
                  <span>John</span>
                </a>
                <div id="checkshow" className="dropdown-menu emp">
                  <div className="drop-head">Account Details</div>
                  <Link className="dropdown-item" to="/user-account-details">
                    <i className="material-icons">verified_user</i> View profile
                  </Link>
                  <div className="drop-head">Projects Settings</div>
                  <Link className="dropdown-item" to="/manage-projects">
                    <i className="material-icons">business_center</i> Projects
                  </Link>
                  <Link className="dropdown-item" to="/favourites">
                    <i className="material-icons">local_play</i> Favourites
                  </Link>
                  <Link className="dropdown-item" to="/review">
                    <i className="material-icons">pie_chart</i> Reviews
                  </Link>
                  <div className="drop-head">Account Details</div>
                  <Link className="dropdown-item" to="/profile-settings">
                    {" "}
                    <i className="material-icons">settings</i> Profile Settings
                  </Link>
                  <Link className="dropdown-item" to="/index">
                    <i className="material-icons">power_settings_new</i> Logout
                  </Link>
                </div>
              </li>
              {/* /User Menu */}
              <li>
                <Link to="/post-project" className="login-btn">
                  Post a Project{" "}
                </Link>
              </li>
            </ul> : pathname === "freelancer-invoices" || pathname === "view-invoice"|| pathname.includes("freelancer-") ?
            <ul className="nav header-navbar-rht">
              <li className="nav-item dropdown account-item">
                <a href="#" className="dropdown-toggle nav-link" data-toggle="dropdown">
                  MY ACCOUNT
                </a>
                <div className="dropdown-menu emp">
                    <div className="drop-head">Account Details</div>
                      <Link className="dropdown-item" to="/user-account-details">
                        <i className="material-icons">verified_user</i> View profile
                      </Link>
                    <div className="drop-head">Projects Settings</div>
                      <Link className="dropdown-item" to="/manage-projects">
                        <i className="material-icons">business_center</i> Projects
                      </Link>
                      <Link className="dropdown-item" to="/favourites">
                        <i className="material-icons">local_play</i> Favourites
                      </Link>
                      <Link className="dropdown-item" to="/review">
                        <i className="material-icons">pie_chart</i> Reviews
                      </Link>
                    <div className="drop-head">Account Details</div>
                      <Link className="dropdown-item" to="/profile-settings">
                        {" "}
                        <i className="material-icons">settings</i> Profile Settings
                      </Link>
                      <Link className="dropdown-item" to="/index">
                        <i className="material-icons">power_settings_new</i> Logout
                      </Link>
                  </div>
              </li>
              <li className={pathname === "post-project" ? "active" : ""}>
                <Link to="/post-project" className="login-btn">
                  Post a Project{" "}
                </Link>
              </li>
            </ul> :
            <ul className="nav header-navbar-rht">
              <li className={pathname === "register" ? "active" : ""}>
                <Link to="/register" className="reg-btn">
                  <i className="fas fa-user" /> Register
                </Link>
              </li>
              <li className={pathname === "login" ? "active" : ""}>
                <Link to="/login" className="log-btn">
                  <i className="fas fa-lock" /> Login
                </Link>
              </li>
              <li className={pathname === "post-project" ? "active" : ""}>
                <Link to="/post-project" className="login-btn">
                  Post a Project{" "}
                </Link>
              </li>
            </ul> }
        </nav>
      </header>
      {/* /Header */}
    </>
     );
  
}

export default Header;
