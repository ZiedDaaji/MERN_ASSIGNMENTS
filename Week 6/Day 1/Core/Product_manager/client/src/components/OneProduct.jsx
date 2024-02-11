import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';


const OneProduct = () => {
    const [product, setProduct] = useState([null]);
    const {id} = useParams();
    useEffect(() => {
        axios.get("http://localhost:8000/api/products/" + id)
        .then((res) => {
            console.log(res.data)
            setProduct(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
    },[id])

    return (
    <div>
        {
            product ? (
                <>
                    <p>Title : {product.title}</p>
                    <p>Price : {product.price}</p>
                    <p>Decription : {product.description}</p>
                </>
            ): <h3>Loading....</h3>
        }
            <Link to={"/products"}>
                <h3>See All Products</h3>
            </Link>
    </div>
    )
}

export default OneProduct