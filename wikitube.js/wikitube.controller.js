'use strict'

function onInit() {
    fetchWikiData('Elden Ring')
        .then(wikidata => renderWiki(wikidata))

    fetchYoutubeData('Elden Ring')
        .then(youtubeData => renderVideos(youtubeData))
}

function onSearch(ev) {
    ev.preventDefault()

    const elSearchInput = document.querySelector('.search-bar')

    fetchWikiData(elSearchInput.value)
        .then(wikidata => renderWiki(wikidata))

    fetchYoutubeData(elSearchInput.value)
        .then(youtubeData => renderVideos(youtubeData))
}

function renderWiki(wikidata) {
    const elWikipedia = document.querySelector('.wiki-section')

    const strHTML = `
        <h2 class="wiki-Header-1">${wikidata[0].title}</h2>
        <p class="wiki-snippet-1">${wikidata[0].snippet}</p>
        <h2 class="wiki-Header-2">${wikidata[1].title}</h2>
        <p class="wiki-snippet-2">${wikidata[1].snippet}</p>`

    elWikipedia.innerHTML = strHTML
}

let suggestions = []

function renderVideos(youtubeData) {
    // ---------------------------------
    // OPTION 1: STRAIGHT TO SRC:
    const elPlayer = document.querySelector('.youtube-player')
    const elSuggestedVideos = document.querySelector('.searchResSuggestions')

    elPlayer.src = `https://www.youtube.com/embed/${youtubeData[0].id}`

    suggestions = youtubeData.slice(0)

    const strHTML = suggestions.map((video, idx) => `
        <li class="suggestion"
            onclick="onSelectedVideo(${idx})">
            <img src="${video.imgUrl}" 
            alt="${video.title}">
            <p>${video.title}</p>

        </li>`).join('')

    elSuggestedVideos.innerHTML = strHTML
    return suggestions
    
}

function onSelectedVideo(VideoIdx) {
    // console.log(elSuggestedVideoIdx);
    const selectedVideo = suggestions[VideoIdx]
    const elPlayer = document.querySelector('.youtube-player')
        
    elPlayer.src = `https://www.youtube.com/embed/${selectedVideo.id}`
   
}







// const videos = res.data.items.map(video => ({
//                 id: video.id.videoId,
//                 title: video.snippet.title,
//                 description: video.snippet.description,
//                 imgUrl: video.snippet.thumbnails.medium.url
//             }))



// AIzaSyCMmXhfx51eClQ2acCXpdn3fu6JA6F5TH8

// array.map((element, index, array) => {
//     ...
// })
// element= curr obj,
// index= curr position, 0,1,2...
// arr= entire complete array


// for (let i = 1; i < youtubeData.length; i++) {
    //     let strHTML += `
    //         <li 
    //             class="suggestion-${i}" 
    //             onclick="onSelectedVideo(this)">
    //             <img src="" alt="">
    //             <p>test</p>
    //         </li>
    //     `
    
    // }
    // IF NEEDED:
    // elPlayer.width =
    // elPlayer.height =
    // ---------------------------------
    

    // OPTION 2: INNER.HTML: PROBLEMATIC,
    // RELOADS ENTIRE CLASS ON SEARCH????
    // --------------------------------------------
    // const elPlayerContainer = document.querySelector('.main-player-container')
    // const strHTML = `
    //     <iframe
    //         class="youtube-player"
    //         width="560"
    //         height="315"
    //         src="https://www.youtube.com/embed/${youtubeData[0].id}"
    //         allowfullscreen>
    //     </iframe>`
    
    // elPlayerContainer.innerHTML = strHTML
    // console.log(elPlayerContainer)
    // ------------------------------------------