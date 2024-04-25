const section = document.getElementsByClassName('container')

const fetchPhoto = async ()=>{
    const view = await fetch("https://jsonplaceholder.typicode.com/photos")

    const pix = await view.json()

    pix.forEach((each)=>{
        div.innerHTML += `
        <div class="card">
        <h1>${each.albumId}</h1>
        <h4>${each.title}</h4>
        <p>${each.url}</p>
        <p>${each.thumbnailUrl}</p>
        <button class="btn">See Pix</button>
        </div>
        `
    })
}
fetchPhoto()