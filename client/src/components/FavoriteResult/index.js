import React  ,{ Component } from "react";
import InstagramEmbed from 'react-instagram-embed';
class FavoriteResult extends Component {
  constructor(props) {

    super(props)
  
  }
  
  render() {
  return (
   
   <div>
      <br></br>
      <InstagramEmbed
      url={this.props.favorite.url}
      maxWidth={400}
      hideCaption={true}
      containerTagName='div'
      protocol=''
      injectScript
      onLoading={() => { }}
      onSuccess={() => { }}
      onAfterRender={() => { }}
      onFailure={() => { }}
    />

  <br></br>
</div>
  ) 
}
}
  

export default FavoriteResult;