import React, { useEffect, useState } from "react";
import { getAllProducts } from "../../requests/products";
import ProductCard from "../ProductCard";
import s from "./index.module.css";

export default function CardsContainer({ selectedCategory, addToCart }) {

    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        getAllProducts().then(data => {
            setProducts(data)
            setFilteredProducts(data)
        });
    }, [])

    useEffect(() => {
        if (selectedCategory === "all") {
            setFilteredProducts(products);
        } else {
            const filtered = products.filter((product) => {
                return product.category === selectedCategory
            });
            setFilteredProducts(filtered);
        }
    }, [selectedCategory, products])

    return (
        <div className={s.container}>
            {filteredProducts.map(product => (
                <ProductCard
                    key={product.id}
                    {...product}
                    addToCart={addToCart}
                />
            )
            )
            }
        </div >
    )
}