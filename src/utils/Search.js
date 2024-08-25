import { Channel } from "./Channel.js";

export const GetChannelDetail = async (query) => {
    const apikey = import.meta.env.VITE_APIKEY;
    const channel = {};
    try {
      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/channels?part=snippet,statistics&id=${query}&key=${apikey}`
      );
  
      if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      
      if (!Array.isArray(data.items) || data.items.length === 0) {
          throw new Error('No se encontraron resultados.');
      }
    
      const ch = data.items.find(x => x.kind === 'youtube#channel');
    
      if (!ch || !ch.snippet) {
          throw new Error('Canal no encontrado o datos incompletos.');
      }
      
      channel.channelId = ch.id;
      channel.nameAccount = ch.snippet.title;
      channel.thumbnail = ch.snippet.thumbnails.high.url;
      channel.description = ch.snippet.description;
      channel.customUrl = ch.snippet.customUrl;
      channel.publishedAt = ch.snippet.publishedAt;
      channel.country = ch.snippet.country;
      channel.views = ch.statistics.viewCount;
      channel.subs= ch.statistics.subscriberCount;
      channel.uploads = ch.statistics.videoCount;
  
      
      return channel;
    } catch (error) {
      console.log('error raro en proceso')
      console.log(error)
      throw error
    }
};

export const SearchChannel = async (query) => {
  const apikey = import.meta.env.VITE_APIKEY; //"";
  const channel = Channel.EmptyClass();
  try {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet,id&q=${query}&key=${apikey}`
    );
 
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
      
    if (!Array.isArray(data.items) || data.items.length === 0) {
        throw new Error('Results not found');
    }
  
    const ch = data.items.find(x => x.id.kind === 'youtube#channel');
  
    if (!ch || !ch.snippet) {
        throw new Error('Channel not found or data incomplete.');
    }
    
    channel.channelId = ch.id.channelId;
    channel.title = ch.snippet.title;
    channel.thumbnail = ch.snippet.thumbnails.high.url;
    channel.description = ch.snippet.description;

     
    return channel;
  } catch (error) {
    
    console.log(error)
    throw error
  }
};

export const formatDate = (dateString) => {
  const date = new Date(dateString);

  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  
  const month = months[date.getMonth()];
  const day = date.getDate();
  const year = date.getFullYear();

  let suffix;
  if (day % 10 === 1 && day !== 11) {
      suffix = "st";
  } else if (day % 10 === 2 && day !== 12) {
      suffix = "nd";
  } else if (day % 10 === 3 && day !== 13) {
      suffix = "rd";
  } else {
      suffix = "th";
  }

  return `${month} ${day}${suffix}, ${year}`;
}


