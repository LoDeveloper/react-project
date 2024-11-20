import muse from "../assets/museAlbum.jpg";
import "../albums.css";

function Albums() {
    return (
        <div className="albums">
            <img src={muse} alt="item one" className="cover-img" />
            <h2 className="album-title" >Album name</h2>
            <p className="album-desc">This is a music album</p>
        </div>
    )
}

export default Albums;