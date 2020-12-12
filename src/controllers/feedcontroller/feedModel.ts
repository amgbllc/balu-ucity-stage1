export class FeedModel {

    public SignedUrl :string;

    constructor(data:any) {
     // this.SignedUrl = data;
      
    }

    setSignedUrl=(data:any) =>{

        this.SignedUrl =data;
    }

    getSignedUrl(){
      return  this.SignedUrl;
    }
  }

  module.exports.feedModels=FeedModel;