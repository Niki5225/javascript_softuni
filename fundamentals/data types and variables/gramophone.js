function gramophone(bandName, albumName, songName){
    let result = ((albumName.length * bandName.length) * songName.length / 2) / 2.5
    console.log(`The plate was rotated ${Math.ceil(result)} times.`)
}
gramophone('Rammstein', 'Sehnsucht', 'Engel')