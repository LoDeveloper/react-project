import "../albums.css";

function Albums(props) {
    return (
        <div className="albums">
            <img src={props.imageSrc} alt="Album Cover" className="cover-img" />
            <h2 className="album-title">{props.title}</h2>
            <p className="album-desc">{props.albumName}</p>
            <p className="price">{props.price}</p>
        </div>
    );
}

export default Albums;

