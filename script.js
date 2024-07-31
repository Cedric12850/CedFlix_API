let cedflix = document.querySelector('.cedflix');

async function searchfilm() {
    const reponse = await fetch("https://api.tvmaze.com/search/shows?q=girls");
    const filmographie = await reponse.json();
    console.log(filmographie);
    filmographie.map((i)=>{
        console.log(i.show)
        
    })
    

}
searchfilm()