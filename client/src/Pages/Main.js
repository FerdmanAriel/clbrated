import React, { useEffect, useState } from 'react'
import axios from 'axios'

import NewArtist from './newArtist'
import ArtistComp from './ArtistComp'

export default function ProvingAPoint(props){
    const [artistsdata, Setartistsdata] = useState()
    const [artists, Setartists] = useState()


    const getAllArtist = async () =>{
	let obj = await axios.get('http://localhost:8000/api/artists')
        let Artists = obj.data
        Setartistsdata(Artists)
        let arr = []
        Artists.forEach(Artist => {
            arr.push(<ArtistComp artist={Artist} callback={getAllArtist} toPage={()=>toArtistPage(Artist)}/>)
        })
        Setartists(arr)
    }

    const toArtistPage = (artist) =>{
        console.log("2", artist);
        props.toArtistsPage(artist)
    }

    useEffect(()=>{
        getAllArtist()
    }, [])

    return(
        <div>
	    testing!!
	    {artists}
            <NewArtist callback={getAllArtist} clblist={artistsdata}/>
        </div>
    )
}
