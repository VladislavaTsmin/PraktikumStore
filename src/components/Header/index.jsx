import { useEffect, useState } from "react";
import CardsContainer from "../CardsContainer";
import { getAllProducts } from "../../requests/products";
import s from "./index.module.css";

export default function Header({ addToCart }) {
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("all");

    useEffect(() => {
        getAllProducts().then(data => {
            const uniqueCategories = [...new Set(data.map(item => item.category))];
            setCategories(uniqueCategories);
        });
    }, []);

    return (
        <div className={s.header}>
            <div className={s.categories_wrapper}>
                <button
                    className={`${s.category_button} ${selectedCategory === "all" ? s.active : ""
                        }`}
                    onClick={() => setSelectedCategory("all")}
                >
                    All Products
                </button>

                {categories.map(category => (
                    <button
                        key={category}
                        className={`${s.category_button} ${selectedCategory === category ? s.active : ""}`}
                        onClick={() => setSelectedCategory(category)}
                    >
                        {category
                            .split(" ")
                            .map(word => word[0].toUpperCase() + word.slice(1))
                            .join(" ")}
                    </button>
                ))}
            </div>

            <hr className={s.line} />

            <div>
                <CardsContainer
                    selectedCategory={selectedCategory}
                    addToCart={addToCart}
                />
            </div>
        </div >
    );
}