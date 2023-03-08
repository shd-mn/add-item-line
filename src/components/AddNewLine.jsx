import { useMyContext } from '../context';
import Button from './Button';
import Input from './Input';
import ProductList from './ProductList';
import { IoCloseSharp } from 'react-icons/io5';

function AddNewLine() {
    const {
        value,
        setOpenProductsList,
        handleChange,
        handleInputFocus,
        openProductsList,
        setShowAddInput,
        enterKeypress
    } = useMyContext();
    return (
        <>
            <ul>
                <div className="purcase-item-input  mb-2">
                    <div className="form-control ">-</div>
                    <div className="position-relative" onMouseLeave={
                        () => setOpenProductsList(false)
                    }>
                        <Input
                            className="form-control"
                            type="text"
                            name="product"
                            autocomplete="off"
                            value={value.product}
                            onChange={handleChange}
                            placeholder="Type to search products"
                            onFocus={handleInputFocus}
                            onKeyPress={enterKeypress}

                        />
                        {openProductsList && <ProductList />}
                    </div>
                    <div>-</div>
                    <Input
                        className="form-control"
                        type="number"
                    />
                    <div>
                        <Button
                            className="btn close-btn"
                            onClick={() => setShowAddInput(false)}
                        >
                            <IoCloseSharp />
                        </Button>
                    </div>
                </div>
            </ul>
        </>
    );
}

export default AddNewLine;
