import React, { Component,Suspense,lazy } from 'react';
import Imgix from 'react-imgix';
const Workcomponent = React.lazy(()=>import('./our_works'))
// import Ourworks from './our_works';
class Gallery extends Component {
    render() {
        return (
            <div>
                 {/* <Suspense fallback={<div>Loading Our Works</div>}>
                    <Workcomponent />
                </Suspense> */}
                <Imgix
                    src="https://assets.imgix.net/examples/pione.jpg"
                    width={100} // This sets what resolution the component should load from the CDN and the size of the resulting image
                    height={200}
                    />
                    <Imgix
                        src="https://assets.imgix.net/examples/pione.jpg"
                        sizes="calc(10% - 10px)"
                    />
            </div>
        );
    }
}

export default Gallery;