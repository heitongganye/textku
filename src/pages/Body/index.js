import './index.css';
import Displaydiagram from './components/Displaydiagram/index.js';
import Choice from './components/Choice/index';
import Cards from './components/Cards';
import Notice from './components/Notice/index';
import Rotationchart from './components/Rotationchart';
import Videoes from './components/Videoes/index';

const Body = () => {
    return (
        <div className='bd'>
            <div className='bodys'>
                <Displaydiagram />
                <Choice />
                <Cards />
            </div>
            <div className='bodye'>
                <div className='bodys'>
                    <Notice/>
                    <Rotationchart/>
                    <Videoes/>
                </div>
            </div>
        </div>
    )
}

export default Body