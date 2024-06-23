import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function AddProduct() {
  // Using the useNavigate hook from React Router
  let navigate = useNavigate();
  // State initialization using the useState hook

  const [arr, setarr] = useState(
    // Initializing 'arr' state with data from localStorage or an empty
    () => {
      let getlocaldata = localStorage.getItem("products");
      if (getlocaldata != null) {
        return JSON.parse(getlocaldata);
      } else {
        return [];
      }
    }
  );
  // Initializing state variables for product details
  const [pname, setpname] = useState("");
  const [category, setcategory] = useState("");
  const [Description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [Mrp, setMrp] = useState("");
  const [Discount, setDiscount] = useState("");
  const [img,setimg]=useState("")


// Function to add products
  const addproducts = (event) => {
    event.preventDefault();
    const dataobj = {
      productId: Date.now(),
      pname: pname,
      category: category,
      Description: Description,
      price: price,
      MRP: Mrp,
      Discount: Discount,     
      img:img
    };
    setarr([...arr, dataobj]);
    // console.log(arr);
    let mydata = [...arr, dataobj];
    // console.log(mydata)
     localStorage.setItem('products', JSON.stringify(mydata));

    // console.log(dataobj);
    // console.log(arr)

    navigate("/shop");
  };
  useEffect(() => {
    // localStorage.setItem("products", JSON.stringify(arr));
  }, [arr]);

  return (
    <div>
      <form
        style={{
          width: "50%",
          margin: "auto",
          paddingLeft: "20px",
          padding: "50px",
          borderRadius: "12px",
          paddingBottom: "10px",
          marginTop: "5px",
          backgroundColor: "#D19C97",
          boxShadow: "10px 5px 10px gray",
        }}>
        <div className="form-group">
          <br />
          <h3> Add Product Form</h3> <br />
          <br />
          <img src alt />
          <div className="form-group">
            <label htmlFor="img"> Product image</label>
            <span>
              {" "}
              <input
              value={img}
                type="text"
                className="form-control"
                onChange={(event) => setimg(event.target.value)}
                id="img"
                placeholder="image"
              />
            </span>
            <br />
          </div>
          <label htmlFor="name"> Product Name</label>
          <input
            type="text"
            className="form-control"
            onChange={(event) => setpname(event.target.value)}
            aria-describedby="name"
            placeholder="Enter Product Name"
          />
          <br />
          <div className="form-group">
            <label htmlFor="Description">Description</label>
            <input
              type="text"
              className="form-control"
              onChange={(event) => setDescription(event.target.value)}
              placeholder="Description"
            />
            <br />
          </div>
          <div className="form-group">
            <label htmlFor="price">Price</label>
            <input
              type="number"
              className="form-control"
              id="price"
              onChange={(event) => setPrice(event.target.value)}
              placeholder="price"
            />
            <br />
          </div>
          <div className="form-group">
            <label htmlFor="MRP">MRP</label>
            <input
              type="number"
              className="form-control"
              id="mrp"
              onChange={(event) => setMrp(event.target.value)}
              placeholder="MRP"
            />
            <br />
          </div>
          <div className="form-group">
            <label htmlFor="discount">Discount</label>
            <input
              type="number"
              className="form-control"
              id="discount"
              onChange={(event) => setDiscount(event.target.value)}
              placeholder="Discount"
            />
            <br />
          </div>
          <div className="form-group">
            <label htmlFor="Categories">Categories </label>
            {/* <input type="text" className="form-control" id="pro" placeholder=" Product Categories" /><br /> */}
            <select
              class="form-select input-group mp-3"
              aria-label="Default select example"
              onChange={(event) => setcategory(event.target.value)}>
              <option hidden> Select </option>
              <option value="Jeans">Jeans</option>
              <option value="Shirt">Shirt</option>
              <option value="Women">Women Athnic Wear</option>
              <option value="Sports">Sports Wear</option>
              <option value="Athnic">Electronic Item</option>
              <option value="Cosmetic">Cosmetic Item</option>
              <option value="Shoes">Shoes</option>
            </select>
            <br />

            {/* <a href="property-list.html"><button  class="btn btn-danger" onclick="formsubmit(event)" id="demo">Submit  </a></button> */}
          </div>
          {/* <a href="property-list.html" className="btn btn-dark ms-2  bg-danger" onclick="formsubmit(event)" id="demo">Submit</a> */}
          <button
            class="btn btn-primary btn-block border-0 py-3"
            onClick={addproducts}>
            {/* {" "} */}
            Add Product
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddProduct;

// Routing
