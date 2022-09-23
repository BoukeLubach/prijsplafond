import React, { Component } from "react";


class Footer extends Component{
    render(){
        return(
            <React.Fragment>
                <footer className="footer-area">
                    <div className="footer-wrapper">
                        <div className="row align-items-end row--0">
                            <div className="col-lg-12">
                                <div className="footer-right" data-black-overlay="6">
                                    <div className="row">
                                        {/* Start Single Widget  */}
                                        <div className="col-lg-12 col-sm-12 col-12">
                                            <div className="footer-link">
                                                <h4>Quick Link</h4>
                                                <ul className="ft-link">
                                                    <li><a href="https://www.epexspot.com/en/market-data">Elektriciteit spotmarkt</a></li>
                                                    <li><a href="https://tradingeconomics.com/commodity/eu-natural-gas">Gas sportmarkt</a></li>
                                                    <li><a href="https://www.belastingdienst.nl/wps/wcm/connect/bldcontentnl/belastingdienst/zakelijk/overige_belastingen/belastingen_op_milieugrondslag/tarieven_milieubelastingen/tabellen_tarieven_milieubelastingen">Belastingdienst energiebelasting</a></li>
                                                    
                                                </ul>
                                            </div>
                                        </div>
                                        {/* End Single Widget  */}
                                        {/* Start Single Widget  */}
                                        
                                        {/* End Single Widget  */}

                                       
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </React.Fragment>
        )
    }
}
export default Footer;