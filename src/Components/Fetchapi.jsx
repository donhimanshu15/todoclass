import React, { Component } from 'react'
import './tablecomp.css'
import axios from 'axios'

import Tablecomp from './Tablecomp'



export default class Fetchapi extends Component {
    constructor(props) {
        super(props)
        this.state = {
            response: []
        }
    }
    componentDidMount = async () => {
        try {
            let data = await axios.get("https://jsonplaceholder.typicode.com/todos/")
            this.setState({
                response: data.data
            })
            

        }
        catch (error) {
            console.error("error", error);

        }
    }
    render() {
        return (
            <>
       
           <div className="box">

              <div className='table'> <Tablecomp response={this.state.response}/></div>
              </div>
            </>
        )
    }
}
