import Loading from './Loading';
import Button from './Button';
import { useMyContext } from '../context';

function ProductList() {
    const { isLoading, addProduct, filteredProducts } = useMyContext();

    if (isLoading) {
        return <Loading />;
    }
    return (
        <div className="list-group list-group-flush product-dropdown" onClick={(e) => addProduct(e.target.closest('.product-item'))}>
            {filteredProducts.map((product, index) => (

                <Button
                    key={product.id}
                    className={`btn btn-primary list-group-item product-item ${index === 0 && 'active'}`}

                    data-id={product.id}
                >
                    {product.name}
                </Button>

            ))}
        </div>
    );
}

export default ProductList;
