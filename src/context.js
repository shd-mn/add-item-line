import { createContext, useContext, useState } from 'react';

const MainContext = createContext();

const MainProvider = ({ children }) => {
    const [openProductsList, setOpenProductsList] = useState(false);
    const [showAddInput, setShowAddInput] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const [products, setProducts] = useState([]);
    const [value, setValue] = useState({ product: '', quantity: '' });
    const [purcaseItems, setPurcaseItems] = useState([]);

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

    console.log(purcaseItems)

    const addProduct = (element) => {
        if (element) {
            const newProductItem = products.find(product => product.id === +element.dataset.id);
            setPurcaseItems([...purcaseItems, newProductItem]);
            setOpenProductsList(false);
            setValue({ product: '', quantity: '' });
        }
    };

    const handleInputFocus = () => {
        fetchProducts();
        setOpenProductsList(true);
    };

    const enterKeypress = (e) => {
        if (
            e.key === 'Enter' &&
            e.target.name === 'product' &&
            products.length > 0
        ) {
            e.preventDefault();
            const newProduct = document.querySelector('.product-item.active');
            addProduct(newProduct)
            setProducts([])
            
            // enter-a basinca arama inputuna odaklan ( useRef )
        } else if (e.key === 'Enter' && e.target.name === 'quantity') {
            e.preventDefault();
            // enter-a basinca arama inputuna odaklan ( useRef )
        }
    };

    const handleChange = (e, id) => {
        setValue({ ...value, [e.target.name]: e.target.value });

        if (e.target.name === 'product' && e.target.value !== '') {
            handleInputFocus()
        }

        if (e.target.name === 'quantity') {
            const addQuantity = purcaseItems.map((item) =>
                item.id === id ? { ...item, quantity: e.target.value } : item
            );
            setPurcaseItems(addQuantity);
        }
    };

    const filteredProducts = products.filter((item) =>
        item.name
            .toLocaleLowerCase()
            .includes(value.product.toLocaleLowerCase())
    );

    const removePurcaseItem = (id) => {
        const newPurcaseItems = purcaseItems.filter(
            (purcase) => purcase.id !== id
        );
        setPurcaseItems(newPurcaseItems);
    };

    const data = {
        openProductsList,
        setOpenProductsList,
        showAddInput,
        setShowAddInput,
        isLoading,
        setIsLoading,
        products,
        setProducts,
        value,
        setValue,
        purcaseItems,
        setPurcaseItems,

        filteredProducts,
        addProduct,
        handleInputFocus,
        enterKeypress,
        handleChange,
        removePurcaseItem
    };
    return <MainContext.Provider value={data}>{children}</MainContext.Provider>;
};

export const useMyContext = () => useContext(MainContext);
export default MainProvider;
