import { useEffect, useState } from "react";
import CardsContainer from "../CardsContainer";
import { getAllProducts } from "../../requests/products";
import s from "./index.module.css";


export default function Header() {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        getAllProducts().then(data => {
            const uniqueCategories = [...new Set(data.map(item => item.category))];
            setCategories(uniqueCategories);

        })
    }, []);

    function firstLetterToUpperCase (string) {
        return string
        .split(' ')
        .map(word => word,charAt(0).toUpperCase() + word.slice(1))
        .join(' ')
    }

    return (
        <div className={s.header}>
            <div className={s.categories_wrapper}>
                <button className={s.category_button}>
                    All Products
                </button>
                {categories.map(category => (
                        <button key={category} className={s.category_button}>
                            {category.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ')}
                        </button>
                ))}

            </div>
            <hr className={s.line}/>
            <div>
                <CardsContainer />
            </div>
        </div>
    )
}