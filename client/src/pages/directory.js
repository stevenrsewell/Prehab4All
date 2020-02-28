import React from "react";

import InstagramEmbed from 'react-instagram-embed';
//import navbar

function direct() {
    return (
        <div>
            <Navbar />

            <InstagramEmbed
                url='https://instagr.am/p/Zw9o4/'
                maxWidth={320}
                hideCaption={false}
                containerTagName='div'
                protocol=''
                injectScript
                onLoading={() => { }}
                onSuccess={() => { }}
                onAfterRender={() => { }}
                onFailure={() => { }}
            />
            {/* //videos & content */}
            <Footer />

        </div>
    )
}
