import dalle from "assets/dalle23.webp";
import Parallax, {eParallaxStyle} from "src/components/Parallax";


export const PRICING = 'pricing/'
export default function Pricing() {
    return <>
        <Parallax height={'100vh'} backgroundImage={dalle} parallaxStyle={eParallaxStyle.SCROLL}>
            <div className="container">
                <div className={'row'}>
                    <div className={'col-md-6'}>
                        <div className={'card'} style={{
                            backgroundColor: 'rgb(90,61,61,.9)',
                            color: 'whitesmoke'
                        }}>
                            <div className={'card-header'}>Pricing</div>
                            <div className="card-body">
                                <h1>
                                    Welcome to Profession Mate
                                </h1>
                                <p>
                                    Profession Mate offers both Free and Premium services to fit your needs. Schedule a
                                    call with us today to get a quote.
                                </p>
                                <button type="button" className="btn btn-outline-secondary"
                                        onClick={() => window.open('https://calendly.com/professionmate/30min', '_blank')}>
                                    Schedule a call
                                </button>
                                <br/>
                                <br/>
                                <h2>Premium Service</h2>
                                <p>
                                    Our Premium package is Performance-Based, which means that we only get paid based on
                                    your specific needs. The price of services varies depending your job requirements
                                    and each of our services are tailor-made for your individual search.
                                    <br/>
                                    In order to guarantee results in 60 days or less, we only service 25 Clients at a
                                    time. Schedule a call first to see if spots are available.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Parallax>
    </>
}

