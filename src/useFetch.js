import {useState, useEffect} from 'react'

const useFetch = () => {

    const fetchProducts = async () => {
        
        setIsLoading(true);
        try {
            const response = await fetch('http://localhost:3010/data');
            const result = await response.json();
            setIsLoading(false);

            if (purcaseItems.length > 0) {
                const newProducts = result.filter(
                    (product) =>
                        !purcaseItems.find((item) => item.id === product.id)
                );
                setProducts(newProducts);
            } else {
                setProducts(result);
            }
        } catch (error) {
            console.log(error);
        }
    };
  return {}
}

export default useFetch

