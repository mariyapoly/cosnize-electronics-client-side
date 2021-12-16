
import React from 'react';
import { useForm } from "react-hook-form";
import './Reviews.css'

const Reviews = () => {

    const { register, handleSubmit, } = useForm();
    const onSubmit = data => {
        console.log(data.name, data.des, data.img[0])
        if (!data.img[0]) {
            return
        }

        const formData = new FormData();
        formData.append('name', data.name);
        formData.append('des', data.des);
        formData.append('img', data.img[0]);


        fetch('http://localhost:5000/addReview', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(result => {
                console.log('Success:', result);
            })
            .catch(error => {
                console.error('Error:', error);
            });


    };

    return (
        <div>
            <h4>Reviews</h4>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="input-field">
                    <label htmlFor="name">Your Name  *</label>
                    <input id='name' {...register("name", { required: true })} />
                </div>
                <div className="input-field">
                    <label htmlFor="img">Upload your Image *</label>
                    <input accept='image/*' type="file" required id='img'  {...register("img")} />
                </div>
                <label htmlFor="des">Description *</label>
                <textarea required id='des' {...register("des")}></textarea>
                <input className='submit-btn' type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default Reviews;