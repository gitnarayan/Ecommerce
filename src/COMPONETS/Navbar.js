import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
     <div className="container-fluid mb-5">
  <div className="row border-top px-xl-5">
    <div className="col-lg-3 d-none d-lg-block">
      <a className="btn shadow-none d-flex align-items-center justify-content-between bg-primary text-white w-100" data-toggle="collapse" href="#navbar-vertical" style={{height: 65, marginTop: '-1px', padding: '0 30px'}}>
        <h6 className="m-0">Categories</h6>
        <i className="fa fa-angle-down text-dark" />
      </a>
      <nav className="collapse show navbar navbar-vertical navbar-light align-items-start p-0 border border-top-0 border-bottom-0" id="navbar-vertical">
        <div className="navbar-nav w-100 overflow-hidden" style={{height: 410}}>
          <div className="nav-item dropdown">
            <a href="#" className="nav-link" data-toggle="dropdown">Dresses <i className="fa fa-angle-down float-right mt-1" /></a>
            <div className="dropdown-menu position-absolute bg-secondary border-0 rounded-0 w-100 m-0">
              <a href className="dropdown-item">Men's Dresses</a>
              <a href className="dropdown-item">Women's Dresses</a>
              <a href className="dropdown-item">Baby's Dresses</a>
            </div>
          </div>
          <NavLink to='/FilterProduct/Shirt' className="nav-item nav-link">Shirts</NavLink>
          <NavLink to='/FilterProduct/Jeans' className="nav-item nav-link">Jeans</NavLink>
          <NavLink to='/FilterProduct/Swimwear' className="nav-item nav-link">Swimwear</NavLink>
          <NavLink to='/FilterProduct/Sleepwear' className="nav-item nav-link">Sleepwear</NavLink>
          <NavLink to='/FilterProduct/Sportswear' className="nav-item nav-link">Sportswear</NavLink>
          <NavLink to='/FilterProduct/Jumpsuits' className="nav-item nav-link">Jumpsuits</NavLink>
          <NavLink to='/FilterProduct/Blazers' className="nav-item nav-link">Blazers</NavLink>
          <NavLink to='/FilterProduct/Jackets' className="nav-item nav-link">Jackets</NavLink>
          <NavLink to='/FilterProduct/Shoes' className="nav-item nav-link">Shoes</NavLink>
        </div>
      </nav>
    </div>
  
    <div className="col-lg-9 col-md-12">
  <div className="row pb-3">
    <div className="col-12 pb-1">
   
    </div>
    <div className="col-lg-4 col-md-6 col-sm-12 pb-1">
      <div className="card product-item border-0 mb-4">
        <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
          <img className="img-fluid w-100" src="img/product-1.jpg" alt />
        </div>
        <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
          <h6 className="text-truncate mb-3">Colorful Stylish Shirt</h6>
          <div className="d-flex justify-content-center">
            <h6>$123.00</h6><h6 className="text-muted ml-2"><del>$123.00</del></h6>
          </div>
        </div>
        <div className="card-footer d-flex justify-content-between bg-light border">
          <a href className="btn btn-sm text-dark p-0"><i className="fas fa-eye text-primary mr-1" />View Detail</a>
          <a href className="btn btn-sm text-dark p-0"><i className="fas fa-shopping-cart text-primary mr-1" />Add To Cart</a>
        </div>
      </div>
    </div>
    <div className="col-lg-4 col-md-6 col-sm-12 pb-1">
      <div className="card product-item border-0 mb-4">
        <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
          <img className="img-fluid w-100" src="img/product-2.jpg" alt />
        </div>
        <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
          <h6 className="text-truncate mb-3">Colorful Stylish Shirt</h6>
          <div className="d-flex justify-content-center">
            <h6>$123.00</h6><h6 className="text-muted ml-2"><del>$123.00</del></h6>
          </div>
        </div>
        <div className="card-footer d-flex justify-content-between bg-light border">
          <a href className="btn btn-sm text-dark p-0"><i className="fas fa-eye text-primary mr-1" />View Detail</a>
          <a href className="btn btn-sm text-dark p-0"><i className="fas fa-shopping-cart text-primary mr-1" />Add To Cart</a>
        </div>
      </div>
    </div>
    <div className="col-lg-4 col-md-6 col-sm-12 pb-1">
      <div className="card product-item border-0 mb-4">
        <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
          <img className="img-fluid w-100" src="img/product-3.jpg" alt />
        </div>
        <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
          <h6 className="text-truncate mb-3">Colorful Stylish Shirt</h6>
          <div className="d-flex justify-content-center">
            <h6>$123.00</h6><h6 className="text-muted ml-2"><del>$123.00</del></h6>
          </div>
        </div>
        <div className="card-footer d-flex justify-content-between bg-light border">
          <a href className="btn btn-sm text-dark p-0"><i className="fas fa-eye text-primary mr-1" />View Detail</a>
          <a href className="btn btn-sm text-dark p-0"><i className="fas fa-shopping-cart text-primary mr-1" />Add To Cart</a>
        </div>
      </div>
    </div>
   
   
    <div className="col-12 pb-1">
      <nav aria-label="Page navigation">
        <ul className="pagination justify-content-center mb-3">
          <li className="page-item disabled">
            <a className="page-link" href="#" aria-label="Previous">
              <span aria-hidden="true">«</span>
              <span className="sr-only">Previous</span>
            </a>
          </li>
          <li className="page-item active"><a className="page-link" href="#">1</a></li>
          <li className="page-item"><a className="page-link" href="#">2</a></li>
          <li className="page-item"><a className="page-link" href="#">3</a></li>
          <li className="page-item">
            <a className="page-link" href="#" aria-label="Next">
              <span aria-hidden="true">»</span>
              <span className="sr-only">Next</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</div>

     
    </div>
  </div>
</div>


  )
}

export default Navbar
