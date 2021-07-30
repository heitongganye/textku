import beijing from '../../../../assets/shouyetu.png';
import beiji from '../../../../assets/shouyebeijing.jpg';
import './index.css'
const Displaydiagram = () => {
    const bgGround = {
        height: '470px',
        width: '100%',
        backgroundImage: 'url(' + beiji + ')',//图片的路径
        backgroundSize: '100% ',
        padding:'40px' ,
    };
    return (
        <div className='box' style={bgGround}>
            <div style={{width:'450px',margin:'0 auto'}}><img src={beijing} alt='' style={{width:'100%'}}/></div>
        </div>
    )
}

export default Displaydiagram