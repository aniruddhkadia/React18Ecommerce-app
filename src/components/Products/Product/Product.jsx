import React from "react";
// import { useNavigate } from "react-router-dom";
import "./Product.scss";
import prod1 from "../../../assets/products/earbuds-prod-2.webp"

const Product = ({ data, id }) => {
    // const navigate = useNavigate();
    return (
        <div className="product-card">
            <div className="thumbnail">
                <img src={prod1} alt=""/>
            </div>
            <div className="prod-details">
                <span className="name">Product Name</span>
                <span className="price">&#8377; 2250</span>
            </div>
        </div>
    );
};

export default Product;
