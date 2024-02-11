import React, { useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';





const Create = () => {
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState("")
    const [description, setDescription] = useState("")

    const submitHandler = (e) => {
        e.preventDefault();

        axios.post("http://localhost:8000/api/products", {
            title,
            price,
            description
        })
        .then((res) => {
            console.log(res.data)
            setTitle("");
            setPrice("");
            setDescription("");
        })
        .catch((err) => {console.log(err)})
    }

    return (
        <form id='creation' onSubmit={submitHandler}>
            <div id='title'>Title :  
                <input value={title} onChange={(e) => {setTitle(e.target.value)}} />
            </div>
            <div id='price'>Price : 
                <input type='Number' value={price} onChange={(e) => {setPrice(e.target.value)}}/>
            </div>
            <div id='descp'>Description : 
            <input value={description} onChange={(e) => {setDescription(e.target.value)}}/>
            </div>
            <input type="submit" className='submit-input' value="Create" />
            <Link to={"/products/all"}>
                <h3>See All Products</h3>
            </Link>
        </form>
        
        
    )
}

export default Create