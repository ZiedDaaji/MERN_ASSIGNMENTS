import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';




const Main = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/api/products")
        .then((res) => {
            console.log(res.data)
            setProducts(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
    },[])




    return (
        <div>
            <h2>All Products</h2>
            {
                products.map((oneProduct) => {
                    return (
                        <div key={oneProduct._id}>
                            <Link to={"/products/" + oneProduct._id}>
                                <h4>{oneProduct.title}</h4>
                            </Link>
                            
                        </div>
                    )
                })
            }
            <Link to={"/products/"}>
                <h3>Go back to Create</h3>
            </Link>
        </div>
        
        
    )
}

export default Main