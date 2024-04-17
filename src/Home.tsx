import {IconProp} from "@fortawesome/fontawesome-svg-core";
import {faAddressBook, faChess, faPalette, faPhone} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import dalle10 from 'assets/dalle10.webp';
import dalle11 from 'assets/dalle11.webp';
import dalle12 from 'assets/dalle12.webp';
import dalle15 from 'assets/dalle15.webp';
import dalle17 from 'assets/dalle17.webp';
import dalle5 from 'assets/dalle5.webp';
import dalle6 from 'assets/dalle6.webp';
import dalle8 from 'assets/dalle8.webp';
import dalle9 from 'assets/dalle9.webp';
import Parallax, {eParallaxStyle} from "src/components/Parallax";


interface iHomeCardBody {
    title: string;
    description: string;
    link: string;
    image: string;
    icon: IconProp;
}

const HomeCards: iHomeCardBody[] = [
    {
        title: 'Profession',
        description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
        link: '#',
        image: dalle5,
        icon: faPalette
    },
    {
        title: 'Mate',
        icon: faAddressBook,
        description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
        link: '#',
        image: dalle6
    },
    {
        title: 'explore',
        icon: faChess,
        description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
        link: '#',
        image: dalle8
    },
    {
        title: 'stuff',
        icon: faPhone,
        description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
        link: '#',
        image: dalle9

    }
]

export const HOME = 'home/'

export default function Home() {

    const allHomeCards = <div className={'row'} style={{
        margin: '40px'
    }}>
        {HomeCards.map(info => <div className={'col-xs-12 col-sm-6 col-md-3'}>
            <div className="card">
                <img src={info.image} className="card-img-top" alt={info.title + ' image'}/>
                <div className="card-body text-center" style={{
                    backgroundColor: 'rgba(28,116,140,0.27)',
                    color: 'black'
                }}>
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
                                icon={info.icon}
                                size={'4x'}/>
                        </div>
                    </div>
                    <h2 className="card-title">{info.title}</h2>
                    <p className="card-text">
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.</p>
                    <a href="#" className="btn btn-success">Go somewhere</a>
                </div>
            </div>
        </div>)}
    </div>

    return <>
        <Parallax height={'75vh'} backgroundImage={dalle10}>
            <div className="container">
                <div className={'row'}>
                    <div className={'col-md-6'}>
                        <div className={'card'} style={{
                            backgroundColor: 'rgba(51,169,204,0.85)',
                            color: 'whitesmoke'
                        }}>
                            <div className="card-body">
                                <h1>
                                    Welcome to Profession Mate<br/>
                                    <small><u>#1 Job Searching Agency</u></small>
                                </h1>
                                <p style={{
                                    fontSize: '1.5em'
                                }}>
                                    <b>We Handle The Entire Job Searching and Applying Process For You!</b>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Parallax>
        <Parallax height={'75vh'} backgroundImage={dalle17} parallaxStyle={eParallaxStyle.SCROLL}>
            {allHomeCards}
        </Parallax>
        <Parallax backgroundImage={dalle11}>
            <div className="container">
                <div className={'row'}>
                    <div className={'col-md-12'}>
                        <div className={'card text-center'} style={{
                            backgroundColor: 'rgba(0,0,0,.8)',
                            color: 'whitesmoke'
                        }}>
                            <div className="card-body">
                                <h1>
                                    Welcome to Profession Mate
                                </h1>
                                <p>
                                    We Handle The Entire Job Searching and Applying Process For You!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Parallax>
        <Parallax backgroundImage={dalle15} parallaxStyle={eParallaxStyle.SCROLL}>
            <div className="container">
                <div className={'row'}>
                    <div className={'col-md-6'}>
                        <div className={'card'} style={{
                            backgroundColor: 'rgba(51,169,204,0.27)',
                            color: 'whitesmoke'
                        }}>
                            <div className="card-body">
                                <h1>
                                    Welcome to Profession Mate
                                </h1>
                                <p>
                                    We Handle The Entire Job Searching and Applying Process For You!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Parallax>

        <Parallax backgroundImage={dalle12}>
            <div className="container">
                <div className={'row'}>
                    <div className={'col-md-6'}>
                        <div className={'card'} style={{
                            backgroundColor: 'rgba(51,169,204,0.27)',
                            color: 'whitesmoke'
                        }}>
                            <div className="card-body">
                                <h1>
                                    Welcome to Profession Mate
                                </h1>
                                <p>
                                    We Handle The Entire Job Searching and Applying Process For You!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Parallax>
    </>
}