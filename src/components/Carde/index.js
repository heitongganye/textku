import './index.css'

const Carde = (props) => {
    const { title, describe, buttona, backimg } = props;
    const bgt1 = {
        height: '130px',
        width: '100%',
        backgroundImage: 'url(' + backimg + ')',//图片的路径
        backgroundSize: '100% ',
        margin: '0 10px',
        display: 'flex',
        padding: '10px',
        alignItems: 'center',
        justifyContent: 'space-around',
    }
    return (
        <div style={bgt1} className='card-box'>
            <div className='card-title'>
                <div className='card-title1'>{title}</div>
                <div className='card-title2'>{describe}</div>
            </div>
            {
                buttona ? <div><button className='card-button'>马上申请</button></div> : <div style={{width:'110px'}}></div>
            }
        </div>
    )
}

export default Carde