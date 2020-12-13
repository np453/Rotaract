import React, { Component } from 'react'

export default class Cube extends Component {
    state = {
        classVal: "cube"
    }
    render() {
        return (                
            <div className="container d-flex justify-content-center">
                <div class="scene">
                    <div class={this.state.classVal}>
                        <div class="cube__face cube__face--front">front</div>
                        <div class="cube__face cube__face--back">back</div>
                        <div class="cube__face cube__face--right">right</div>
                        <div class="cube__face cube__face--left">left</div>
                        <div class="cube__face cube__face--top">top</div>
                        <div class="cube__face cube__face--bottom">bottom</div>
                    </div>
                </div>
            </div>
        )
    }
}
