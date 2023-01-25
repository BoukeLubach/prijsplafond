import React from 'react'
import { useMemo } from 'react'
import Infomodal from '../../blocks/modals/Infomodal'

function Kostentabel(props) {
    const plafondprijsgas = 1.45             //euro/Nm3
    const plafondprijselectriciteit = 0.4    //euro/kWh
    const plafondverbruikgas = 1200
    const plafondverbruikelektriceit = 2900


    const transportgas = 180  //liander, aansluiting 500-4000 Nm3/jaar https://www.liander.nl/uwtarieven/?ref=22743
    const transportelektriciteit = 248  //liander, aansluiting 3x25A https://www.liander.nl/uwtarieven/?ref=22743
    const kortingelektra = -681 //korting op energiebelasting per elektra aansluiting (zie belastingdienst )

    const varkostenzonderplafond = useMemo(() => {
        return props.varprijs * props.verbruik
    }, [props])

    const varkostenmetplafond = useMemo(() => {
        if (props.type === "gas") {
            if (props.varprijs > plafondprijsgas) {
                if (props.verbruik > plafondverbruikgas) {
                    //contractprijs hoger dan plafondprijs en meer verbruik dan plafondverbruik
                    return plafondprijsgas * plafondverbruikgas + props.varprijs * (props.verbruik - plafondverbruikgas)

                } else {
                    //contractprijs hoger dan plafondprijs en minder verbruik dan plafondverbruik
                    return plafondprijsgas * props.verbruik
                }

            } else {
                //contractprijs lager dan plafondprijs, hier maakt het niet uit wat het verbruik is 
                return props.varprijs * props.verbruik
            }
        }

        if (props.type === "electriciteit") {
            if (props.varprijs > plafondprijselectriciteit) {
                if (props.verbruik > plafondverbruikelektriceit) {
                    //contractprijs hoger dan plafondprijs en meer verbruik dan plafondverbruik
                    return plafondprijselectriciteit * plafondverbruikelektriceit + props.varprijs * (props.verbruik - plafondverbruikelektriceit)
                } else {
                    //contractprijs hoger dan plafondprijs en minder verbruik dan plafondverbruik
                    return plafondprijselectriciteit * props.verbruik
                }

            } else {
                //contractprijs lager dan plafondprijs, hier maakt het niet uit wat het verbruik is 
                return props.varprijs * props.verbruik
            }
        } else {
            // zou hier nooit moeten komen
            return "error"
        }
    }, [props])
    return (
        <div className='ml-2'>
            <table className='table table-sm table-borderless'>
                <thead>
                    <tr>
                        <th></th>

                        <th>Zonder plafond</th>
                        <th>Met plafond</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>

                        <td><div className="row">Verbruik ({props.type === "gas" ? " m3/jaar" : "kWh/jaar"}): </div></td>
                        <td>{props.verbruik} </td>
                        <td>{props.verbruik} </td>

                    </tr>

                    <tr>
                        <td>
                            <div className="row">
                                Variable kosten:

                            </div>
                        </td>
                        <td>{Math.round(varkostenzonderplafond)}</td>
                        <td>{Math.round(varkostenmetplafond)}</td>
                    </tr>
                    <tr>
                        <td><div className="row">
                            Vaste kosten:

                            {props.type === "gas" ?
                                <Infomodal
                                    title="Vaste kosten gas"
                                    text="Voor gas wordt rekening gehouden met de transportkosten van de netbeheerder liander (dit is het grootste deel, maar kan per energielerancier/netbeheerder verschillen) voor een aansluiting van 500-4000 Nm3/jaar"
                                    link="https://www.liander.nl/uwtarieven/?ref=22743"
                                /> :
                                <Infomodal
                                    title="Vaste kosten elektriciteit"
                                    text="Voor elektriciteit wordt rekening gehouden met de transportkosten van de netbeheerder liander voor een aansluiting van 3x25A. Daarnaast krijgt elke elektriciteitsaansluiting een korting van 681 euro/aansluiting/jaar"
                                    link="https://www.liander.nl/uwtarieven/?ref=22743"
                                />
                            }
                        </div> </td>
                        <td>{props.type === "gas" ? transportgas : transportelektriciteit + kortingelektra}</td>
                        <td>{props.type === "gas" ? transportgas : transportelektriciteit + kortingelektra}</td>
                    </tr>
                    <tr>
                        <td><div className="row">Totaal: </div></td>
                        <td >{props.type === "gas" ? Math.round(transportgas + varkostenzonderplafond) : Math.round(transportelektriciteit + kortingelektra + varkostenzonderplafond)}</td>
                        <td >{props.type === "gas" ? Math.round(transportgas + varkostenmetplafond) : Math.round(transportelektriciteit + kortingelektra + varkostenmetplafond)}</td>
                    </tr>
                </tbody>
            </table>
        </div >
    )
}

export default Kostentabel