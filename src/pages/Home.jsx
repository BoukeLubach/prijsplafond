
import React, { useEffect, useState } from "react";
import PageHelmet from "../component/common/Helmet";
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp, FiChevronDown, FiChevronRight } from "react-icons/fi";
import Infomodal from "../blocks/modals/Infomodal";
import Header from "../component/header/Header";
import Footer from "../component/footer/Footer";
import Kostentabel from "../component/tables/Kostentabel";

function Home() {

    const [openadvanced, setopenadvanced] = useState(false)

    const [aardgasverbruik, setaardgasverbruik] = useState(1200)
    const [aardgasvariables, setaardgasvariables] = useState({

        energiebelasting: 0.36322,
        ODE: 0.0865,
        basisprijs: 185,                 //euro/Nm3, equivalent van 185 euro/MWh 

    })
    const [elektriciteitsverbruik, setelektriciteitsverbruik] = useState(2400)
    const [elektriciteitvariables, setelektriciteitvariables] = useState({
        energiebelasting: 0.03679,
        ODE: 0.0305,
        basisprijs: 350,
    })


    const [totaalvargas, settotaalvargas] = useState(2.08)
    const [totaalvarelektriciteit, settotaalvarelektriciteit] = useState(0.42)
    // const totaalvargas = useMemo(() => {
    //     return aardgasvariables.energiebelasting + aardgasvariables.ODE + aardgasvariables.basisprijs * Nm3_MWh_conversiefactor
    // }, [aardgasvariables])

    useEffect(() => {
        const Nm3_MWh_conversiefactor = 31.65 / 3600                      //MWh/Nm3
        settotaalvargas(Math.round((aardgasvariables.energiebelasting + aardgasvariables.ODE + aardgasvariables.basisprijs * Nm3_MWh_conversiefactor) * 100) / 100)

    }, [aardgasvariables])



    useEffect(() => {
        settotaalvarelektriciteit(Math.round((elektriciteitvariables.energiebelasting + elektriciteitvariables.ODE + elektriciteitvariables.basisprijs / 1000) * 100) / 100)
    }, [elektriciteitvariables])
    // const totaalvarelektriciteit = useMemo(() => {

    //     return elektriciteitvariables.energiebelasting + elektriciteitvariables.ODE + elektriciteitvariables.basisprijs / 1000
    // }, [elektriciteitvariables])

    return (
        <React.Fragment>

            {/* Start Pagehelmet  */}
            <PageHelmet pageTitle='Berekening' />
            {/* End Pagehelmet  */}

            <Header logo="symbol-dark" headertransparent="header--transparent" colorblack="color--black" logoname="logo.png" />

            {/* Start Breadcrump Area */}
            <div className="rn-page-title-area pt--120 pb--190 bg_image bg_image--default" data-black-overlay="5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="rn-page-title text-center pt--100">
                                <h2 className="title theme-gradient">Energie prijsplafond</h2>
                                {/* <p>Fresh From The Press Discription</p> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Breadcrump Area */}



            {/* Start Page Wrapper */}
            <div className="rn-service-details ptb--120 bg_color--1">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="service-details-inner">
                                <div className="inner">

                                    {/* Start title*/}
                                    <div className="row sercice-details-content align-items-center">
                                        <div className="col-lg-12 col-12 order-2 order-lg-1">
                                            <div className="details mt_md--30 mt_sm--30">
                                                <h2>Berekening</h2>

                                            </div>
                                        </div>
                                    </div>
                                    {/* End title*/}

                                    {/* Start filtersection*/}
                                    <div className="row sercice-details-content align-items-center">
                                        <div className="col-lg-12 col-12 order-2 order-lg-1">
                                            <div className="details mt_md--30 mt_sm--30">
                                                <div className="row">

                                                    <div className="col-md-6 ">
                                                        <h4>Aardgas</h4>
                                                        <div className="col-10 ">

                                                            <label htmlFor="aardgas-verbruik-nm3">
                                                                Jaarlijks verbruik (m<sup>3</sup>/jaar)
                                                            </label>
                                                            <input id="aardgas-verbruik-nm3" type="number" value={aardgasverbruik} name="verbruik" onChange={e => setaardgasverbruik(e.target.value)} />

                                                            <label htmlFor="var-prijs-aardgas">
                                                                Contractprijs aardgas (euro/m3)
                                                            </label>
                                                            <input id="var-prijs-aardgas" type="number" value={totaalvargas} name="varprijsgas" onChange={e => settotaalvargas(e.target.value)} />

                                                            <span className="btn btn-transparant" onClick={() => setopenadvanced(!openadvanced)}>{openadvanced ? <FiChevronDown /> : <FiChevronRight />} Bereken variable prijs</span>

                                                            {openadvanced ?
                                                                <div className="col-md-10 offset-1">

                                                                    <label htmlFor="aardgas-belasting-nm3">
                                                                        <div className="row">
                                                                            Aardgas belasting (euro/m3) <Infomodal
                                                                                title={"Aardgas belasting"}
                                                                                text={"Belasting per m3 op aardgas hangt af van verbruik, voor een zolang verbruiker lager blijft dan 170.000 m3/jaar is de belasting per m3 constant."}
                                                                                link={"https://www.belastingdienst.nl/wps/wcm/connect/bldcontentnl/belastingdienst/zakelijk/overige_belastingen/belastingen_op_milieugrondslag/tarieven_milieubelastingen/tabellen_tarieven_milieubelastingen"}
                                                                            />
                                                                        </div>
                                                                    </label>
                                                                    <input disabled id="aardgas-belasting-nm3" type="number" name="energiebelasting" value={aardgasvariables.energiebelasting} onChange={e => setaardgasvariables({ ...aardgasvariables, [e.target.name]: e.target.value })} />


                                                                    <label htmlFor="aardgas-ode-nm3">
                                                                        <div className="row">
                                                                            Aardgas ODE (euro/m3)
                                                                            <Infomodal
                                                                                title={"Aardgas ODE"}
                                                                                text={"ODE (opslag duurzame energie) per m3 op aardgas hangt af van verbruik, voor een zolang verbruiker lager blijft dan 170.000 m3/jaar is de ODE per m3 constant."}
                                                                                link={"https://www.belastingdienst.nl/wps/wcm/connect/bldcontentnl/belastingdienst/zakelijk/overige_belastingen/belastingen_op_milieugrondslag/tarieven_milieubelastingen/tabellen_tarieven_milieubelastingen"}
                                                                            />
                                                                        </div>

                                                                    </label>

                                                                    <input disabled id="aardgas-ode-nm3" type="number" name="ODE" value={aardgasvariables.ODE} onChange={e => setaardgasvariables({ ...aardgasvariables, [e.target.name]: e.target.value })} />


                                                                    <label htmlFor="aardgas-basisprijs-nm3">
                                                                        <div className="row">
                                                                            Aardgas basisprijs (euro/MWh)
                                                                            <Infomodal
                                                                                title={"Aardgas basisprijs"}
                                                                                text={"Bij een variabel contract wordt aardgas op de spotmarkt gekocht (huidige prijs is de vinden in de bron onderaan) en wordt ingekocht per MWh (1000 kWh). 1 m3 nederlands aardgas staat gelijk aan 0.0088 MWh, \
                                                                                de prijs in MWh moet gedeeld worden door 114 om uit te komen op een prijs per m3"}
                                                                                link={"https://tradingeconomics.com/commodity/eu-natural-gas"}
                                                                            />
                                                                        </div>

                                                                    </label>
                                                                    <input id="aardgas-basisprijs-nm3" type="number" defaultValue={185} name="basisprijs" value={aardgasvariables.basisprijs} onChange={e => setaardgasvariables({ ...aardgasvariables, [e.target.name]: e.target.value })} />


                                                                </div>
                                                                : <> </>}
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <h4>Elektriciteit</h4>
                                                        <div className="col-10">
                                                            <label htmlFor="elektriciteit-verbruik-kWh">
                                                                Jaarlijks verbruik (kWh/jaar)
                                                            </label>
                                                            <input id="elektriciteit-verbruik-kWh" type="number" name="verbruik" value={elektriciteitsverbruik} onChange={e => setelektriciteitsverbruik(e.target.value)} />

                                                            <label htmlFor="var-prijs-elektriciteit">
                                                                Contractprijs elektriciteit (euro/kWh)
                                                            </label>
                                                            <input id="var-prijs-elektriciteit" type="number" value={totaalvarelektriciteit} name="varprijselektriciteit" onChange={e => settotaalvarelektriciteit(e.target.value)} />

                                                            <span className="btn btn-transparant" onClick={() => setopenadvanced(!openadvanced)}>{openadvanced ? <FiChevronDown /> : <FiChevronRight />} Bereken variable prijs</span>

                                                            {openadvanced ?
                                                                <div className="col-md-10 offset-1">
                                                                    <label htmlFor="elektriciteit-belasting-nm3">
                                                                        <div className="row">
                                                                            Elektriciteit belasting (euro/kWh)
                                                                            <Infomodal
                                                                                title={"Elektriciteit belasting"}
                                                                                text={"Belasting per kWh op aardgas hangt af van verbruik, voor een zolang verbruiker lager blijft dan 10.000 kWh/jaar is de belasting per kWh constant."}
                                                                                link={"https://www.belastingdienst.nl/wps/wcm/connect/bldcontentnl/belastingdienst/zakelijk/overige_belastingen/belastingen_op_milieugrondslag/tarieven_milieubelastingen/tabellen_tarieven_milieubelastingen"}
                                                                            />
                                                                        </div>
                                                                    </label>
                                                                    <input disabled id="elektriciteit-belasting-nm3" type="number" name="energiebelasting" value={elektriciteitvariables.energiebelasting} onChange={e => setelektriciteitvariables({ ...elektriciteitvariables, [e.target.name]: e.target.value })} />


                                                                    <label htmlFor="elektriciteit-ode-kWh">
                                                                        <div className="row">
                                                                            ODE belasting (euro/kWh)
                                                                            <Infomodal
                                                                                title={"Elektriciteit belasting"}
                                                                                text={"ODE (opslag duurzame energie) per kWh op aardgas hangt af van verbruik, voor een zolang verbruiker lager blijft dan 10.000 kWh/jaar is de ODE per kWh constant."}
                                                                                link={"https://www.belastingdienst.nl/wps/wcm/connect/bldcontentnl/belastingdienst/zakelijk/overige_belastingen/belastingen_op_milieugrondslag/tarieven_milieubelastingen/tabellen_tarieven_milieubelastingen"}
                                                                            />
                                                                        </div>
                                                                    </label>
                                                                    <input disabled id="elektriciteit-ode-kWh" type="number" name="ODE" value={elektriciteitvariables.ODE} onChange={e => setelektriciteitvariables({ ...elektriciteitvariables, [e.target.name]: e.target.value })} />


                                                                    <label htmlFor="elektriciteit-basisprijs-kWh">
                                                                        <div className="row">
                                                                            Basisprijs elektriciteit (euro/MWh)
                                                                            <Infomodal
                                                                                title={"Elektriciteit basisprijs"}
                                                                                text={"Bij een variabel contract wordt elektriciteit op de spotmarkt gekocht (huidige prijs is de vinden in de bron onderaan) en wordt ingekocht per MWh (1000 kWh)."}
                                                                                link={"https://www.epexspot.com/en/market-data"}
                                                                            />
                                                                        </div>
                                                                    </label>

                                                                    <input id="elektriciteit-basisprijs-kWh" type="number" defaultValue={185} name="basisprijs" value={elektriciteitvariables.basisprijs} onChange={e => setelektriciteitvariables({ ...elektriciteitvariables, [e.target.name]: e.target.value })} />


                                                                </div>
                                                                : <> </>}
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* <select list="shop-choice" name="shop-choice-input" onChange={e => getShoppinglistData(e.target.value)} >
                                                    {uniqueshoplist.map((shop, i) => (
                                                        <option value={shop} key={i}>{shop}</option>
                                                    ))}
                                                </select> */}
                                            </div>
                                        </div>
                                    </div>
                                    {/* Start end filtersection*/}
                                    {/* Start Material List */}
                                    <div className="row my-4"></div>
                                    <div className="row sercice-details-content pb--80 align-items-center">
                                        <div className="col-lg-12">
                                            <div className="details mt_md--30 mt_sm--30">
                                                <div className="row gap-5">
                                                    <div className="col-md-6">
                                                        <h5>Overzicht aardgas</h5>
                                                        <Kostentabel verbruik={aardgasverbruik} varprijs={totaalvargas} type="gas" />
                                                    </div>
                                                    <div className="col-md-6">
                                                        <h5>Overzicht elektriciteit</h5>
                                                        <Kostentabel verbruik={elektriciteitsverbruik} varprijs={totaalvarelektriciteit} type="electriciteit" />
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    {/* End Material List */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Page Wrapper */}

            {/* Start Back To Top */}
            <div className="backto-top">
                <ScrollToTop showUnder={160}>
                    <FiChevronUp />
                </ScrollToTop>
            </div>
            {/* End Back To Top */}

            <Footer />

        </React.Fragment>
    )
}

export default Home

