import React, { useEffect, useState } from "react";
import { getAllProducts } from "../../requests/products";
import ProductCard from "../ProductCard";
import s from "./index.module.css";

export default function CardsContainer() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        getAllProducts().then(data => setProducts(data));
    }, [])

    return (
        <div className={s.container}>
            {products.map(product => (
                <ProductCard key={product.id} {...product} />
            )
    )
}
        </div >
    )
}