import React from 'react';
import './App.css';
import axios from 'axios';
import { Document, Page } from 'react-pdf';
class Image extends React.Component {

      state ={
        selectedFile: null,
      };

      componentDidMount = async() => {
          const {data} = await axios.get('http://localhost:4444/img/5fd1374ed580d4051fd39355')
          console.log(data)
          this.setState({selectedFile:data})
      }
      

  onFormSubmit = async(e) => {
      e.preventDefault();
      const data = new FormData() 
      data.append('file', this.state.selectedFile)
    axios.post("http://localhost:4444/upload", data, {
        })
        .then(res => { 
        console.log(res.statusText)
    })
    //   console.log(response)
  }

  onChangeHandler= e =>{
    let file = e.target.files[0]
    this.setState({ selectedFile: file})
  }
  onClickHandler = () => {
      const data = new FormData() 
        data.append('file', this.state.selectedFile)
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        };
      axios.post("http://localhost:4444/upload", data, config)
        .then(res => { // then print response status
          console.log('upload success')
        })
        .catch(err => { // then print response status
            console.log('upload fail')
        })
      }
  

  render() {
    console.log(this.state.selectedFile)
      return (
        <div className="container">
        <div className="row">
          <div className="offset-md-3 col-md-6">
             <div className="form-group files">
              <label>Upload Your File </label>
              <input type="file" className="form-control" onChange={this.onChangeHandler}/>
            </div>  
            <button type="button" className="btn btn-success btn-block" onClick={this.onClickHandler}>Upload</button>

        </div>
    </div>
    
    </div>
      )
  }
}

export default Image;