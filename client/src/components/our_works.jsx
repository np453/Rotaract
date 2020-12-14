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
import axios from 'axios';
import ScrollReveal from 'scrollreveal';

class Ourworks extends Component {
    state = {
        works: []
    }

    componentDidMount = async() => {
        const {data:works} = await axios.get("http://localhost:4444/ourworks/")
        this.setState({works})
        ScrollReveal().reveal('.img__gallery',{scale:0.85, reset:true }  );
    }
    
    render() {
        return (
        <div>
            <div className="container our__works__section mt-5 mb-5">
                <h1 className="main__works__heading">Our Works</h1>
                <div className="col-md-12">
                  <div className="row m-0">
                        {this.state.works.map(m => 
                        <div className="col-md-4 p-0 m-0">
                            <div className="works_wrapper">
                                <img className="img img-fluid " src={`data:${m.contentType};base64,`+m.buffer} alt=""/>
                                <h5 className="text-center">{m.title}</h5>
                            </div>
                        </div>    
                        )}
                  </div>
                </div>
            </div>
        </div>
            
                  
        );
    }
}

export default Ourworks;