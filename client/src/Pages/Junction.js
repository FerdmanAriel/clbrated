import React, { useEffect, useState } from 'react'

import MainComp from './Main'
import ArtistPage from './ArtistPage'

export default function Junction(props){
    const maincomp = <MainComp toArtistsPage={(artist)=>changeComp('artistPage', artist)} />
    const [CurrComp, Setcomp] = useState(maincomp)

    const changeComp = (target_comp, data=undefined) =>{
        switch (target_comp){
            case 'main':{
                Setcomp(maincomp)
            }
            case 'artistPage':{
                console.log("3", data);
                Setcomp(<ArtistPage artist={data}/>)
            }
        }
    }
    return(
        <div>
            {CurrComp}
        </div>
    )
}