import React, { useEffect, useState } from 'react'
import axios from 'axios'

import NewArtist from './newArtist'
import ArtistComp from './ArtistComp'

export default function ProvingAPoint(){
    const [artistsdata, Setartistsdata] = useState()
    const [artists, Setartists] = useState()


    const getAllArtist = async () =>{
	let obj = await axios.get('http://localhost:8000/api/artists')
        let Artists = obj.data
        Setartistsdata(Artists)
	//console.log(2, artistsdata)
        let arr = []
        let name;
        let id;
        for(let i = 0; i < Artists.length; i++){
            name = Artists[i].name
            id = Artists[i]._id
            arr.push(<ArtistComp name={name} id={id} callback={getAllArtist}/>)
        }
        Setartists(arr)
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
