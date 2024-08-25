export class Channel {
    // Constructor de la clase
    constructor(channelId, title, description, thumbnail) {
      this.channelId = channelId; 
      this.title = title;    
      this.thumbnail = thumbnail
      this.description = description
    }

    static EmptyClass(){
        return new Channel(undefined, undefined, undefined, undefined)
    }

}