import React from 'react'
import { Timeline, Divider } from 'rsuite';
import 'rsuite/dist/styles/rsuite-default.css';


const BlogStory = props => {
    return (
        <div className="blog__story">
            <Timeline>
                <Timeline.Item>
                    <h1>{props.heading}</h1>
                    
                </Timeline.Item>
            </Timeline>
        </div>
    );
}

export default BlogStory