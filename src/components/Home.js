import Banner from "./Banner";
import Popular from "./Popular";
import Cards from "./Cards";
import axios from "axios"
import { useContext, useEffect, useState } from "react";
import AppContext from "../services/AppContext";

const Home = () => {

    const [state, setState] = useContext(AppContext);

    const [fruits, setFruits] = useState([]);
    const [vegetables, setvegetables] = useState([]);

    const fetchProducts = () => {
        axios.get("/stub/products.json").then(res => {
            console.log(res);
            let products = res.data.data;
            for (let product of products){
                 product.quantity = 0;
            }           
            categorizeProducts (products);
            
            setState({ ...state, products });
            console.log(products)
        });
    };

    const categorizeProducts = (products) => {
        let tempFruits = [];
        let tempVegetables = [];
        for (let product of products) {
            if (product.type === 'fruits' && product.popular === 1) {
                tempFruits.push(product)
                console.log(product,'Fruits')
            }
            if (product.type === 'vegetables' && product.popular === 1) {
                tempVegetables.push(product)
                console.log(product,'vegetable')
            }
        }
        setFruits(tempFruits);
        setvegetables(tempVegetables)
    }

    useEffect(() => {
        if (state.products.length === 0) {
            fetchProducts();
        }else{
            categorizeProducts(state.products);
        }
    },[]);

    return (
        <>
            <Banner />
            <Cards />
            <Popular title="Popular Fruits" items={fruits} />
            <Popular title="Popular vegetables" items={vegetables} />
        </>
    )
}
export default Home;