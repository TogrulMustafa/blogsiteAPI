
const rowEl = document.querySelector('#rowEl')
const liEl = document.querySelector('.post-item')



async function getPosts() {
    const url = 'https://jsonplaceholder.typicode.com/posts'
    try {
        const response = await fetch(url)
        const datas = await response.json()


        // map ile hell yolu

        rowEl.innerHTML = datas.map(data =>
            `<li class="post-item">
                <h4 class='post-title'>Announcement</h4>
                <img src="https://source.unsplash.com/random" class="post-img">
                <p class="post-text">${data.body}</p>
            </li>`).join(" ")

        
            /* 
                join metodu arrayin elementlerini arraydan parcalarken default olaraq aralarinda vergullerle ayirir,
                ona gore de datas arrayinin elementlerini parcalarken join(' ') yazmaliyiq ki vergulle deyil bosluq ile ayirsin arrayin elementlerini.
            */



        // for ile hell yolu

        // rowEl.innerHTML = ''
        // for (let index = 0; index < datas.length; index++) {
        //     rowEl.innerHTML += `
        //     <li class="post-item">
        //         <h4 class='post-title'>Announcement</h4>
        //         <img src="https://source.unsplash.com/random" class="post-img">
        //         <p class="post-text">${datas[index].body}</p>
        //     </li>
        //     `
        // }


        // map ile hell ederken 'rowEl.innerHTML =' for ile hell ederken 'rowEl.innerHTML +=' ile eyni menaya gelir
    } 
    catch (error) {
        console.log(`Xetamiz: ${error}`)
    }

}

window.onload = getPosts()