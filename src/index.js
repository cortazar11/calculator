import React from 'react';
import ReactDOM from 'react-dom';

import './styles.css';

class Calculator extends React.Component {

        state={
            numberOne: '',
            numberTwo: '',
            symbol:'',
            result:'',
            dotNumberOne: false,
            dotNumberTwo: false
        }

        onAddValue=(e)=>{
            e.preventDefault()
            const values=['9','8','7','6','5','4','3','2','1','0']
            const input=e.target.textContent

            
            if(values.indexOf(input)!==-1 && this.state.symbol===''){
                
                 this.setState(state=>{
                    const number=state.numberOne+input
                     return {
                          numberOne: number
                        }
                 })
              } else if (values.indexOf(input)!== -1 && this.state.symbol!==''){
                  this.setState(state=>{
                      const number=state.numberTwo+input
                      return {
                          numberTwo: number
                      }
                  })
              } 
            
        }

        onAddDot=(e)=>{
            e.preventDefault()

            const input=e.target.textContent
            
            if(this.state.dotNumberOne===false && this.state.symbol===''){
                this.setState(state=>{
                    const number=state.numberOne+input
                    return {
                        numberOne: number,
                        dotNumberOne: true
                    }
                })
            } else if(this.state.dotNumberTwo===false && this.state.symbol!==''){
                this.setState(state=>{
                    const number=state.numberTwo+input
                    return {
                        numberTwo: number,
                        dotNumberTwo: true
                    }
                })
            }
        }

        onAddOperation=(e)=>{
            e.preventDefault()
            const operations=['/','*','+','-']
            const symbol=e.target.textContent
            if(operations.indexOf(symbol)!==-1){
                this.setState(state=>{
                    return {
                        symbol: symbol
                    }
                })
            }
            
            

            
        }

        onCompute=(e)=>{
            e.preventDefault()
            
            const compute=eval(parseFloat(this.state.numberOne,10)+this.state.symbol+parseFloat(this.state.numberTwo,10))
            this.setState({
                result: compute
            })
        }

        onClear=(e)=>{
            e.preventDefault()
            this.setState({
                numberOne: '',
                symbol: '',
                numberTwo: '',
                result: '',
                dotNumberOne: false,
                dotNumberTwo: false
            })
        }



        render(){
           
            let partial=0;
            let total=0
            
            if(this.state.numberOne!==''){
                partial= this.state.numberOne
                total=this.state.numberOne
            } 
            if(this.state.symbol!==''){
                partial=this.state.symbol
                total+=this.state.symbol
            }
            if(this.state.numberTwo!==''){
                partial=this.state.numberTwo
                total+=this.state.numberTwo
            }

            if(this.state.result!==''){
                partial= this.state.result
                total+='='+this.state.result
            }
           
            
           
            return(<div className="container">
                        <table>
                            <tbody>
                                <tr><td style={{textAlign: 'right',padding:'0.5rem'}}colSpan="4"  >{total}</td></tr>
                                <tr><td style={{textAlign: 'right',padding: '0.5rem'}}colSpan="4" >{partial}</td></tr>
                                <tr>
                                    <td onClick={this.onClear} colSpan="2" style={{textAlign: 'center'}}>AC</td>
                                    <td onClick={this.onAddOperation}>/</td>
                                    <td onClick={this.onAddOperation}>*</td>
                                </tr>
                                
                                <tr>
                                    <td onClick={this.onAddValue}>7</td>
                                    <td onClick={this.onAddValue}>8</td>
                                    <td onClick={this.onAddValue}>9</td>
                                    <td onClick={this.onAddOperation}>-</td>
                                </tr>
                                <tr>
                                    <td onClick={this.onAddValue}>4</td>
                                    <td onClick={this.onAddValue}>5</td>
                                    <td onClick={this.onAddValue}>6</td>
                                    <td onClick={this.onAddOperation}>+</td>
                                </tr>
                                <tr>
                                    <td onClick={this.onAddValue}>1</td>
                                    <td onClick={this.onAddValue}>2</td>
                                    <td onClick={this.onAddValue}>3</td>
                                    <td onClick={this.onCompute} rowSpan="2">=</td>
                                </tr>
                                <tr>
                                    <td onClick={this.onAddValue} colSpan="2" style={{textAlign: 'center'}}>0</td>
                                    <td onClick={this.onAddDot}>.</td>
                                </tr>
                            </tbody>
                        </table>
                        <p>Designed and Coded by Miguel Martinez</p>
                    </div>)
        }
}

ReactDOM.render(
    <Calculator />,
    document.querySelector('#root'))