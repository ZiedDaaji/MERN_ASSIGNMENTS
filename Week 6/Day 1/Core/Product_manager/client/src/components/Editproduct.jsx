import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';


const Editproduct = () => {
    const [product, setProduct] = useState([null]);
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState("")
    const [description, setDescription] = useState("")
    const {id} = useParams();
    const nav = useNavigate()

    const updateHandler = (e) => {
        e.preventDefault();

        axios.patch("http://localhost:8000/api/products/" + id, {
            title,
            price,
            description
        })
        .then((res) => {
            console.log(res.data)
            setTitle("");
            setPrice("");
            setDescription("");
            nav("/products")
        })
        .catch((err) => {console.log(err)})
    }

    useEffect(() => {
        axios.get("http://localhost:8000/api/products/" + id)
        .then((res) => {
            console.log(res.data)
            setTitle(res.data.title);
            setPrice(res.data.price);
            setDescription(res.data.description);
        })
        .catch((err) => {
            console.log(err)
        })
    },[id])
        return (
    <div>Edit product
        {JSON.stringify(product)}
        <form id='creation' onSubmit={updateHandler}>
            <div id='title'>Title :  
                <input value={title} onChange={(e) => {setTitle(e.target.value)}} />
            </div>
            <div id='price'>Price : 
                <input type='Number' value={price} onChange={(e) => {setPrice(e.target.value)}}/>
            </div>
            <div id='descp'>Description : 
            <input value={description} onChange={(e) => {setDescription(e.target.value)}}/>
            </div>
            <input type="submit" className='submit-input' value="Edit" />
            <Link to={"/products"}>
                <h3>See All Products</h3>
            </Link>
        </form>

    </div>
    )
}

export default Editproduct