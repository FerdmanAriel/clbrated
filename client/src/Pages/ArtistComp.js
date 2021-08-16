import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function ArtistComp(props){

    const deleteArtist = async () =>{
        console.log("hi");
        console.log(1, props.id);
        await axios.delete(`http://192.168.1.11:8000/api/artists/${props.id}`)
        props.callback()
    }

    return(
        <div>
            {props.name}
            <input type="button" onClick={deleteArtist} value="Delete"/>
        </div>
    )
}