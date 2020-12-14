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
            // Img.map(m => {
            //     imData.push(URL.createObjectURL(new Blob([m.file.data.data], {type:m.file.contentType})))
            // })
            console.log(Img)
        this.setState({galleryImg:Img})
        // console.log(imData)
    }
    
    render() {
        return (
            <div>
                 <div className="container-fluid img_gallery_container p-0">
                     <h4 className="p-2">Image gallery</h4>
                     <div className="row m-0 p-1">
                         {this.state.galleryImg.map(m => 
                                <div className="col-md-4 p-1">
                                    <img className="img img-fluid" src={`data:${m.contentType};base64,`+m.buffer} alt=""/>
                                </div>
                            )}
                     </div>
                 </div>
            </div>
        );
    }
}

export default Gallery;