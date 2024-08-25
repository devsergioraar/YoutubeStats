export function ChannelCard({ chPicture, chTitle, chDescription, chID }) {
  return (
    <div className="card">
      <img
        className="card-img-top img-fluid"
        src={chPicture}
        alt={`Logo of ${chTitle}`}
      ></img>
      <div className="card-body">
        <h5 className="card-title">{chTitle}</h5>
        <p className="card-text">{chDescription}</p>
        <a
          href={`https://www.youtube.com/channel/${chID}`}
          className="btn btn-primary"
        >
          Open channel
        </a>
      </div>
    </div>
  );
}
