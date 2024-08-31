import { useParams } from "react-router-dom";
import "./Photos.css";

import herostarry from "../../public/Images/starry-night/hero-large.jpg";
import girlwithpearl from "../../public/Images/girl-with-pearl-earring/hero-large.jpg";
import Guernica from "../../public/Images/guernica/hero-large.jpg";
import magdalene from "../../public/Images/penitent-magdalene/hero-large.jpg"
import storm from "../../public/Images/the-storm-on-the-sea-of-galilee/hero-large.jpg";
import greatwave from "../../public/Images/the-great-wave-off-kanagawa/hero-large.jpg";
import vangogh from "../../public/Images/van-gogh-self-portrait/hero-large.jpg";
import sleepinggypsy from "../../public/Images/the-sleeping-gypsy/hero-large.jpg";
import lady from "../../public/Images/lady-with-an-ermine/hero-large.jpg";
import nightcofe from "../../public/Images/the-night-cafe/hero-large.jpg";
import basketofapple from "../../public/Images/the-basket-of-apples/hero-large.jpg";
import theboy from "../../public/Images/the-boy-in-the-red-vest/hero-large.jpg";
import Arnolfini from "../../public/Images/arnolfini-portrait/hero-large.jpg";
import monalisa from "../../public/Images/mona-lisa/hero-large.jpg";
import swing from "../../public/Images/the-swing/hero-large.jpg";

import van from "../../public/Images/starry-night/artist.jpg";
import Johannes from "../../public/Images/girl-with-pearl-earring/artist.jpg";
import Pablo from "../../public/Images/guernica/artist.jpg";
import Artemisia from "../../public/Images/penitent-magdalene/artist.jpg"
import Rembrandt from "../../public/Images/the-storm-on-the-sea-of-galilee/artist.jpg";
import Hokusai from "../../public/Images/the-great-wave-off-kanagawa/artist.jpg";
import Vincent from "../../public/Images/van-gogh-self-portrait/artist.jpg";
import Henri from "../../public/Images/the-sleeping-gypsy/artist.jpg";
import Leonardo from "../../public/Images/lady-with-an-ermine/artist.jpg";
import Paul from "../../public/Images/the-basket-of-apples/artist.jpg";
import Jan from "../../public/Images/arnolfini-portrait/artist.jpg";
import JeanHonoré from "../../public/Images/the-swing/artist.jpg";






