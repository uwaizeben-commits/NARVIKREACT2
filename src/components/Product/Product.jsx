import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../../cart.actions';
import { NavLink } from 'react-router-dom';
import Data from '../../Data';

const Product = () => {
    const [filter, setFilter] = useState(Data);

    const dispatch = useDispatch();

    const addProduct = (product) => {
        dispatch(addItem(product));
    }
    const ShowProducts = () => {
        return (
            <>
                {filter.map((product) => {
                    return (
                        <div id={product.id} key={product.id} className="col-lg-3 col-md-4 col-sm-6 col-12 mb-4">
                            <div className="card text-center h-100" key={product.id}>
                                <img className="card-img-top p-3" src={product.image} alt={product.title} height={300} />
                                <div className="card-body">
                                    <h5 className="card-title">{product.title.substring(0, 12)}...</h5>
                                </div>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item lead">$ {product.price}</li>
                                </ul>
                                <div className="card-body">
                                    <NavLink to={"/product/" + product.id} className="btn btn-primary m-1">View Details</NavLink>
                                    <button className="btn btn-primary m-1" onClick={() => addProduct(product)}>Add to Cart</button>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </>
        );
    }

    return (
        <div className="container my-5 py-5">
            <div className="row justify-content-center"><ShowProducts /></div>
        </div>
    );
}

export default Product;