import React, { useState } from 'react'

function Cart() {
  const [total, settotal] = useState();
 const [myCart, setMyCart] =  useState(()=> {
  let localCart = localStorage.getItem("myCarts")
  if (localCart!= null) {
    return JSON.parse(localCart)
  } else {
    return []
  }
 })

 const addQuantity =(count, productId)=>{
  let newCart = myCart.map((item ) => {
    if(item.productId === productId){
      return {...item, count: count + 1};
    }
    else{
      return item
    }
    });

    setMyCart(newCart);
    localStorage.setItem("myCarts",JSON.stringify(newCart))
  }

  const removeQuantity =(count, productId)=>{
    let newCart = myCart.map((item ) => {
      if(item.productId === productId){
        return {...item, count: count - 1};
      }
      else{
        return item
      }
      });
  
      setMyCart(newCart);
      localStorage.setItem("myCarts",JSON.stringify(newCart))
    }

    const removeItem =(productId)=>{
      let newCart = myCart.filter((item ) => {
        if(item.productId === productId){
          return false;
        }
        else{
          return true;
        }
        });
        setMyCart(newCart);
        localStorage.setItem("myCarts",JSON.stringify(newCart))
      }

  return (

    <div>
      <div className="container-fluid pt-5">
  <div className="row px-xl-5">
    <div className="col-lg-8 table-responsive mb-5">
      <table className="table table-bordered text-center mb-0">
        <thead className="bg-secondary text-dark">
          <tr>
            <th>Products</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Remove</th>
          </tr>
        </thead>


        <tbody className="align-middle">
          {myCart.map((product) => {
            return(
              <tr>
              <td className="align-middle"><img src={product.img} alt style={{width: 50}} /> 
              
              {product.pname}</td>
              <td className="align-middle">{product.price}</td>
              <td className="align-middle">
                <div className="input-group quantity mx-auto" style={{width: 100}}>
                  <div className="input-group-btn">
                    <button className="btn btn-sm btn-primary btn-minus " onClick={()=>{removeQuantity(product.count,product.productId); }}>
                      <i className="fa fa-minus" />
                    </button>
                  </div>
                  <input type="text" className="form-control form-control-sm bg-secondary text-center" value={product.count} />
                  <div className="input-group-btn">
                    <button className="btn btn-sm btn-primary btn-plus " onClick={()=>{addQuantity(product.count,product.productId); }}>
                      <i className="fa fa-plus" />
                    </button>
                  </div>
                </div>
              </td>
              <td className="align-middle">${product.price * product.count}</td>
              <td className="align-middle"><button className="btn btn-sm btn-primary"><i className="fa fa-times"  onClick={()=>{removeItem(product.productId); }} /></button></td>
            </tr>

            )
          })}
         
         
        </tbody>
      </table>
    </div>
    <div className="col-lg-4">
      <form className="mb-5" action>
        <div className="input-group">
          <input type="text" className="form-control p-4" placeholder="Coupon Code" />
          <div className="input-group-append">
            <button className="btn btn-primary">Apply Coupon</button>
          </div>
        </div>
      </form>
      <div className="card border-secondary mb-5">
        <div className="card-header bg-secondary border-0">
          <h4 className="font-weight-semi-bold m-0">Cart Summary</h4>
        </div>
        <div className="card-body">
          <div className="d-flex justify-content-between mb-3 pt-1">
            <h6 className="font-weight-medium">Subtotal</h6>
            <h6 className="font-weight-medium">$150</h6>
          </div>
          <div className="d-flex justify-content-between">
            <h6 className="font-weight-medium">Shipping</h6>
            <h6 className="font-weight-medium">$10</h6>
          </div>
        </div>
        <div className="card-footer border-secondary bg-transparent">
          <div className="d-flex justify-content-between mt-2">
            <h5 className="font-weight-bold">Total</h5>
            <h5 className="font-weight-bold">$160</h5>
          </div>
          <button className="btn btn-block btn-primary my-3 py-3">Proceed To Checkout</button>
        </div>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default Cart
