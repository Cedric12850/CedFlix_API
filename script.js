let cedFlix = document.querySelector('.cedFlix');
let search = document.querySelector('#search');

search.addEventListener('input', function() {   //évenement à la saisie

        let userSearch = search.value;
        //console.log(userSearch)  // varriable qui récupère la saisie utilisateur
        cedFlix.innerHTML = '';     // permet de vider les résultats lors de nouvelles recherches
        async function searchfilm() {
            const reponse = await fetch(`https://api.tvmaze.com/search/shows?q=${userSearch}`);  //syntaxe qui permet d'utiliser la variable qui écupère la saisie utilisateur pour l'ajouter à la fin de lien de recherche 'q='
            console.log(reponse);
            const results = await reponse.json();
            console.log(results);   // affiche le résultats de l'api obtenu sous forme de tableau
            results.map((film)=>{
                console.log(film.show); //chemin vers le tableau show de l'api
                let article = document.createElement('article')
                cedFlix.appendChild(article);

                let image = document.createElement('img');
                article.appendChild(image);

                // utilisation d-un ternaire pour afficher image    -------------------------------------------------------------------------
                image.src = film.show.image ? film.show.image.medium : image.alt = "Image non trouvé";
                image.alt = film.show.image ? image.alt = "pochette du show" : image.alt = "image non trouvé";

                // ou alors le classique if/else
                /*if (film.show.image){
                image.src = film.show.image.medium;
                image.alt = 'Pochette du Show';
                }else{
                    image.alt = "Image Non trouvé"
                }*/
                
                
                // affichage du titre   -----------------------------------------------------------------------------------------------------
                let title = document.createElement('h2');
                article.appendChild(title);
                title.innerHTML = film.show.name;

                // afficher par genre (mais il peut y avoir plusieurs genre)    ----------------------------------------------------------------
                let genres = film.show.genres;
                // utilisation de la méthode for element au lieu de .map
                // utilisation de la méthode for each au lieu de .map
                genres.forEach(element => {
                    let genre = document.createElement('span');
                    article.appendChild(genre);
                    genre.innerHTML = element;
                });

                // Affichage du synopsis    ---------------------------------------------------------------------------------------------------
                let summary = document.createElement('p');
                article.appendChild(summary);
                summary.innerHTML = film.show.summary;
                
            })
        }

searchfilm()
    })



        
   
    
        
        
        


//lance dans un ecouteur d'event
//search.addEventListener('input',searchfilm)
