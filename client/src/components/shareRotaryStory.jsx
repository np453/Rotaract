import React, { Component } from 'react'
import ShareStoryImg from '../assets/shareStory_img.png';
import { Link } from 'react-router-dom';
import axios from 'axios';
export default class ShareRotaryStory extends Component {
    state = {
        data : {
            name:"",
            email:"",
            title:"",
            story:""
        }
    }
    handleChange = ({currentTarget:input}) => {
        const data = {...this.state.data};
        data[input.name] = input.value;
        this.setState({ data });
    };

    handleSubmit = async(e) => {
        const data = this.state.data;
        e.preventDefault();
        const payload = {
            name  : data.name,
            email : data.email,
            title : data.title,
            story : data.story 
        }
        const {data:formData}=  await axios.post('/rotary_story',payload);
        console.log(formData);
        this.setState({
            data:{
                name:"",
                email:"",
                title:"",
                story:""
            }
        })
    }
    
    render() {
        console.log(this.state.data)
        return (
            <div className="container-fluid position-absolute full__wrapper">
                <div className="story_container mt-5 mb-5">
                    <div className="share_story_container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="row m-0 form__row">
                                    <div className="col-md-4 form_heading">
                                        <h1>Share your<br/>Rotary Story<br/>with us</h1>
                                        <h4>tell us about your experiences 
                                            <br/>Don’t think much just post<br/>your thoughts :)
                                        </h4>
                                        <img src={ShareStoryImg} className="form_image img img-fluid float-right mt-5" alt=""/>
                                    </div>
                                    <div className="col-md-1">
                                        <span className="middle_line"></span>
                                    </div>
                                    <div className="col-md-7">
                                        <form onSubmit={this.handleSubmit} className="share_story_form_container">
                                            <div className="wrapper mb-5">
                                                <input name="name" onChange={this.handleChange} id="name" required="true" type="text"/>
                                                <div className="placeholder">Your Name</div>
                                            </div>
                                            <div className="wrapper mb-5">
                                                <input name="email" onChange={this.handleChange}  id="email" required="true" type="text"/>
                                                <div className="placeholder">Your email</div>
                                            </div>
                                            <div className="col-md-10 p-0 wrapper"><label htmlFor="title">Your rotary story</label></div>
                                            <div className="col-md-10 p-0 story_title_input">
                                                <input name="title" onChange={this.handleChange} id="title" className="w-100 m-0 p-0" type="text" placeholder="story title"/>
                                                    <i className="circle_" aria-hidden="true"></i>
                                                    <svg className="pin_" width="20" height="52" viewBox="0 0 20 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M19.7704 3.54132C17.6789 1.36002 14.7373 0 11.4841 0C5.15181 0 0.000509153 5.15232 0 11.4838L0 13.1066L0 21.6183L0 41.5978C0 46.8343 4.25988 51.0945 9.49641 51.0945C14.3347 51.0945 18.3324 47.4554 18.9139 42.7721C18.9657 42.6529 18.9945 42.5223 18.9945 42.3833V41.5978V25.0306V16.1841C18.9945 12.3926 15.9093 9.3069 12.1173 9.3069C8.32536 9.3069 5.2401 12.3926 5.2401 16.1841V38.2559C5.2401 38.7982 5.67939 39.2382 6.22235 39.2382C6.76552 39.2382 7.20492 38.7982 7.20492 38.2559V16.184C7.20492 13.4752 9.40761 11.2717 12.1173 11.2717C14.8258 11.2717 17.0294 13.4751 17.0294 16.184V25.0305V41.5977C17.0294 45.752 13.6509 49.1305 9.49692 49.1305C5.34417 49.1305 1.96543 45.7507 1.96543 41.5977L1.96543 21.6189L1.96543 13.1072L1.96543 11.4844C1.96543 6.23569 6.23529 1.96523 11.4841 1.96523C13.4191 1.96523 15.221 2.54554 16.725 3.54132H19.7704Z" fill="#9D9D9D"/>
                                                    </svg>
                                            </div>
                                            <div className="col-md-10 p-0 story__section">      
                                                <textarea rows="15" onChange={this.handleChange} className="w-100 m-0 p-0" name="story" id="story" type="text" placeholder="Be clear with your words and elaborate your story "/>
                                            </div> 
                                            <button className="btn_ ml-0 mt-3">Post story</button>
                                        </form>
                                        
                                    </div>
                                </div>                               
                            </div>                           
                        </div>                       
                    </div>
                    <div className="contact__details">
                        <div className="container">
                            <div className="row d-flex justify-content-center">
                                <div className="col-md-3">
                                    <h3>Get in touch</h3>
                                    <h5>email</h5>
                                    <p>rotaractmnnit@gmail.com</p>
                                </div>
                                <div className="col-md-3">
                                    <h3>social media</h3>
                                    <h5>facebook</h5>
                                    <h5>instagram</h5>
                                </div>
                                <div className="col-md-3">
                                    <h3>Where we are</h3>
                                    <h5>Address</h5>
                                    <p>MNNIT Allahabad</p> 
                                </div>
                            </div>
                            <div className="row d-flex justify-content-end">
                            <Link to='/'>
                                <span className="toHome">
                                    <i className="fa fa-arrow-left"></i>
                                    <span className="bth">back to home</span>
                                </span>
                            </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
