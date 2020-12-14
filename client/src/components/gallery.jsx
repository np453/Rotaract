import React, { Component,Suspense,lazy } from 'react';
import Imgix from 'react-imgix';
import img1 from '../assets/shareStoryFormBackImg.png'
import img2 from '../assets/shareExp2.png'
import img3 from '../assets/works_old.jpg'
import img4 from '../assets/works_Edu.jpg'
import img5 from '../assets/works_img_1.jpg'
import img6 from '../assets/shareExp_img.png'
import img7 from '../assets/shareExp_img.png'
class Gallery extends Component {
    render() {
        return (
            <div>
                 <div className="container-fluid p-0">
                     <div className="row m-0">
                         <div className="col-md-3 p-0"><img className="img img-fluid" src={img1} alt=""/></div>
                         <div className="col-md-3 p-0"><img className="img img-fluid" src={img2} alt=""/></div>
                         <div className="col-md-3 p-0"><img className="img img-fluid" src={img3} alt=""/></div>
                         <div className="col-md-3 p-0"><img className="img img-fluid" src={img4} alt=""/></div>
                         <div className="col-md-3 p-0"><img className="img img-fluid" src={img5} alt=""/></div>
                         <div className="col-md-3 p-0"><img className="img img-fluid" src={img6} alt=""/></div>
                         <div className="col-md-3 p-0"><img className="img img-fluid" src={img7} alt=""/></div>
                     </div>
                 </div>
            </div>
        );
    }
}

export default Gallery;