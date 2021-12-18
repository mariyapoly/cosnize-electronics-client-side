import axios from "axios";
import { useEffect, useState } from "react";
import useAuth from "./useAuth";


const useOrder = () => {

    const [products, setProducts] = useState([])
    const [wishProducts, setWishProducts] = useState([])
    const { user } = useAuth();

    useEffect(() => {
        axios.get(`https://cryptic-hollows-56535.herokuapp.com/cartProduct/${user.email}`)
            .then(function (response) {
                setProducts(response.data);
            })
    }, [products, user.email])


    useEffect(() => {
        axios.get(`https://cryptic-hollows-56535.herokuapp.com/wishListProduct/${user.email}`)
            .then(function (response) {
                setWishProducts(response.data);
            })
    }, [wishProducts, user.email])

    return { products, wishProducts };
};

export default useOrder;