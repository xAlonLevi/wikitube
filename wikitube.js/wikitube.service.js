'use strict'

const YT_KEY = 'AIzaSyCMmXhfx51eClQ2acCXpdn3fu6JA6F5TH8'
const videoURL = `https://www.youtube.com/watch?v=`

let gWikiCache = {}
let gYoutubeCache = {}

function fetchWikiData(searchTerm) {
    if (gWikiCache[searchTerm]) {
        console.log('getting wiki-data from cache');
        // console.log(gWikiCache);
        return Promise.resolve(gWikiCache[searchTerm])
            .catch(err => {
                console.log(err)
                throw 'Opps, something went wrong'
            })
    }

    console.log('getting wiki-data from network');

    return axios.get(`https://en.wikipedia.org/w/api.php?origin=*&action=query&list=search&srsearch=${searchTerm}&format=json`)
        .then(res => gWikiCache[searchTerm] = res.data.query.search)
        .catch(err => {
            console.log(err)
            throw 'Opps, something went wrong'
        })
}

function fetchYoutubeData(searchTerm) {
    if (gYoutubeCache[searchTerm]) {
        console.log('getting youtube-data from cache');

        return Promise.resolve(gYoutubeCache[searchTerm])
            .catch(err => {
                console.log(err)
                throw 'Opps, something went wrong'
            })
    }
    console.log('getting youtube-data from network');

    return axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&videoEmbeddable=true&type=video&key=${YT_KEY}&q=${searchTerm}`)
        .then(res => {

            const videos = res.data.items.map(video => ({
                id: video.id.videoId,
                title: video.snippet.title,
                description: video.snippet.description,
                imgUrl: video.snippet.thumbnails.medium.url
            }))

            gYoutubeCache[searchTerm] = videos

            return videos
        })
}

// function
// https://www.youtube.com/embed/iNn3VFSq62k


//  return Promise.resolve(gWikiCache[searchTerm])




// function getSearchTerm() {
//     return gSearchTerm
// }
// // console.log(gSearchTerm);

// https://en.wikipedia.org/w/api.php?origin=*&action=query&list=search&srsearch=beatles&format=json

// function ask() {
// 	console.log('Hi from ans service using axios...')

//     return axios.get('https://yesno.wtf/api')
//         .then(res => res.data)
//         .catch(err => {
//             console.log(err)
//             throw 'Opps, something went wrong'
//         })
// }
