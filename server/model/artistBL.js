const Artist  = require('./artistSchema')

const getAllArtists = () => {
    return new Promise((resolve) => {
        Artist.find({}, (err, artistData) => {
            if (err) {
                console.log(err);
            }
            else {
                resolve(artistData);
            }
        });
    })
}

const getArtist = (artistId) => {
    return new Promise((resolve, reject) => {
        Artist.findById(artistId, (err, artistData) => {
            if (err) {
                reject(err);
            }
            else {
                resolve(artistData);
            }
        })
    })
}

const addArtist = (newArtist) => {
    return new Promise((resolve) => {
        let newartist = new Artist({
            name: newArtist.name
        })

        newartist.save((err, room) => {
            if (err) {
                console.log(err);
            }
            else{

                resolve({massage : "Artist created!", Id : room._id})

            }
        })
    })

}

const updateArtist = (artistId, UpdatedData) => {
    return new Promise((resolve, reject) => {
        Artist.findByIdAndUpdate(artistId,
            {  name: UpdatedData.name}, (err) => {
                if (err) {
                    reject(err)
                }
                else {
                    resolve("Updated artist!")
                }
            })
    })
}


const deleteArtist = (id) => {
    return new Promise((resolve, reject) => {
        Artist.findByIdAndDelete(id, (err) => {
            if (err) {
                reject(err)
            }
            else {
                resolve({massage : "Artist deleted", Id : id})
            }
        })
    })

}

module.exports = {getAllArtists, getArtist, addArtist, updateArtist, deleteArtist}

