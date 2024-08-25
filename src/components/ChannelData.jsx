import { formatDate } from "../utils/Search";

export function ChannelData({
  nameAccount,
  customURL,
  uploads,
  subs,
  views,
  country,
  publishedAt,
}) {
  return (
    <>
      {/* Información de canal */}
      <div className="row">
        <div className="col-12">
          <strong>Name:</strong>
          <p>{nameAccount}</p>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <strong>Custom Name:</strong>
          <p>{customURL}</p>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <strong>Uploads:</strong>
          <p>{uploads}</p>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <strong>Subs:</strong>
          <p>{subs}</p>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <strong>Video Views:</strong>
          <p>{views}</p>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <strong>Country:</strong>
          <p>{country}</p>
          <img
            className="float-end"
            width={"40px"}
            src={`http://www.geognos.com/api/en/countries/flag/${country}.png`}
          ></img>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <strong>Started at:</strong>
          <p>{publishedAt}</p>
        </div>
      </div>
    </>
  );
}
