import React, { Component,Suspense,lazy } from 'react'
import { Link } from 'react-router-dom';
import '../sass/main.scss';
import logo from '../assets/logo.png';
import hill from '../assets/hill.svg';
import Typist from 'react-typist';
import { motion } from 'framer-motion';
import ScrollReveal from 'scrollreveal';
import Form from '../components/form';
import Footer from '../components/footer';
import svg1 from '../assets/rotaract_svg_1.svg';
import shareExpimg from '../assets/topSectionImg.png';
import shareExpimg2 from '../assets/shareExp2.png';
import shareSectionImg from '../assets/shareSectionImg.png';
import worksimg1 from '../assets/works_img_1.jpg';
import works_edu from '../assets/works_Edu.jpg';
import Cube from '../components/common/cube';
import ShareRotaryStory from '../components/shareRotaryStory';
import Gallery from '../components/gallery'

const Workcomponent = React.lazy(()=>import('../components/our_works'));

export default class Homepage extends Component {
    state={

    }
    handleloadmore=()=>{

    }
    form = React.createRef();
    gallery = React.createRef();
    storyForm = React.createRef();
    executeFormScroll = () => this.form.current.scrollIntoView()
    executeGalleryScroll = () => this.gallery.current.scrollIntoView()
    executeStoryFormScroll = () => this.storyForm.current.scrollIntoView()
    componentDidMount() {
        ScrollReveal().reveal('.our__works__section',{origin:'bottom', distance: '130px',viewFactor: 0.6 }  );
    }
    
    render() {
        return (
            <div className="container-fluid p-0">
                <div className="blob__container__section">
                <div className="container-fluid mt-3">
                <div className="container-lg  p-0">
                <nav className="navbar  navbar-expand-lg m-0 p-0">
                    <span className="navbar-brand brand">Rotaract Club MNNIT</span>
                    <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#landingPageNavbar" aria-controls="landingPageNavbar" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="icon-bar top-bar"></span>
                        <span className="icon-bar middle-bar"></span>
                        <span className="icon-bar bottom-bar"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="landingPageNavbar">
                        <div className="navbar-nav ml-auto align-items-center">
                            <Link onClick={this.executeFormScroll}><span className="mr-3 nav__link">Join us</span></Link>
                            <Link onClick={this.executeGalleryScroll}><span className="nav__link">View gallery</span></Link>
                        </div>
                    </div>
                </nav>
                </div>   
            </div>

            {/*intro section*/}
            <div className="container intro__section d-flex justify-content-center">
                <div className="row">
                    <Typist cursor={{show:false}} avgTypingDelay={50} ><span className="col-md-12 d-flex justify-content-center intro__section__heading">Let’s share our experience together</span></Typist>
                    <span className="col-md-12 d-flex justify-content-center intro__section__para">
                    About the club
                    Rotaract Club of MNNIT is an  international service organization  under the Rotary International,
                     for  all who wish to create a difference  in the society today.<br/>
                    We were established on 28  May,2015 under the club  sponsorship of Rotary Club of  Allahabad Elite,
                     Uttar Pradesh, India.  From a humble 15 members team  size we have grown to a 60+ member  team.
                    </span>
                    <div className="container-fluid mt-5 mb-5 p-0 share__experience__section">
                <div className="row d-flex justify-content-center">
                    <img src={shareExpimg} className="img img-fluid top_img" alt=""/>
                    {/* <img src={shareExpimg2} className="img2 img img-fluid w-100" alt=""/> */}
                </div>
            </div>
                </div>
            </div>
                </div>

            {/*our vision*/}
            <div className="container our__vision__section mt-5 mb-5">
                <h1 className="main__heading">Our vision</h1>
                <div className="col-md-5">
                <span className="section__para">
                The motto of the club is service before self. We aim not only to serve
                 society in any possible way but create a feeling of care,
                 responsibility and duty among the students of the college.
                   
                </span>
                </div>
            </div>
            {/*Our Works*/}
                <Suspense fallback={
                <div>Loading...</div>
                }>
                    <Workcomponent />
                </Suspense>
            {/* <div className="container our__works__section mt-5 mb-5">
                <h1 className="main__works__heading">Our Works</h1>
                <div className="col-md-12">
                  <div className="row">
                      <div className="col-md-4 our_work_container">
                          <img src={works_edu} className="w-100 img img-fluid img_works"/>
                          <h1 className="img_placeholder">Supporting Education</h1>
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
                  
                </div>
            </div> */}
            {/*share your rotary experience section*/}
            <div className="container-fluid mt-5 mb-5 p-0 share__experience__section">
                <div className="row m-0">
                    <div className="col-md-6 p-0">
                        <img src={shareSectionImg} className="img img-fluid w-100" alt=""/>
                    </div>
                    <div className="col-md-6 shareExpSection d-flex justify-content-center align-items-center">
                        <div className="row m-0">
                            <div className="col-md-12">
                            <h1>Share your experience with us</h1>
                        
                            </div>
                            <div className="col-md-12">
                            <Link onClick={this.executeStoryFormScroll}><button className="btn_" >Share your rotary story</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div ref={this.gallery}>
                    <Gallery />
            </div>
                <Cube />
                <div ref={this.storyForm} className=""><ShareRotaryStory /></div>
                
                {/* <Footer /> */}
            </div>
        )
    }
}