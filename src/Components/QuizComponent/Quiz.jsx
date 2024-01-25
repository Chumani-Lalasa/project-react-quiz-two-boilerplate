import React, { Component } from 'react';
import './Quiz.css'
export default class Quiz extends Component {
    constructor(props){
        super(props)
        // let data = props.data;
        // console.log("From data",data);

        this.state = {
            index : 0
        }
    }
    handleQuit = () => {
        alert("Are you sure you want to quit")
    }
    handlePrevious = () => {
        this.setState(prevState => {
            if(prevState.index-1 >=0){
                return {
                    index : prevState.index-1
                }
            }else{
                return {
                    index:0
                }
            }
            
        })
    }
    handleNext = () => {
        this.setState(prevState => {
            if(prevState.index+1 <= 14){
            return {
                index : prevState.index+1
            }
        }else{
            return{
                index : 14
            }
        }
        })
    }
  render() {
    const {data} = this.props
    return (
        <div className='page-container'>
            <div className='container'>
            <div className='top-section'>
                <div className='page-section'>
                    <p className='page'>{this.state.index+1} of 15</p>
                </div>
                <div className='Question-section'>
                    <div className='Question-heading'><h1>Question</h1></div>
                    <div><p className='Question'>{data[this.state.index].question}</p></div>
                </div>
            </div>
            <div className='bottom-section'>
                <div className='option-section'>
                    <div className="section">
                    <div className='option-button'><input type="button" value={data[this.state.index].optionA}/></div>
                    <div className='option-button'><input type="button" value={data[this.state.index].optionB}/></div>
                    </div>
                  <div className='section'>
                  <div className='option-button'><input type="button" value={data[this.state.index].optionC}/></div>
                    <div className='option-button'><input type="button" value={data[this.state.index].optionD}/></div>
                  </div>
                </div>
                <div className='button-section'>
                    <div className='button'><button className='previous-btn' onClick={this.handlePrevious}>Previous</button></div>
                    <div className='button'><button className='next-btn' onClick={this.handleNext}>Next</button></div>
                    <div className='button'><button className='quit-btn' onClick={this.handleQuit}>Quit</button></div>
                </div>
            </div>
      </div>
        </div>
      
    );
  }
}
