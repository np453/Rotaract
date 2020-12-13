import React, { Component,Suspense,lazy } from 'react';
import Imgix from 'react-imgix';

class Gallery extends Component {
    render() {
        return (
            <div>
                 <div className="row gallery-container">
                     <div className="col-md-4 gallery-img-container">
                         
                     </div>
                     <div className="col-md-4 gallery-img-container"></div>
                     <div className="col-md-4 gallery-img-container"></div>
                 </div>
                 <div className="row gallery-container">
                     <div className="col-md-4 gallery-img-container"></div>
                     <div className="col-md-4 gallery-img-container"></div>
                     <div className="col-md-4 gallery-img-container"></div>
                 </div>
                 <div className="row gallery-container">
                     <div className="col-md-4 gallery-img-container"></div>
                     <div className="col-md-4 gallery-img-container"></div>
                     <div className="col-md-4 gallery-img-container"></div>
                 </div>
            </div>
        );
    }
}

export default Gallery;