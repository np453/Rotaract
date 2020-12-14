import React, { Component,Suspense,lazy } from 'react';
import Imgix from 'react-imgix';
import img1 from '../assets/shareStoryFormBackImg.png'
import img2 from '../assets/shareExp2.png'
import img3 from '../assets/works_old.jpg'
import img4 from '../assets/works_Edu.jpg'
import img5 from '../assets/works_img_1.jpg'
import img6 from '../assets/shareExp_img.png'
import img7 from '../assets/shareExp_img.png'
import axios from 'axios';
class Gallery extends Component {
    state = {
        galleryImg : []
    }
    componentDidMount = async() => {
        const imData = [];
        const {data:Img} = await axios.get("http://localhost:4444/upload/img")
            Img.map(m => {
                imData.push(URL.createObjectURL(new Blob([m.file.data.data], {type:m.file.contentType})))
            })
        this.setState({galleryImg:imData})
        console.log(imData)
    }
    
    render() {
        return (
            <div>
                 <div className="container-fluid p-0">
                     <div className="row m-0">
                         {this.state.galleryImg.map(m => 
                                <img src={m} alt=""/>
                            )}
                     </div>
                 </div>
            </div>
        );
    }
}

export default Gallery;