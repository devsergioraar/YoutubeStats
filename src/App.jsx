import { useState } from "react";
import "./App.css";
import { SearchChannel, GetChannelDetail, formatDate } from "./utils/Search.js";
import {CustomModal} from './components/CustomModal.jsx';
import { ChannelCard } from "./components/ChannelCard.jsx";
import { ChannelData } from "./components/ChannelData.jsx";
import { ChannelSearch } from "./components/ChannelSearch.jsx";
function App() {
  
  const [chID, setChID] = useState("");
  const [chPicture, setChPicture] = useState(
    "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"
  );
  const [chTitle, setChTitle] = useState("Google");
  const [chDescription, setChDescription] = useState("Loren Ipsum");

  const [nameAccount, setNameAccount] = useState("");
  const [customURL, setCustomURL] = useState("");
  const [subs, setSubs] = useState("");
  const [uploads, setUploads] = useState("");

  const [views, setViews] = useState("");
  const [country, setCountry] = useState("");
  const [publishedAt, setPublishedAt] = useState("");

  const [showModal, setShowModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleError = (error) => {
    setErrorMessage(error);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setErrorMessage("");
  };

  const _SearchChannel = async (channelSearch) => {
    try {
      //throw new Error('basura')
      const objeto = await SearchChannel(channelSearch);

      setChID(objeto.channelId);

      setChTitle(objeto.title);
      setChDescription(objeto.description);

      const details = await GetChannelDetail(objeto.channelId);

      setNameAccount(details.nameAccount);
      setCustomURL(details.customUrl);
      setSubs(Number(details.subs).toLocaleString("en-US"));
      setUploads(Number(details.uploads).toLocaleString("en-US"));
      setViews(Number(details.views).toLocaleString("en-US"));
      setCountry(details.country);
      setPublishedAt(formatDate(details.publishedAt));
      setChPicture(details.thumbnail);
    } catch (error) {
       
      console.log(error)
      handleError(error.message);
    }
  };

  //
  return (
    <>
    <CustomModal
        title="Error"
        message={errorMessage}
        show={showModal}
        onClose={handleCloseModal}
      />
      <div className="container" style={{marginBottom:'100px' , marginTop:'70px'}}>
        <div className="row">
          <div className="col-12 d-flex justify-content-center align-items-center flex-column">
            <h1 className="text-center">
              Find data from your favorite Youtube Channel Now!
            </h1>
             <ChannelSearch
              _SearchChannel = {_SearchChannel}
             />

              
          </div>
        </div>
        {
          chID && <div className="row">
          <div className="col-md-4 d-flex justify-content-center align-items-center flex-column">
            <ChannelCard
              chID = {chID }
              chPicture = {chPicture}
              chDescription ={chDescription}
              chTitle = {chTitle}
            ></ChannelCard>
          </div>
          <div className="col-md-8">
            <ChannelData       
              nameAccount = {nameAccount}
              customURL = {customURL}
              uploads = {uploads}
              subs = {subs}
              views = {views}
              country = {country}
              publishedAt = {publishedAt}
            ></ChannelData>
            
             
          </div>
        </div>

        }

      </div>
      <footer
        className="bg-dark text-white text-center text-lg-start fixed-bottom"
        style={{ marginTop: "100px" }}
      >
        <div
          className="text-center p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
           
          <a className="text-white" href="https://www.linkedin.com/in/devsergioraar/">
          LinkedIn: Sergio Ramírez Artavia | 2024
          </a>
        </div>
      </footer>
      
    </>
  );
}

export default App;
