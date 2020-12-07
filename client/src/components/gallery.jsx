import React, { Component } from 'react';
import Imgix from 'react-imgix';
class Gallery extends Component {
    render() {
        return (
            <div>
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