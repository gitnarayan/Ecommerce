import React from 'react'

function Vendor() {
    return (
        <div>
            <div className="container-fluid py-5">
                <div className="row px-xl-5">
                    <div className="col">
                        <div className="owl-carousel  vendor-carousel d-flex">
                            <div className="vendor-item border p-4">
                                <img src="img/vendor-1.jpg" alt />
                            </div>
                            <div className="vendor-item border p-4">
                                <img src="img/vendor-2.jpg" alt />
                            </div>
                            <div className="vendor-item border p-4">
                                <img src="img/vendor-3.jpg" alt />
                            </div>
                            <div className="vendor-item border p-4">
                                <img src="img/vendor-4.jpg" alt />
                            </div>
                            <div className="vendor-item border p-4">
                                <img src="img/vendor-5.jpg" alt />
                            </div>
                            <div className="vendor-item border p-4">
                                <img src="img/vendor-6.jpg" alt />
                            </div>
                             {/* <div className="vendor-item border p-4">
                                <img src="img/vendor-7.jpg" alt />
                            </div> */}
                            {/* <div className="vendor-item border p-4">
                                <img src="img/vendor-8.jpg" alt />
                            </div>  */}
                        </div>
                    </div>
                </div>
            </div>

        
        </div>
    )
}

export default Vendor;
