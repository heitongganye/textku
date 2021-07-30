import './index.css';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import 'swiper/swiper-bundle.min.css';
import l1 from '../../../../assets/lunbo1.png';
import l2 from '../../../../assets/lunbo2.png';
import l3 from '../../../../assets/lunbo3.png';
import l4 from '../../../../assets/lunbo4.png';
import l5 from '../../../../assets/lunbo5.png';
import lt from '../../../../assets/lunbot.png';



SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

const Rotationchart = () => {
    return (<div className='rotationchart-box' >
        <div>
            <div className='rotationchart-tu'><img src={lt} alt='' style={{width:'253px',height:'97px'}}/> </div>
            <div className='rotationchart-sanjiao'></div>
            <div className='rotationchart-heise'></div>
        </div>
        <Swiper
            style={{ height: 235, padding: 40, position: 'absolute', bottom: '0px', width: '100%' ,zIndex:'4'}}
            spaceBetween={16}
            slidesPerView={5}// 显示个数
            loop //环路
            loopedSlides={5} //可见个数
            loopAdditionalSlides={5}
            autoplay={{
                delay: 2000,
                stopOnLastSlide: false,
                disableOnInteraction: true,
            }
            } //自动播放
        >
            <SwiperSlide>
                <div style={{ wihth: 320, height: 170, border: '1px solid' }}>
                    <img src={l1} alt='' style={{width:'100%'}}/>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div style={{ wihth: 320, height: 170 }}>
                    <img src={l2} alt='' style={{width:'100%'}}/>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div style={{ wihth: 320, height: 170 }}>
                    <img src={l3} alt='' style={{width:'100%'}}/>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div style={{ wihth: 320, height: 170 }}>
                    <img src={l4} alt='' style={{width:'100%'}}/>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div style={{ wihth: 320, height: 170 }}>
                    <img src={l5} alt='' style={{width:'100%'}}/>
                </div>
            </SwiperSlide>
        </Swiper>
        <div className='rotationchart-dsanjiao'>
        </div>
        <div className='rotationchart-byttonbox'></div>
    </div>
    )
}

export default Rotationchart