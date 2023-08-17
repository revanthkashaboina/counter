import {Component} from 'react'
import './index.css'

class Counter extends Component{
    state = {count : 0}

    onIncrease = ()=>{
        this.setState((prevState)=>({
            count: prevState.count + 1
        }))
    }

    onDecrease = ()=>{
        this.setState((prevState)=>({
            count: prevState.count -1
        }))
    }

    onReset = ()=>{
        this.setState({count : 0})
    }


    render(){
        let {count} = this.state
        if (count <=0){
            count =0
        }

        return(
            <div className='container'>
                <h1 className='counter'>Count : {count}</h1>
                <div>
                <button className='button' onClick = {this.onIncrease}>Increase</button>
                <button className='button' onClick = {this.onDecrease}>Decrease</button>
                <button className='button' onClick={this.onReset}>RESET</button>
                </div>
            </div>
        )
    }
}

export default Counter