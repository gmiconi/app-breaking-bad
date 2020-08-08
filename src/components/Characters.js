import React from 'react'
import Loader from './Loader'
import Item from './Item'
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Characters = ({items, isLoading}) => {

    var settings = {
        centerMode: true,
        infinite: false,
        responsive: [
            {
                breakpoint: 768,
                slidesToShow: 1,
                slidesToScroll: 1
            },
            {
                breakpoint: 2000,
                settings: 'unslick'
            }
        ]
    };
    return isLoading ? (
        <div className="center">
            <Loader />
        </div>
    ) : (

        <Slider className="characters" {...settings}>
            {items.map((item) => (
                <Item key={item.char_id} item={item}></Item>
            ))}
        </Slider>
    )
}

export default Characters
