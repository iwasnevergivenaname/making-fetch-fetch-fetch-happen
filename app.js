let containerOne = document.querySelector(".container-one");

// call
fetch("https://api.spacexdata.com/v3/capsules")
//   ^ returns response v
.then(response => {
    // data returned
    return response.json();
})

//    with that ^data^
.then(data => {
    const firstElement = data[0];
    console.log(firstElement);
    let capsuleID = firstElement.capsule_id;
    console.log(capsuleID);
//     let details = firstElement.details;
//     console.log(details);
//     let landings = firstElement.landings;
//     console.log(landings);

    for (let i = 0; i < data.length; i++) {
        let eachCaspule = data[i];
        const obj = {
            capsuleID: eachCaspule.capsule_id,
            details: eachCaspule.details,
            landings: capsuleID.landings
        };

        console.log(obj);
        const capsuleElement = document.createElement("p");
        capsuleElement.textContent = obj.capsuleID;
        containerOne.appendChild(capsuleElement);
    }
});


