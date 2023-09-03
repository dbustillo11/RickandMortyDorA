function getCharacters(done) {

    const results = fetch("https://rickandmortyapi.com/api/character");

    results
        .then(response => response.json())
        .then(data => {
            done(data)
    });


}

getCharacters(data => {
    data.results.forEach(personaje => {
        let statusClass;
        switch (personaje.status) {
            case "Dead":
                statusClass = "dead";
                break;
            case "Alive":
                statusClass = "alive";
                break;
            default:
                statusClass = "unknown";
                break;
        }
    
        const article = document.createRange().createContextualFragment(/*html*/`
        <article>
            <div class="image-container">
                <img src="${personaje.image}" alt="Personaje">
            </div>
            <div class="info">

                <h2>${personaje.name}</h2>
                <span class="status-circle ${statusClass}"></span> 
                <span>${personaje.status}</span>
            </div>
        </article>
        `);
    
        const main = document.querySelector("main");
    
        main.append(article);
    });
    
    
});