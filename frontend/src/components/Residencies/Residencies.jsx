import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import 'swiper/css';
import './Residencies.css';
import axios from 'axios';
import data from '../../utils/slider.json'; // Static data from JSON

const Residencies = () => {
  const [dynamicResidences, setDynamicResidences] = useState([]);

  // Fetch dynamic data from MongoDB
  useEffect(() => {
    const fetchResidences = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/residences');
        setDynamicResidences(response.data); // Set the fetched data to state
      } catch (error) {
        console.error('Error fetching residences:', error);
      }
    };

    fetchResidences();
  }, []);

  // Combine static and dynamic residences
  const combinedResidences = [...data, ...dynamicResidences];

  return (
    <section className='r-wrapper'>
      <div className="paddings innerWidth r-container">
        <div className="r-head flexColStart">
          <span className='orangeText'>Best Choices</span>
          <span className='primaryText'>Popular residencies</span>
        </div>
        {/* Swiper Component */}
        <Swiper spaceBetween={50} slidesPerView={3}>
          <SliderButtons />
          {/* Map through combined residences (static + dynamic) */}
          {combinedResidences.map((residence, i) => (
            <SwiperSlide key={i}>
              <div className='r-card'>
                <img src={residence.image} alt={residence.name || 'residence'} />
                <span className='secondaryText r-price'>
                  <span style={{ color: "orange" }}>$</span><span>{residence.price}</span>
                </span>
                <span className='primaryText'>{residence.name}</span>
                <span className='secondaryText'>{residence.detail}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Residencies;

const SliderButtons = () => {
  const swiper = useSwiper();
  return (
    <div className="flexCenter r-button">
      <button onClick={() => swiper.slidePrev()}>&lt;</button>
      <button onClick={() => swiper.slideNext()}>&gt;</button>
    </div>
  );
};
