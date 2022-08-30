import React from 'react'


import './Brands.css';

import { IoIosArrowBack } from 'react-icons/io';
import { IoIosArrowForward } from 'react-icons/io';


const Brands = () => {
    return(
        <>
            <div className="brands_section section">
                <h2>TOP BRANDS</h2>
                <div className="all_brands">
                    <div className="brands_slider">
                        <div className="brand_card">
                            <div className="brand_image">
                                <img src={require('../../../assests/brands/myntra.png')} alt="brands-logo" className='brands_logo' />
                            </div>
                        </div>
                        <div className="brand_card">
                            <div className="brand_image">
                                <img src={require('../../../assests/brands/gucci.png')} alt="brands-logo" className='brands_logo' />
                            </div>
                        </div>
                        <div className="brand_card">
                            <div className="brand_image">
                                <img src={require('../../../assests/brands/balenciaga.png')} alt="brands-logo" className='brands_logo' />
                            </div>
                        </div>
                        <div className="brand_card">
                            <div className="brand_image">
                                <img src={require('../../../assests/brands/the leela.png')} alt="brands-logo" className='brands_logo' />
                            </div>
                        </div>
                        <div className="brand_card">
                            <div className="brand_image">
                                <img src={require('../../../assests/brands/barbeque.png')} alt="brands-logo" className='brands_logo' />
                            </div>
                        </div>
                        <div className="brand_card">
                            <div className="brand_image">
                                <img src={require('../../../assests/brands/radisson.png')} alt="brands-logo" className='brands_logo' />
                            </div>
                        </div>
                        <div className="brand_card">
                            <div className="brand_image">
                                <img src={require('../../../assests/brands/louis.png')} alt="brands-logo" className='brands_logo' />
                            </div>
                        </div>
                        <div className="brand_card">
                            <div className="brand_image">
                                <img src={require('../../../assests/brands/armani.png')} alt="brands-logo" className='brands_logo' />
                            </div>
                        </div>
                        <div className="brand_card">
                            <div className="brand_image">
                                <img src={require('../../../assests/brands/nike.png')} alt="brands-logo" className='brands_logo' />
                            </div>
                        </div>
                        <div className="brand_card">
                            <div className="brand_image">
                                <img src={require('../../../assests/brands/crown.png')} alt="brands-logo" className='brands_logo' />
                            </div>
                        </div>
                        <div className="brand_card">
                            <div className="brand_image">
                                <img src={require('../../../assests/brands/amazon.png')} alt="brands-logo" className='brands_logo' />
                            </div>
                        </div>
                    </div>
                    <div className="moving_left">
                        <IoIosArrowBack className='move_icon'/>
                    </div>
                    <div className="moving_right">
                        <IoIosArrowForward className='move_icon'/>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Brands;