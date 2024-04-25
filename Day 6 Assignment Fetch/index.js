

const div = document.getElementsByClassName('container')

const fetchComment = async ()=>{
    const oppinions = await fetch("https://jsonplaceholder.typicode.com/comments")

    const comment = await oppinions.json()

    comment.forEach((data)=>{
        div.innerHTML += `
        <div class="card">
        <h1>${data.name}</h1>
        <h4>${data.email}</h4>
        <p>${data.body}</p>
        <button class="btn">Read Comment</button>
        </div>
        `
    })
}
fetchComment()


