import dalle from "assets/dalle24.webp";
import Parallax, {eParallaxStyle} from "src/components/Parallax";

export const REVIEWS = 'reviews/'
export default function Reviews() {
    return <Parallax height={'97vh'} backgroundImage={dalle} parallaxStyle={eParallaxStyle.SCROLL}>
        <div className="container">
            <div className={'row'}>
                <div className={'card m5'}>
                    <div className={'card-header'}>
                        Reviews
                    </div>
                    <div className={'card-body'}>

                    </div>
                    <div className={'card-footer'}>
                    </div>
                </div>
            </div>
        </div>
    </Parallax>
}