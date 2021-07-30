import Carde from "../../../../components/Carde";
import bg1 from '../../../../assets/bg1.png';
import bg2 from '../../../../assets/bg2.png';
import bg3 from '../../../../assets/bg3.png';
import './index.css';

const Cards = () => {
    return (
        <div className='cd1'>
            <Carde title='应届生招聘' describe='毕业时间：2021.11-2022.10' buttona='true' backimg={bg1} />
            <Carde title='实习生招聘' describe='毕业时间：2021.11-2022.10' backimg={bg2} />
            <Carde title='其他项目' describe='毕业时间：2021.11-2022.10' buttona='true' backimg={bg3} />
        </div >
    )
}

export default Cards