import { useMyContext } from './context';
import Button from './components/Button';

import PurcaseItem from './components/PurcaseItem';
import AddNewLine from './components/AddNewLine';

export default function App() {
    const { setShowAddInput, purcaseItems, showAddInput } = useMyContext();
    return (
        <div className="App">
            <h1>Hello CodeSandbox</h1>
            <br />
            <br />
            <div className="container" >
                <ul>
                    {purcaseItems.map((item) => (
                        <PurcaseItem key={item.id} {...item} />
                    ))}
                </ul>
                {showAddInput && <AddNewLine />}
            </div>

            {
                <Button
                    className="btn btn-outline-primary"
                    onClick={() => setShowAddInput(true)}
                >
                    Add new line
                </Button>
            }
        </div>
    );
}
