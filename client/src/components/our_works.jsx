import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../sass/main.scss';
import Form from '../components/form';
import Footer from '../components/footer';
import svg1 from '../assets/rotaract_svg_1.svg';
import shareExpimg from '../assets/topSectionImg.png';
import shareExpimg2 from '../assets/shareExp2.png';
import shareSectionImg from '../assets/shareSectionImg.png';
import img1 from '../assets/works_img_1.jpg';
import img from '../assets/works_Edu.jpg';

class Ourworks extends Component {
    render() {
        return (
        <div>
            <div className="container our__works__section mt-5 mb-5">
                <h1 className="main__works__heading">Our Works</h1>
                <div className="col-md-12">
                  <div className="row">
                    <div className="col-md-4">
                            <div className="works_wrapper">
                                <img src={img} className="img img-fluid" alt=""/>
                                <h5 className="text-center">Supporting education</h5>
                            </div>
                        </div>
                        <div className="col-md-4"><div className="works_wrapper">
                                <img src={img} className="img img-fluid" alt=""/>
                                <h5 className="text-center">Supporting education</h5>
                            </div>
                        </div>
                        <div className="col-md-4"><div className="works_wrapper">
                                <img src={img} className="img img-fluid" alt=""/>
                                <h5 className="text-center">Supporting education</h5>
                            </div>
                        </div>
                  </div>
                  {/* <div className="row mt-4">
                      <div className="col-md-4 our_work_container">
                          <img src={shareExpimg2} className="img img-fluid img_works"/>
                          <h1 className="img_placeholder">Edu</h1>
                      </div>
                      <div className="col-md-4 our_work_container">
                          <img src={shareExpimg2} className="img img-fluid img_works"/>
                          <h1 className="img_placeholder">Edu</h1>
                      </div>
                      <div className="col-md-4 our_work_container">
                          <img src={shareExpimg2} className="img img-fluid img_works" />
                          <h1 className="img_placeholder">Edu</h1>
                      </div>
                  </div>
                  <span className="load_more" onClick={this.handleloadmore()}>Load More...</span> */}
                </div>
            </div>
        </div>
            
                  
        );
    }
}

export default Ourworks;