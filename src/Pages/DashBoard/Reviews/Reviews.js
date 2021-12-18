
import React from 'react';
import { useForm } from "react-hook-form";
import swal from 'sweetalert';
import './Reviews.css'

const Reviews = () => {

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data.name, data.des, data.img[0])
        if (!data.img[0]) {
            return
        }

        const formData = new FormData();
        formData.append('name', data.name);
        formData.append('des', data.des);
        formData.append('img', data.img[0]);


        fetch('https://cryptic-hollows-56535.herokuapp.com/addReview', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(result => {
                if (result.insertedId) {
                    swal("Make Admin Successfully");
                    reset();
                };
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