function Photos () {
    const arrayOfdetails = [
        {id:1, year:1889, description:  "Although The Starry Night was painted during the day in Van Gogh's ground-floor studio, it would be inaccurate to state that the picture was painted from memory. The view has been identified as the one from his bedroom window, facing east, a view which Van Gogh painted variations of no fewer than twenty-one times, including The Starry Night. \"Through the iron-barred window,\" he wrote to his brother, Theo, around 23 May 1889, \"I can see an enclosed square of wheat ... above which, in the morning, I watch the sun rise in all its glory.\"",
            namephoto:"Starry Night", nameartist:"Vincent Van Gogh",
            artistphoto: van , painting: herostarry,},
        {id:2, year:1665, description:"The painting is a tronie, the Dutch 17th-century description of a 'head' that was not meant to be a portrait. It depicts a European girl wearing an exotic dress, an oriental turban, and what was thought to be a very large pearl as an earring. In 2014, Dutch astrophysicist Vincent Icke raised doubts about the material of the earring and argued that it looks more like polished tin than pearl on the grounds of the specular reflection, the pear shape and the large size of the earring.",
            namephoto:"Girl with a Pearl Earring", nameartist:"Johannes Vermeer",
            artistphoto: Johannes, painting:girlwithpearl,},
        {id:3, year:1937, description:"The scene occurs within a room where, on the left, a wide-eyed bull stands over a grieving woman holding a dead child in her arms. In the center of the room a horse falls in agony with a large gaping hole in its side, as if it had just been run through by a spear or javelin. The horse appears to be wearing chain mail armor, decorated with vertical tally marks arranged in rows. A dead and dismembered soldier lies under the horse. The hand of his severed right arm grasps a shattered sword, from which a flower grows.",
            namephoto:"Guernica", nameartist:"Pablo Picasso",
            artistphoto: Pablo, painting:Guernica,},
        {id:4, year:1625, description:"Penitent Magdalene is a painting by the Italian artist Artemisia Gentileschi. It hangs in Seville Cathedral. It has probably been in the cathedral since the late 17th century. The painting's first home was the collection of Fernando Enriquez Afan de Ribera, from 1626 to 1637. She returned to the subject later in the 1620s in Mary Magdalene as Melancholy.",
             namephoto:"Penitent Magdalene", nameartist:"Artemisia Gentileschi",
             artistphoto: Artemisia, painting:magdalene,},
        {id:5, year:1633, description:"The painting, in vertical format, shows a close-up view of Christ's disciples struggling frantically against the heavy storm to regain control of their fishing boat. A huge wave beats the bow and rips the sail. One of the disciples is seen vomiting over the side. Another one, looking directly out at the viewer, is a self-portrait of the artist. Only Christ, depicted on the right, remains calm.",
             namephoto:"The Storm on the Sea of Galilee", nameartist:"Rembrandt",
             artistphoto: Rembrandt, painting:storm,},
        {id:6, year:1831, description:"The Great Wave off Kanagawa (Japanese: 神奈川沖浪裏, Hepburn: Kanagawa-oki Nami Ura, lit. \"Under the Wave off Kanagawa\"), also known as The Great Wave or simply The Wave, is a woodblock print by the Japanese ukiyo-e artist Hokusai. It was published sometime between 1829 and 1833 in the late Edo period as the first print in Hokusai's series Thirty-six Views of Mount Fuji. The image depicts an enormous wave threatening three boats off the coast in the Sagami Bay (Kanagawa Prefecture) while Mount Fuji rises in the background.",
             namephoto:"The Great Wave off Kanagawa", nameartist:"Hokusai",
             artistphoto:Hokusai, painting:greatwave,},
        {id:7, year:1889, description: "This self-portrait was one of about 32 produced over a 10-year period, and these were an important part of his work as a painter; he painted himself because he often lacked the money to pay for models. He took the painting with him to Auvers-sur-Oise, near Paris, where he showed it to Dr. Paul Gachet, who thought it was \"absolutely fanatical\". Art historians are divided as to whether this painting or Self-portrait without beard is Van Gogh's final self-portrait. The art historians Ingo F. Walther and Jan Hulsker consider this to be the last.",
             namephoto:"Van Gogh Self-portrait", nameartist:"Vincent Van Gogh",
             artistphoto: Vincent, painting: vangogh,},
        {id:8, year:1897, description: "The Sleeping Gypsy (French: La Bohémienne endormie) is an 1897 oil painting by French Naïve artist Henri Rousseau (1844–1910). It is a fantastical depiction of a lion musing over a sleeping woman on a moonlit night. Rousseau first exhibited the painting at the 13th Salon des Indépendants, and tried unsuccessfully to sell it to the mayor of his hometown, Laval. Instead, it entered the private collection of a Parisian charcoal merchant where it remained until 1924, when it was discovered by the art critic Louis Vauxcelles.",
             namephoto:"The Sleeping Gypsy", nameartist:"Henri Rousseau",
             artistphoto: Henri, painting: sleepinggypsy,},
        {id:9, year:1489, description: "The Lady with an Ermine (Italian: Dama con l'ermellino [ˈdaːma kon lermelˈliːno]; Polish: Dama z gronostajem) is a portrait painting widely attributed to the Italian Renaissance artist Leonardo da Vinci. Dated to c. 1489–1491, the work is painted in oils on a panel of walnut wood. Its subject is Cecilia Gallerani, a mistress of Ludovico Sforza (\"Il Moro\"), Duke of Milan; Leonardo was painter to the Sforza court at the time of its execution. It is one of only four surviving portraits of women painted by Leonardo, the others being Ginevra de' Benci, La Belle Ferronnière and the Mona Lisa",
            namephoto:"Lady with an Ermine", nameartist:"Leonardo da Vinci",
            artistphoto: Leonardo, painting: lady,},
        {id:10, year:1888, description: "The Night Café (French: Le Café de nuit) is an oil painting created by Dutch artist Vincent van Gogh in September 1888 in Arles. Its title is inscribed lower right beneath the signature. The painting is owned by Yale University and is currently held at the Yale University Art Gallery in New Haven, Connecticut. The interior depicted is the Café de la Gare, 30 Place Lamartine, run by Joseph-Michel Ginoux and his wife Marie, who in November 1888 posed for Van Gogh's and Gauguin's Arlésienne; a bit later, Joseph Ginoux evidently posed for both artists, too.",
            namephoto:"The Night Café", nameartist:"Vincent Van Gogh",
            artistphoto: Vincent, painting: nightcofe,},
        {id:11, year:1893, description: "The Basket of Apples (French: Le panier de pommes) is a still life oil painting by French artist Paul Cézanne, which he created c. 1893. The painting is particularly remarkable for its creative composition, which rejected realistic representation in favour of distorting objects to create multiple perspectives. This approach eventually influenced other art movements, including Fauvism and Cubism. It belongs to the Helen Birch Bartlett Memorial Collection of the Art Institute of Chicago.",
            namephoto:"The Basket of Apples", nameartist:"Paul Cézanne",
            artistphoto: Paul, painting: basketofapple,},
        {id:12, year:1889, description: "Cézanne painted four oil portraits of this Italian boy in the red vest, all in different poses, which allowed him to study the relationship between the figure and space. The most famous of the four, and the one commonly referred to by this title, is the one which depicts the boy in a melancholic seated pose with his elbow on a table and his head cradled in his hand. It is currently held in Zürich, Switzerland. The other three portraits, of different poses, are in museums in the US",
            namephoto:"The Boy in the Red Vest", nameartist:"Paul Cézanne",
            artistphoto: Paul, painting: theboy,},
        {id:13, year:1434, description: "It is considered one of the most original and complex paintings in Western art, because of its beauty, complex iconography, geometric orthogonal perspective, and expansion of the picture space with the use of a mirror. According to Ernst Gombrich \"in its own way it was as new and revolutionary as Donatello's or Masaccio's work in Italy. A simple corner of the real world had suddenly been fixed on to a panel as if by magic ... For the first time in history the artist became the perfect eye-witness in the truest sense of the term\".",
            namephoto:"Arnolfini Portrait", nameartist:"Jan van Eyck",
            artistphoto: Jan, painting: Arnolfini,},
        {id:14, year:1503, description: "The Mona Lisa (/ˌmoʊnə ˈliːsə/; italian: La Gioconda [la dʒoˈkonda] or Monna Lisa [ˈmɔnna ˈliːza]) is a half-length portrait painting by Italian artist Leonardo da Vinci. Considered an archetypal masterpiece of the Italian Renaissance, it has been described as \"the best known, the most visited, the most written about, the most sung about, the most parodied work of art in the world\". The painting's novel qualities include the subject's enigmatic expression, the monumentality of the composition, the subtle modelling of forms, and the atmospheric illusionism.",
            namephoto:"Mona Lisa", nameartist:"Leonardo da Vinci",
            artistphoto: Leonardo, painting:monalisa,},
        {id:15, year:1767, description: "The painting depicts an elegant young woman on a swing. A smiling young man, hiding in the bushes on the left, watches her from a vantage point that allows him to see up into her billowing dress, where his arm is pointed with hat in hand. A smiling older man, who is nearly hidden in the shadows on the right, propels the swing with a pair of ropes. The older man appears to be unaware of the young man. As the young lady swings high, she throws her left leg up, allowing her dainty shoe to fly through the air.",
              namephoto:"The Swing", nameartist:"Jean-Honoré Fragonard",
              artistphoto: JeanHonoré, painting:swing,}
    ];
     
    const {id} = useParams();
    console.log(id)
     
    const details = arrayOfdetails.filter(
        (item) => item.id === parseInt(id)
    );

    return (
        <>
        {details.map((detail, index)=> (
            <div key={index} className="content">
                <div className="main">
                   <img src= {detail.painting} alt={detail.namephoto} />
                   <div className="aboutartist">
                    <div className="textstyle">
                        <h2>{detail.namephoto}</h2>
                        <p>{detail.nameartist}</p>
                    </div>
                    <img src= {detail.artistphoto} />
                    </div> 
                </div>
                <div>
                    <h1 className="year">{detail.year}</h1>
                    <p className="description">{detail.description}</p>
                </div>
                
            </div>
            
        ))}
        </>
        
    )
};

export default Photos