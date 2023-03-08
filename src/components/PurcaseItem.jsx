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
                    name="quantity"
                    type="number"
                    min="1"
                    max="1000"
                    className="form-control"
                    defaultValue={quantity}
                    onChange={e => handleChange(e, id)}
                    onKeyPress={(e) => enterKeypress(e, id)}
                    
                />
            </div>
        </li>
    );
}

export default PurcaseItem;
