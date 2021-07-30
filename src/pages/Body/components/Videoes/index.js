import { Swiper, SwiperSlide } from 'swiper/react';
import './index.css';


const Videoes = () => {
    return (
        <div className='videos-box'>
            <div className='videos-bt'>
                阿里巴巴校招TV
            </div>
            <div className='videos-vide'>
                <Swiper
                    style={{ height: 235, padding:'40px 0px', width: '100%', zIndex: '4' }}
                    spaceBetween={18}
                    loop
                    slidesPerView={3}// 显示个数
                    loopedSlides={3} //可见个数
                    loopAdditionalSlides={3}
                    uniqueNavElements={true}
                >
                    <SwiperSlide>
                        <div style={{ wihth: 220, height: 170, margin: '0 40px' }}>
                            <video width="100%" height="170" controls> 
                                <source src="//cloud.video.taobao.com/play/u/1740916/p/1/e/6/t/1/318021088161.mp4" type="video/mp4" />
                                <source src="//cloud.video.taobao.com/play/u/1740916/p/1/e/6/t/1/318021088161.mp4" type="video/ogg" />
                                您的浏览器不支持 video 标签。
                            </video>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div style={{ wihth: 220, height: 170, margin: '0 40px' }}>
                            <video width="100%" height="100%" controls>
                                <source src="//cloud.video.taobao.com/play/u/1740916/p/1/e/6/t/1/318401449672.mp4" type="video/mp4" />
                                <source src="//cloud.video.taobao.com/play/u/1740916/p/1/e/6/t/1/318401449672.mp4" type="video/ogg" />
                                您的浏览器不支持 video 标签。
                            </video>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div style={{ wihth: 220, height: 170, margin: '0 40px' }}>
                            <video width="100%" height="170" controls>
                                <source src="//cloud.video.taobao.com/play/u/1740916/p/1/e/6/t/1/318001292376.mp4" type="video/mp4" />
                                <source src="//cloud.video.taobao.com/play/u/1740916/p/1/e/6/t/1/318001292376.mp4" type="video/ogg" />
                                您的浏览器不支持 video 标签。
                            </video>
                        </div>

                    </SwiperSlide>
                    <SwiperSlide>
                        <div style={{ wihth: 220, height: 170, margin: '0 40px' }}>
                            <video width="100%" height="170" controls>
                                <source src="//cloud.video.taobao.com/play/u/1740916/p/1/e/6/t/1/318433529594.mp4" type="video/mp4" />
                                <source src="//cloud.video.taobao.com/play/u/1740916/p/1/e/6/t/1/318433529594.mp4" type="video/ogg" />
                                您的浏览器不支持 video 标签。
                            </video>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}

export default Videoes;