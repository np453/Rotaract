import React, { Component } from 'react'
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
export default class Homepage extends Component {

    form = React.createRef();
    executeFormScroll = () => this.form.current.scrollIntoView()
    render() {
        return (
            <div className="container-fluid p-0">
                <div className="container-fluid">
                <div className="container-lg p-0">
                <nav className="navbar navbar-expand-lg m-0 p-0">
                    <span className="navbar-brand brand">Rotaract Club MNNIT</span>
                    <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#landingPageNavbar" aria-controls="landingPageNavbar" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="icon-bar top-bar"></span>
                        <span className="icon-bar middle-bar"></span>
                        <span className="icon-bar bottom-bar"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="landingPageNavbar">
                        <div className="navbar-nav ml-auto align-items-center">
                            <Link onClick={this.executeFormScroll}><span className="mr-3 nav__link">Join us</span></Link>
                            <Link to="/gallery"><span className="nav__link">View gallery</span></Link>
                        </div>
                    </div>
                </nav>
                </div>   
            </div>

            {/*intro section*/}
            <div className="container intro__section d-flex justify-content-center">
                <div className="row">
                    <span className="col-md-12 d-flex justify-content-center intro__section__heading">Let’s share our experience together</span>
                    <span className="col-md-12 d-flex justify-content-center intro__section__para">We are ... text that will explain about the club</span>
                    <div className="container-fluid mt-5 mb-5 p-0 share__experience__section">
                <div className="row d-flex justify-content-center">
                    <img src={shareExpimg} className="img img-fluid" alt=""/>
                    <img src={shareExpimg2} className="img2 img img-fluid w-100" alt=""/>
                </div>
            </div>
                </div>
            </div>

            {/*our vision*/}
            <div className="container our__vision__section mt-5 mb-5">
                <h1 className="main__heading">Our vision</h1>
                <div className="col-md-5">
                <span className="section__para">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                    Nulla blanditiis quo culpa repudiandae recusandae quisquam, quidem sed 
                    exercitationem praesentium nobis eum aut tempore dolorem reiciendis similique quia! Ipsam, voluptates vitae.
                </span>
                </div>
            </div>
            {/*share your rotary experience section*/}
            <div className="container-fluid mt-5 mb-5 p-0 share__experience__section">
                <div className="row">
                    <div className="col-md-6 p-0">
                        <img src={shareSectionImg} className="img img-fluid w-100" alt=""/>
                    </div>
                    <div className="col-md-6 shareExpSection d-flex justify-content-center align-items-center">
                        <h1>Share your experience with us</h1>
                    </div>
                </div>
            </div>
                <div ref={this.form}><Form /></div>
                <Footer />
            </div>
        )
    }
}
