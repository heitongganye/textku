import { Col, Row } from "antd";
import './index.css'


const Choice = () => {
    return (
        <div className='che'>
            <Row>
                <Col flex={1}><div className='btm che2'><span className='che1'>我要投递</span></div></Col>
                <Col flex={1}><div><span className='che1'>通知专区</span></div></Col>
                <Col flex={1}><div><span className='che1'>业务介绍</span></div></Col>
                <Col flex={1}><div><span className='che1'>120年轻力指南</span></div></Col>
                <Col flex={1}><div><span className='che1'>阿里巴巴校招TV</span></div></Col>
            </Row>
        </div>
    )
}

export default Choice