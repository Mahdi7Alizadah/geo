import React, {Component} from "react";
import {Circles} from 'react-loader-spinner';
import Info from "./Info";
import getInfo from "../Service/getinfo";

export default class IpInfon extends Component{

    constructor(props){
        super(props);
        this.state ={
            info: null,
            isLoading: true
        }
    }

    componentDidMount(){
        getInfo().then(data=> {
            this.setState({
                info: data,
                isLoading: false
            })
        });
    }



render(){
    const isLoading = this.state.isLoading;
    return(
<>
{isLoading ? <Circles height="80" width="80" radius="9" color="green" ariaLabel="loading"/> : <Info data={this.state.info} />}
</>
    )}
}