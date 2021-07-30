import { List } from 'antd';
import bgi from '../../../../assets/noticimg.jpg';
import './index.css';
import buttons from '../../../../assets/button.png';
import { RightCircleFilled} from '@ant-design/icons';


const Notice = () => {
    const data = [
        '阿里巴巴2022届应届生校园招聘流程公告',
        '阿里巴巴2022届应届生校园招聘FAQ',
        '阿里巴巴2022届应届生校园招聘 技术类岗位在线笔试公告（7月-8月场次）',
        '阿里巴巴2022届应届生校园招聘 灵犀互娱笔试安排公告',
        '阿里巴巴2022届应届生校园招聘 大文娱事业群笔试安排公告',
    ];
    const sl = {
        backgroundImage: 'url(' + buttons + ')',//图片的路径
        backgroundSize: '100% ',
        width: '100%',
        height: '82px',
    }
    const bga = {
        backgroundImage: 'url(' + bgi + ')',//图片的路径
        backgroundSize: '100%',
        width: '773px',
        height: '525px',
    }
    return (
        <div className='notic'>
            <div style={bga} >
                <div>
                    <div className='notic-ljxq'>点击了解阿里巴巴业务详情</div>
                    <div className='notic-ywzl'>
                        <button className='notic-an'>开启业务之旅 <RightCircleFilled /></button>
                    </div>
                </div>
            </div>
            <div className='notic-list'>
                <List
                    header={<div style={{fontSize:'20px'}}>通知专区</div>}
                    footer={<div style={sl}></div>}
                    split={false}
                    bordered={false}
                    dataSource={data}
                    renderItem={item => (
                        <List.Item description='2021.07.19'>
                            <div className='yuan'></div> {item}
                            <List.Item.Meta
                                title={<span >{item.title}</span>}
                                description="2021.07.19"
                            />
                        </List.Item>
                    )}
                />
            </div>
        </div>
    )
}

export default Notice