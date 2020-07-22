const body = document.querySelector("body");

fetch(" https://pokeapi.co/api/v2/pokemon/mew")
    .then(res => {
        return res.json();
    })
    .then(data => {
        // console.log(data);
        let sprites = data.sprites;
        // console.log(sprites);
        let frontPic = sprites.front_default;
        // console.log(frontPic);
        let pokeName = data.name;
        // console.log(pokiName);
        let height = data.height;
        let weight = data.weight;
        let moves = data.moves;
        let explosion = moves[69].move.name;
        console.log(explosion);
        let types = data.types[0].type.name;
        console.log(types);

        const card = document.createElement("div");
        card.classList.add("card");
        card.style.width = "18rem";

        const image = document.createElement("img");
        image.src = frontPic;
        image.classList.add("card-img-top");
        image.alt = pokeName;

        const cardBody = document.createElement("div");
        cardBody.classList.add("card-body");
        console.log(cardBody);

        const cardTitle = document.createElement("h5");
        cardTitle.classList.add("card-title");
        cardTitle.textContent = pokeName.toUpperCase();

        let firstLetter = pokeName.charAt(0).toUpperCase();
        let otherLetters = pokeName.slice(1);
        let fullName = firstLetter + otherLetters;
        console.log(fullName);

        const cardHeight = document.createElement("p");
        cardHeight.classList.add("card-height");
        cardHeight.textContent = height;

        const cardWeight = document.createElement("p");
        cardWeight.classList.add("card-weight");
         cardWeight.textContent = weight;

        const cardMove = document.createElement("p");
        cardMove.classList.add("card-move");
        cardMove.textContent = explosion;

        const cardType = document.createElement("p");
        cardType.classList.add("card-type");
        cardType.textContent = types;

        console.log(cardHeight, cardWeight, cardType, cardMove);

    });


