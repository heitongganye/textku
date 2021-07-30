import './index.css';
import { Col, Divider, Row } from 'antd';
import logo from '../../assets/footerlogo.png'

const Footer = () => {
    return (
        <div className='footer-box'>
            <div className='footer-nr'>
                <div style={{ padding: '0 20px' }}>
                    <img src={logo} alt='' />
                </div>
                <Divider type='vertical' style={{ width: '2px', height: '100%', background: '#fff' }} />
                <div style={{ width: '80%' }} className='footer-list'>
                    <div style={{marginBottom:'30px',fontSize:'12px'}}>
                        <Row>
                            <Col flex={1}>
                                <ul>
                                    <li>阿里巴巴集团</li>
                                    <li>阿里巴巴国际交易机场</li>
                                    <li>阿里影业</li>
                                    <li>优酷</li>
                                    <li>uc</li>
                                </ul>
                            </Col>
                            <Col flex={1}>
                                <ul>
                                    <li>支付宝</li>
                                    <li>1688</li>
                                    <li>Lazada</li>
                                    <li>阿里体育</li>
                                    <li>土豆</li>
                                </ul>
                            </Col>
                            <Col flex={1}>
                                <ul>
                                    <li>飞猪</li>
                                    <li>阿里云</li>
                                    <li>淘宝</li>
                                    <li>Ding Takl</li>
                                    <li>网商银行</li>
                                </ul>
                            </Col>
                            <Col flex={1}>
                                <ul>
                                    <li>虾米</li>
                                    <li>高德</li>
                                    <li>全球速卖通</li>
                                    <li>天猫</li>
                                </ul>
                            </Col>
                            <Col flex={1}>
                                <ul>
                                    <li>阿里健康</li>
                                    <li>大麦</li>
                                    <li>AliOS</li>
                                    <li>阿里妈妈</li>
                                </ul>
                            </Col>
                        </Row>
                    </div>
                    <div style={{marginTop:'20px',fontSize:'12px'}}>Powered by 阿里巴巴集团 © 2021 阿里巴巴集团版权所有</div>
                </div>
            </div>
        </div>
    )
}

export default Footer