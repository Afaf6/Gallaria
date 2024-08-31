import { Link } from "react-router-dom";
import "./gallaria.css";
import starrynight from "../../public/Images/starry-night/thumbnail.jpg";
import girlwithpearl from "../../public/Images/girl-with-pearl-earring/thumbnail.jpg";
import Guernica from "../../public/Images/guernica/thumbnail.jpg";
import magdalene from "../../public/Images/penitent-magdalene/thumbnail.jpg"
import storm from "../../public/Images/the-storm-on-the-sea-of-galilee/thumbnail.jpg";
import greatwave from "../../public/Images/the-great-wave-off-kanagawa/thumbnail.jpg";
import vangogh from "../../public/Images/van-gogh-self-portrait/thumbnail.jpg";
import sleepinggypsy from "../../public/Images/the-sleeping-gypsy/thumbnail.jpg";
import lady from "../../public/Images/lady-with-an-ermine/thumbnail.jpg";
import nightcofe from "../../public/Images/the-night-cafe/thumbnail.jpg";
import basketofapple from "../../public/Images/the-basket-of-apples/thumbnail.jpg";
import theboy from "../../public/Images/the-boy-in-the-red-vest/thumbnail.jpg";
import Arnolfini from "../../public/Images/arnolfini-portrait/thumbnail.jpg";
import monalisa from "../../public/Images/mona-lisa/thumbnail.jpg";
import swing from "../../public/Images/the-swing/thumbnail.jpg";

function Galleria() {
    const arrayOfPhotos =[
        {id:1, images: starrynight, namephoto:"Starry Night", nameartist:"Vincent Van Gogh"},
        {id:2, images: girlwithpearl, namephoto:"Girl with a Pearl Earring", nameartist:"Johannes Vermeer",},
        {id:3, images: Guernica, namephoto:"Guernica", nameartist:"Pablo Picasso",},
        {id:4, images: magdalene, namephoto:"Penitent Magdalene", nameartist:"Artemisia Gentileschi",},
        {id:5, images: storm, namephoto:"The Storm on the Sea of Galilee", nameartist:"Rembrandt",},
        {id:6, images: greatwave, namephoto:"The Great Wave off Kanagawa", nameartist:"Hokusai",},
        {id:7, images:vangogh, namephoto:"Van Gogh Self-portrait", nameartist:"Vincent Van Gogh",},
        {id:8, images:sleepinggypsy, namephoto:"The Sleeping Gypsy", nameartist:"Henri Rousseau",},
        {id:9, images:lady, namephoto:"Lady with an Ermine", nameartist:"Leonardo da Vinci",},
        {id:10, images:nightcofe, namephoto:"The Night Café", nameartist:"Vincent Van Gogh",},
        {id:11, images:basketofapple, namephoto:"The Basket of Apples", nameartist:"Paul Cézanne",},
        {id:12, images:theboy, namephoto:"The Boy in the Red Vest", nameartist:"Paul Cézanne",},
        {id:13, images:Arnolfini, namephoto:"Arnolfini Portrait", nameartist:"Jan van Eyck",},
        {id:14, images:monalisa, namephoto:"Mona Lisa", nameartist:"Leonardo da Vinci",},
        {id:15, images:swing, namephoto:"The Swing", nameartist:"Jean-Honoré Fragonard",},
        
    ]


    return(
        <>
        <div className="gallarystyle">
            {arrayOfPhotos.map((photo) => {
                return ( 
                    <Link key= {photo.id} to = {`/gallaria/${photo.id}/${photo.namephoto}`}>
                       <div className="photostyle">
                        <img src={photo.images} alt={photo.namephoto}/>
                       <div className="text">
                        <h2> {photo.namephoto} </h2>
                        <h5> {photo.nameartist} </h5>
                       </div>
                    </div>
                </Link>
                )
                
            })};
        </div>
        </>
    )
}
export default Galleria;