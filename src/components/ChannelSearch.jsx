import { useState } from "react";

export const ChannelSearch= ({_SearchChannel}) => {
const [channelSearch, setChannelSearch] = useState("");

const handleClickSearch = () =>{
    _SearchChannel(channelSearch);
}

  return (
    <div className="form-group">
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          id="channel"
          placeholder="Channel"
          onChange={(e) => setChannelSearch(e.target.value)}
        />
        <button
          onClick={handleClickSearch}
          type="submit"
          className="btn btn-primary"
        >
          Search!
        </button>
      </div>
    </div>
  );
}
