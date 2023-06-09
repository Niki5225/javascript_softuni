function songs(arr) {
    let songs = [];

    let type = arr.pop();
    let numberOfSongs = arr.shift();

    class Song {
        constructor(type, name, time) {
            this.type = type;
            this.name = name;
            this.time = time;
        }
    }

    for (let i = 0; i <= numberOfSongs - 1; i++) {
        let [type, name, time] = arr[i].split('_');

        let song = new Song(type, name, time);
        songs.push(song);
    }

    if (type === 'all') {
        for (let song of songs) {
            console.log(song.name);
        }
    } else {
        for (let song of songs) {
            if (song.type === type) {
                console.log(song.name);
            }
        }
    }
}

songs([4,
    'favourite_DownTown_3:14',
    'listenLater_Andalouse_3:24',
    'favourite_In To The Night_3:58',
    'favourite_Live It Up_3:48',
    'listenLater']

);