import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import swal from 'sweetalert';
import './ProductAddForm.css'

const ProductAddForm = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        axios.post('https://cryptic-hollows-56535.herokuapp.com/allProduct', {
            name: data.name,
            img: data.img,
            price: data.price,
            Brands: data.Brands,
            Availability: data.Availability,
            des1: data.des1,
            des2: data.des2,
            des4: data.des4,
            des5: data.des5,
            des6: data.des6,
            des7: data.des7,
            des8: data.des8,

        })
            .then(function (response) {
                if (response.data.insertedId) {
                    swal("Product added successfully");
                    reset();
                }
            })
    };


    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="pd-input">
                    <label required htmlFor="name">Product name  *</label>
                    <input required id='name' {...register("name")} />
                </div>
                <div className="pd-input">
                    <label required htmlFor="img">Product image Link  *</label>
                    <input required id='img' {...register("img")} />
                </div>
                <div className="pd-input">
                    <label required htmlFor="price">Product price  *</label>
                    <input required id='price' {...register("price")} />
                </div>
                <div className="pd-input">
                    <label required htmlFor="Brands">Product Brands  *</label>
                    <input required id='Brands' {...register("Brands")} />
                </div>
                <div className="pd-input">
                    <label required htmlFor="Availability">Product Availability  *</label>
                    <input required id='Availability' {...register("Availability")} />
                </div>
                <div className="pd-input">
                    <label required htmlFor="des1">Product feature 1  *</label>
                    <input required id='des1' {...register("des1")} />
                </div>
                <div className="pd-input">
                    <label required htmlFor="des2">Product feature 2 *</label>
                    <input required id='des2' {...register("des2")} />
                </div>
                <div className="pd-input">
                    <label required htmlFor="des4">Product feature 3 *</label>
                    <input required id='des4' {...register("des4")} />
                </div>
                <div className="pd-input">
                    <label required htmlFor="des5">Product feature 4 *</label>
                    <input required id='des5' {...register("des5")} />
                </div>
                <div className="pd-input">
                    <label required htmlFor="des6">Product feature 5 *</label>
                    <input required id='des6' {...register("des6")} />
                </div>
                <div className="pd-input">
                    <label required htmlFor="des7">Product feature 6 *</label>
                    <input required id='des7' {...register("des7")} />
                </div>
                <div className="pd-input">
                    <label required htmlFor="des8">Product feature 7 *</label>
                    <input required id='des8' {...register("des8")} />
                </div>
                <input className='submit-btn add-pd' type="submit" value="Add Product" />
            </form>
        </div>
    );
};

export default ProductAddForm;