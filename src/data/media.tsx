import Disrupt from "assets/allies/media_disrupt.webp"
import Redx from "assets/allies/media_redx.webp"
import RoyalPost from "assets/allies/media_the_royal_heir_post.webp"


interface iMedia {
    name: string,
    image: any,
}


const Media: iMedia[] = [
    {
        name: 'Disrupt Magazine',
        image: Disrupt
    },
    {
        name: 'Redx',
        image: Redx
    },
    {
        name: 'The Royal Heir Post',
        image: RoyalPost
    },
]


export default Media