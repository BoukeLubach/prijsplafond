import React, { Component } from "react";
import {Helmet} from 'react-helmet'

class PageHelmet extends Component{
    render(){
        return(
            <React.Fragment>
                <Helmet>
                    <title>{this.props.pageTitle} || Prijsplafond energie </title>
                    <meta name="description" content="Grasbeemd 42 – Projectoverzicht en materiaalplanner" />
                </Helmet>
            </React.Fragment>
        )
    }
}


export default PageHelmet;
