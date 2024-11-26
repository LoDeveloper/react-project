import Albums from "../Components/Albums.jsx";
import muse from "../assets/museAlbum.jpg"; 
import aerosmith from "../assets/aerosmithAlbum.jpg";
import coldplay from "../assets/coldplayAlbum.jpg";
import metallica from "../assets/metallicaAlbum.jpg";
import placebo from "../assets/placeboAlbum.jpg";
import foofighters from "../assets/foofightersAlbum.jpg";

function Store() {
    return <div>
    <Albums
        title="Muse"
        albumName="Origin of Symmetry"
        price="€36.00"
        imageSrc={muse}
    />
    <Albums
        title="Aerosmith"
        albumName="Permanent Vacation"
        price="€32.00"
        imageSrc={aerosmith}
    />
    <Albums
        title="Coldplay"
        albumName="Parachutes"
        price="€28.00"
        imageSrc={coldplay}
    />
    <Albums
        title="Metallica"
        albumName="Master of Puppets"
        price="€40.00"
        imageSrc={metallica}
    />
    <Albums
        title="Placebo"
        albumName="Without You I'm Nothing"
        price="€36.00"
        imageSrc={placebo}
    />
    <Albums
        title="Foo Fighters"
        albumName="One by one"
        price="€30.00"
        imageSrc={foofighters}
    />
</div>
}

export default Store;