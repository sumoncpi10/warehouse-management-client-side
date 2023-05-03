import { useEffect, useState } from "react"

const useProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch(`https://manufacturer-website-s670.onrender.com/orders`)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    return [products, setProducts];
}
export default useProducts;