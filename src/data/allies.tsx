import {IconDefinition} from "@fortawesome/free-regular-svg-icons";
import {faHeart} from "@fortawesome/free-solid-svg-icons";
import CSL from "src/assets/images/allies/staffing_csl.webp"
import Culinaire from "src/assets/images/allies/staffing_culinaire.webp"
import Grassroots from "src/assets/images/allies/staffing_grassroots.webp"
import ModernCulture from "src/assets/images/allies/staffing_guidehouse.jpeg"
import NCW from "src/assets/images/allies/staffing_ncw.jpeg"
import PremierStaffing from "src/assets/images/allies/staffing_premier_staffing_inc.jpeg"
import Proclinical from "src/assets/images/allies/staffing_proclinical.webp"
import SalesFit from "src/assets/images/allies/staffing_sales_fit.webp"
import TQL from "src/assets/images/allies/staffing_tql.webp"


interface iAlly {
    name: string,
    image: any,
    icon: IconDefinition;
}


const Allies: iAlly[] = [
    {
        name: 'CSL',
        image: CSL,
        icon: faHeart
    }, {
        name: 'Culinaire',
        image: Culinaire,
        icon: faHeart
    }, {
        name: 'Grassroots',
        image: Grassroots,
        icon: faHeart
    }, {
        name: 'ModernCulture',
        image: ModernCulture,
        icon: faHeart
    }, {
        name: 'NCW',
        image: NCW,
        icon: faHeart
    }, {
        name: 'Premier Staffing',
        image: PremierStaffing,
        icon: faHeart
    }, {
        name: 'Proclinical',
        image: Proclinical,
        icon: faHeart
    }, {
        name: 'Sales Fit',
        image: SalesFit,
        icon: faHeart
    }, {
        name: 'TQL',
        image: TQL,
        icon: faHeart
    },
]


export default Allies