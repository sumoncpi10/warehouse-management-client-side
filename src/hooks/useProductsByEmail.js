import { useEffect, useState } from "react"
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firabase.init";

const useProducts = () => {
    const [user] = useAuthState(auth);
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch(`https://manufacturer-website-s670.onrender.com/order?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    return [products, setProducts];
}
export default useProducts;