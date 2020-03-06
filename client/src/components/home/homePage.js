import React, { Component } from 'react';
import Footer from '../footer/footer';
import SecondfoldCard from './secondfold_card';
import { isMobile, isTablet } from 'react-device-detect';
import './homePage.css';
import HomeBanner from './homebanner';
import HeaderMenu from '../header/headermenu';
import ThirdFold from './thirdfold';
import EcommerceProducts from './ecomerceproductdata';
import ArtisanStories from './stories';
import ProductCarousel from './productCarousel';


class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
     
    };

  }

  
  render() {

    return (
      <div className="">
        <HeaderMenu />
        <HomeBanner />
        <div>
          <SecondfoldCard />
          <ThirdFold />
          <div className="container" style={isMobile && !isTablet ? { width: '100%', marginTop: '0' } : { width: "80%", marginTop: '70px' }}>
            <h3>Best Selling Product</h3>
            <ProductCarousel/>
          </div>
          <div className="container" style={isMobile && !isTablet ? { width: '100%', marginTop: '0' } : { width: "80%", marginTop: '70px' }}>
            <h3>Best Sellers</h3>
            <ProductCarousel/>
          </div>
          
          
          <ArtisanStories />
          
          <div className="productsheading" style={{ marginTop: "50px" }}>
            <h2>Artisan Featured Products</h2>
            <EcommerceProducts />
          </div>
          <div className="container" style={isMobile && !isTablet ? { width: '100%', marginTop: '0' } : { width: "80%", marginTop: '70px' }}>
            <h3>New Products</h3>
            <ProductCarousel/>
          </div>
        </div>

        <div className="container" style={isMobile && !isTablet ? { width: '100%', marginTop: '0' } : { width: "80%", marginTop: '70px' }}>
          <h3>New Sellers</h3>
          <ProductCarousel/>
        </div>
        <Footer />
      </div>
    )
  }
}

export default HomePage;
