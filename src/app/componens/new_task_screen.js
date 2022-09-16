import { useSelector, useDispatch } from 'react-redux';
import { create } from '../reducers/toDoActions';


function Newtask() {
const count = useSelector((state) => state)
const dispatch = useDispatch()
    return (
        <div className='centerCard'>
            <button
            aria-label="Increment value"
            onClick={() => dispatch(create({
                id: '12121212121',
                status: 'todo',
                priority: 'High'
        }))}
        >add</button>
            <h2>New task</h2>
        </div>
    );
}
export default Newtask;