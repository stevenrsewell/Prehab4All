import React from "react";
import InstagramEmbed from 'react-instagram-embed';

function FavoriteResult(props) {
  return (
  
    <div>
      <InstagramEmbed
      url={props.favorite.url}
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
  </div>
  );
}

export default FavoriteResult;
