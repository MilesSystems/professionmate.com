import {IconProp} from "@fortawesome/fontawesome-svg-core";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import dalle from "assets/dalle17.webp";
import Parallax, {eParallaxStyle} from "src/components/Parallax";
import {serviceList} from "src/data/services";

export const SERVICES = 'services/'

export default function Services() {

    return <Parallax height={'100vh'} backgroundImage={dalle} parallaxStyle={eParallaxStyle.FIXED}>
        <div style={{
            overflowX: "scroll",
        }}>
            <div className={'col right-col d-flex flex-nowrap'}>
                {serviceList.map((service, index) => {
                    return <div className={'float-div'}>
                        <div className={'card m-2'} key={index} style={{
                            minWidth: '400px',
                            minHeight: '600px',
                            backgroundColor: 'rgba(0,0,0,0.8)'
                        }}>
                            <Parallax height={'200px'} backgroundImage={service.image} parallaxStyle={eParallaxStyle.FIXED}>
                                <h3 style={{
                                    color: 'white',
                                    textShadow: '2px 2px 4px #000000'
                                }}>{service.title}</h3>
                            </Parallax>
                            <div className={'card-body'}>
                                <div className={'row d-flex justify-content-center'}>
                                    <div style={{
                                        backgroundColor: 'grey', /* Set your desired shade of grey here */
                                        borderRadius: '50%',     /* Makes the div circular */
                                        width: '100px',           /* Set the width as desired */
                                        height: '100px',          /* Set the height as desired */
                                        display: 'flex',
                                        justifyContent: 'center', /* Centers the icon horizontally */
                                        alignItems: 'center',     /* Centers the icon vertically */
                                        marginBottom: '20px'     /* Adjusts the position of the icon */
                                    }}>
                                        <FontAwesomeIcon
                                            icon={service.icon}
                                            size={'4x'}/>
                                    </div>
                                </div>
                                <p style={{
                                    color: 'white',
                                    textShadow: '2px 2px 4px #000000'
                                }}>
                                    {service.description}
                                </p>
                            </div>
                            <div className={'card-footer'}>
                            </div>
                        </div>
                    </div>
                })}
            </div>
        </div>
    </Parallax>
}

