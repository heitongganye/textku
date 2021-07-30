import { Col, Row } from 'antd';
import { PoundOutlined } from '@ant-design/icons';
import './index.css';
import logo from '../../assets/logo.png'

const Header = () => {
    return (
        <div className='bigbox'>
            <Row>
                <div className='content'>
                    <Col span={6}>
                        <div className='logo'><img src={logo} alt='' style={{ width: '80%' }} /></div>
                    </Col>
                    <Col span={12}>
                        <div className='logo xz'>
                            <span className='check'>首页</span>
                            <span className='check'>社会招聘</span>
                            <span className='check checked'>校园招聘</span>
                            <span className='check'>个人中心</span>
                        </div>
                    </Col>
                    <Col span={6}>
                        <div className='logo'>
                            <span className='check dl'>登录</span>
                            <PoundOutlined style={{ fontSize: '16px' }} />
                        </div>
                    </Col>
                </div>
            </Row>
        </div >
    )
}
export default Header