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
        enterKeypress,
    } = useMyContext();
    return (
        <>

            <li className="purcase-item-input">
                <div className="form-control ">-</div>
                <div
                    className="position-relative"
                    onMouseLeave={() => setOpenProductsList(false)}
                >
                    <Input
                        className="form-control"
                        type="text"
                        name="product"
                        autoComplete="off"
                        value={value.product}
                        onChange={handleChange}
                        placeholder="Type to search products"
                        onClick={handleInputFocus}
                        onKeyPress={enterKeypress}
                    />
                    {openProductsList && <ProductList />}
                </div>
                <div>-</div>
                <Input className="form-control" type="number" disabled />
                <div>
                    <Button
                        className="btn close-btn"
                        onClick={() => setShowAddInput(false)}
                    >
                        <IoCloseSharp />
                    </Button>
                </div>
            </li>

        </>
    );
}

export default AddNewLine;
