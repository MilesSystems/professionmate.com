import dalle from "assets/dalle16.webp";
import Parallax, {eParallaxStyle} from "src/components/Parallax";

export const CONTACT = 'contact';

export default function Contact() {
    return <Parallax height={'97vh'} backgroundImage={dalle} parallaxStyle={eParallaxStyle.SCROLL}>
            <div className="container">
                <div className={'row'}>
                    <div className={'card m5'}>
                        <div className={'card-header'}>
                            Contact Us
                        </div>
                        <div className={'card-body'}>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="exampleFormControlInput1"
                                       placeholder="name@example.com"/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlTextarea1" className="form-label">Example
                                    textarea</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows={3}></textarea>
                            </div>
                        </div>
                        <div className={'card-footer'}>
                            <button type="button" className="btn btn-info">Info</button>
                            <button type="button" className="btn btn-secondary">Secondary</button>
                        </div>
                    </div>
                </div>
            </div>
        </Parallax>
}

