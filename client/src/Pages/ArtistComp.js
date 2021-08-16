import React, {} from 'react'
import axios from 'axios'

export default function ArtistComp(props){

    const deleteArtist = async () =>{
        await axios.delete(`http://192.168.1.11:8000/api/artists/${props.id}`)
        props.callback()
    }

    const toArtist = () =>{
        console.log("1", props.artist);
        props.toPage(props.artist)
    }

    return(
        <div>
            <a href="#" onClick={toArtist}>{props.artist.name}</a>
            <input type="button" onClick={deleteArtist} value="Delete"/>
        </div>
    )
}