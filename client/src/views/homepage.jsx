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
export default class Homepage extends Component {

    form = React.createRef();
    executeFormScroll = () => this.form.current.scrollIntoView()
    render() {
        return (
            <div className="container-fluid p-0">
                <motion.div initial={{x:300, opacity:0}} animate={{x:0, opacity:1}} transition={{delay:0.4}} className="pl-5 pt-4 mt-3 pr-0 topSection_container container-fluid">
                    <div className="pl-5 pt-4 logo-banner">
                    <div className="view_gallery_button">
                        <div className="row">
                            <div className="col-md-8"></div>
                            <div className="col-md-4">
                                <Link to="/gallery"><span className="">View gallery</span></Link>
                            </div>
                        </div>
                    </div>
                    <h1>Rotaract Club</h1>
                    <h3>MNNIT</h3>
                    <button className="btn_ mt-3" onClick={this.executeFormScroll}>Learn more</button>
                    <div className="row m-0">
                        <div className="col-md-8"></div>
                        <div className="col-md-4 d-flex justify-content-center">
                        <img src={logo} className="rotaract__logo"></img>
                        </div>
                        <div className="col-md-6">
                        </div>
                        <div className="col-md-6 d-flex justify-content-end p-0">
                            <img className="img img-fluid" src={hill} alt=""/>
                        </div>
                    </div>
                    </div>
                </motion.div>
                <div className="container rounded-lg description mb-5 p-5">
                    <div className="row d-flex justify-content-center">
                        <h1 className="description__heading">Who we are</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                            Illum, asperiores dolorum? Deserunt ea dolore eligendi aperiam necessitatibus 
                            rerum qui earum praesentium ducimus dolorum soluta, minima suscipit iusto, molestiae pariatur maxime.
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br/><br/>
                            Illum, asperiores dolorum? Deserunt ea dolore eligendi aperiam necessitatibus 
                            rerum qui earum praesentium ducimus dolorum soluta, minima suscipit iusto, molestiae pariatur maxime.
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br/><br/>
                            Illum, asperiores dolorum? Deserunt ea dolore eligendi aperiam necessitatibus 
                            rerum qui earum praesentium ducimus dolorum soluta, minima suscipit iusto, molestiae pariatur maxime.
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                            Illum, asperiores dolorum? Deserunt ea dolore eligendi aperiam necessitatibus<br/>
                            rerum qui earum praesentium ducimus dolorum soluta, minima suscipit iusto, molestiae pariatur maxime.
                        </p>
                    </div>
                </div>
                <div ref={this.form}><Form /></div>
                <Footer />
            </div>
        )
    }
}
