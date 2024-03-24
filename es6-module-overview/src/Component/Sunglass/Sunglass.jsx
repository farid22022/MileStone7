
import './Sunglass.css'
import Watch from '../Watch/Watch';
import {mult, add} from '../../Utils/calculate'
// import add from '../../Utils/calculate';

const Sunglass = () => {
    const first = 55;
    const second = 199;
    const sum = add(first,second);
    const mul= mult(1,2);
    return (
        <div>
            <Watch></Watch>
        </div>
    );
};

export default Sunglass;