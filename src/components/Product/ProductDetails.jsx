import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { addItem } from '../../cart.actions';
import Data from '../../Data';

const ProductDetails = () => {
    const [product, setProduct] = useState({});
    const { id } = useParams();

    const dispatch = useDispatch();

    const addProduct = (product) => {
        dispatch(addItem(product));
    }

    useEffect(() => {
        // Find the product from the Data array. The ID from params is a string.
        const productData = Data.find(p => p.id === parseInt(id));
        if (productData) {
            setProduct(productData);
        }
    }, [id]);

    const ShowProduct = () => {
        return (
            <>
                <div className="col-md-6 col-sm-12">
                    <img src={product.image} alt={product.title} className="img-fluid" />
                </div>
                <div className="col-md-6 col-sm-12">
                    <h4 className="text-uppercase text-black-50">{product.category}</h4>
                    <h1 className="display-5">{product.title}</h1>
                    <p className="lead">
                        {/* The local data does not have rating, so we can comment this out or add it to Data.js */}
                        {/* Rating {product.rating && product.rating.rate} <i className="fa fa-star"></i> */}
                    </p>
                    <h3 className="display-6 fw-bold my-4">$ {product.price}</h3>
                    <p className="lead">{product.description}</p>
                    <button className="btn btn-primary px-4 py-2" onClick={() => addProduct(product)}>Add to Cart</button>
                </div>
            </>
        )
    }

    return (
        <div>
            <div className="container my-5 py-5">
                <div className="row">
                    {product.id ? <ShowProduct /> : <div>Product not found</div>}
                </div>
            </div>
        </div>
    )
}

export default ProductDetails;