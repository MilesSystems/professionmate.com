import dalle from "assets/dalle20.webp";
import Parallax, {eParallaxStyle} from "src/components/Parallax";



export const ALLIES = 'allies/'

export default function Allies() {


    return <Parallax height={'97vh'} backgroundImage={dalle}>
        <div className="container">
            <div className={'row'}>
                <div className={'card m5'}>
                    <div className={'card-header'}>
                        Allies
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