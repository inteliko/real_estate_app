import { Swiper, SwiperSlide} from 'swiper/react';
import { Autoplay, Pagination } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


import PropertyCard from '@/features/common/modules/PropertyCard';


const PropertySlider = ({featuredProperties}) => {
    return(
        <Swiper 
        slidesPerView={3}
        spaceBetween={10}
        loop={true}
        loopfillgroupwithblank={true}
        centeredSlides={true}
        autoplay={{ delay: 2000, disableOnInteraction: true }}
        pagination={{ dynamicBullets: true  }}
        modules={[ Autoplay, Pagination ]}
        className="mySwiper"


         >
        {featuredProperties.map((property) => (
            <SwiperSlide key={property.id}>
                <PropertyCard {...property} />
            </SwiperSlide>
        ))}
        </Swiper>
    );
};

export default PropertySlider;