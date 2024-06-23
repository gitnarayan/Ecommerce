import React from 'react'
import { Link , NavLink} from 'react-router-dom'
import { useNavigate } from "react-router-dom";

const Topbar = () => {
  const navigate = useNavigate(null);

  const Cart = ()=>{
    // alert('Cart')
     navigate("/Cart");
   }
  return (
    <div>
      <div className="container-fluid">
        <div className="row bg-secondary py-2 px-xl-5">
          <div className="col-lg-6 d-none d-lg-block">
            <div className="d-inline-flex align-items-center">
              <a className="text-dark" href>FAQs</a>
              <span className="text-muted px-2">|</span>
              <a className="text-dark" href>Help</a>
              <span className="text-muted px-2">|</span>
              <a className="text-dark" href>Support</a>
            </div>
          </div>
          <div className="col-lg-6 text-center text-lg-right">
            <div className="d-inline-flex align-items-center">
              <a className="text-dark px-2" href>
                <i className="fab fa-facebook-f" />
              </a>
              <a className="text-dark px-2" href>
                <i className="fab fa-twitter" />
              </a>
              <a className="text-dark px-2" href>
                <i className="fab fa-linkedin-in" />
              </a>
              <a className="text-dark px-2" href>
                <i className="fab fa-instagram" />
              </a>
              <a className="text-dark pl-2" href>
                <i className="fab fa-youtube" />
              </a>
            </div>
          </div>
        </div>
        <div className="row align-items-center py-3 px-xl-5">
          <div className="col-lg-3 d-none d-lg-block">
            <a href className="text-decoration-none">
              <h1 className="m-0 display-5 font-weight-semi-bold"><span className="text-primary font-weight-bold border px-3 mr-1">E</span>Shopper</h1>
            </a>
          </div>
          <div className="col-lg-6 col-6 text-left">
            <form action>
              <div className="input-group">
                <input type="text" className="form-control" placeholder="Search for products" />
                <div className="input-group-append">
                  <span className="input-group-text bg-transparent text-primary">
                    <i className="fa fa-search" />
                  </span>
                </div>
              </div>
            </form>
          </div>
          <div className="col-lg-3 col-6 text-right">
            <a href className="btn border">
              <i className="fas fa-heart text-primary" />
              <span className="badge">0</span>
            </a>
            <a href className="btn border">
              <i className="fas fa-shopping-cart text-primary"  onClick={Cart} />
              <span className="badge">0</span>
            </a>
          </div>
        </div>
        <div>

          <div className="navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-0">
            <a href className="text-decoration-none d-block d-lg-none">
              <h1 className="m-0 display-5 font-weight-semi-bold"><span className="text-primary font-weight-bold border px-3 mr-1">E</span>Shopper</h1>
            </a>
            <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
              <div className="navbar-nav mr-auto py-0">
                <NavLink to="/" className="nav-item nav-link">Home</NavLink>
                <NavLink to="/shop" className="nav-item nav-link">Shop </NavLink>
                {/* <Link to="/Shopdetails" className="nav-item nav-link">Shop Detail</Link> */}
                <div className="nav-item dropdown">
                  <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">Pages</a>
                  <div className="dropdown-menu rounded-0 m-0">
                    <Link to="/Cart" className="dropdown-item">Shopping Cart</Link>
                    <Link to="Checkout" className="dropdown-item">Checkout</Link>
                  </div>
                </div>
              </div>
              
            </div>
            <div className="navbar-nav ml-auto py-0">
            <NavLink to="/seller" className="nav-item nav-link">Add product</NavLink>
              <NavLink to="Login" className="nav-item nav-link">Login</NavLink>
              <NavLink to="/Register" className="nav-item nav-link">Register</NavLink>
            </div>
          </div>
        </div>
      </div>
      <>



      </>
    </div>

  )
}

export default Topbar
