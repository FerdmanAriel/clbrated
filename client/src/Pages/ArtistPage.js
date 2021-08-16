import React, {} from 'react'

export default function ArtistPage(props){
    console.log("here");
    console.log(props.artist);

    return(
        <div>
            <h3>name</h3><br/>
            {props.artist.name}
        </div>
    )
}