import { IoCloseSharp } from 'react-icons/io5';
import { useMyContext } from '../context';
import Button from './Button';
import Input from './Input';

function PurcaseItem({ name, id, instock, quantity }) {
    const { handleChange, enterKeypress, removePurcaseItem } = useMyContext();
    return (
        <li className="purcase-item">
            <div className="form-control">img</div>
            <div className="form-control position-relative">
                {name}
                <Button
                    className="btn remove-btn"
                    type="button"
                    onClick={() => removePurcaseItem(id)}
                >
                    <IoCloseSharp />
                </Button>
            </div>
            <div>{instock}</div>
            <div className="position-relative">
                <Input
                    onChange={e => handleChange(e, id)}
                    name="quantity"
                    defaultValue={quantity}
                    onKeyPress={(e) => enterKeypress(e, id)}
                    className="form-control"
                    type="number"
                />
            </div>
        </li>
    );
}

export default PurcaseItem;
