import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function NewArtist(props){
    const [name, Setname] = useState()

    const addNewArtist = async () =>{
        let newArtist = {
            name : name
        }
        let arr = props.clblist.filter(data => data.name == newArtist.name);
        console.log(newArtist.name[0], newArtist.name[0].toUpperCase())
        if(arr.length > 0 || newArtist.name[0] != newArtist.name[0].toUpperCase()) {
          alert("אתה עובד עליי")
        } else{
          await axios.post('http://192.168.1.11:8000/api/artists', newArtist)
          Setname("")
          props.callback()
        }

    }
    return(
        <div>
            hello from new artist
            <br/>
            <h1>hello Nilllllll the KING</h1>
            <br/>
            name: <input value = {name} onChange={e=>Setname(e.target.value)}/>
            <input type="button" value="Save" onClick={addNewArtist}/>
        </div>
    )
}
