import {Component} from 'react'
import './index.css'

class DoubleCounter extends Component{
    state = {count1: 0, count2: 0}

    onIncrease1 = ()=>{
        this.setState((prevState)=>({
            count1: prevState.count1 + 1
        }))
    }

    onDecrease1 = ()=>{
        this.setState((prevState)=>({
            count1: prevState.count1 - 1
        }))
    }

    onIncrease2 = ()=>{
        this.setState((prevState)=>({
            count2: prevState.count2 + 1
        }))
    }

    onDecrease2 = ()=>{
        this.setState((prevState)=>({
            count2: prevState.count2 - 1
        }))
    }

    onReset = () =>{
        this.setState({count1:0, count2:0})
    }

    render(){
        const {count1} = this.state
        const {count2} = this.state
        let result = count1+count2
        
        if(result <=0){
            result = 0
        }

        return(
            <>
                <div className = 'container1'>
                    <div className='container2'>
                        <h1 className='Dcounter'>Counter1 : {count1}</h1>
                        <div>
                            <button className='button' onClick = {this.onIncrease1}>Increase1</button>
                            <button className='button' onClick = {this.onDecrease1}>Decrease1</button>
                            <button className='button' onClick={this.onReset}>RESET</button>
                        </div>
                    </div>
                    <div>
                        <h1 className='Dcounter'>Counter2: {count2}</h1>
                        <div>
                            <button className='button' onClick = {this.onIncrease2}>Increase2</button>
                            <button className='button' onClick = {this.onDecrease2}>Decrease2</button>
                            <button className='button' onClick={this.onReset}>RESET</button>
                        </div>
                    </div>
                    <div>
                    <h1 className='total'>SUM : {result}</h1>
                </div>
                </div>
            </>
        )
    }
}

export default DoubleCounter