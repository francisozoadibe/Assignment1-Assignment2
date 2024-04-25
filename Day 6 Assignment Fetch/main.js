const article = document.getElementsByClassName('container')

const fetchAlbum = async ()=>{
    const pictures = await fetch("https://jsonplaceholder.typicode.com/albums")

    const slide = await pictures.json()

    slide.forEach((each)=>{
        div.innerHTML += `
        <div class="card">
        <h1>${each.userId}</h1>
        <h4>${each.Id}</h4>
        <p>${each.title}</p>
        <button class="btn">Slides</button>
        </div>
        `
    })
}
fetchAlbum()