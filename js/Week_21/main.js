let req = new XMLHttpRequest();
req.open("GET","main.json");
req.send();

// console.log(req);

// setTimeout(function(){
//     console.log(req.responseText);
// },1000)

req.onreadystatechange = function(){
    if (this.readyState == 4 && req.status == 200) {
        console.log(this.responseText);

        console.log("Data Loaded");

        let mainData = JSON.parse(this.responseText);

        for (let i = 0; i < mainData.length; i++) {
            Object.defineProperty(mainData.at(i), "articles",{
                value: "ALL",
            })
    }
    updatedData = JSON.stringify(mainData);

    console.log(updatedData)

    //_____________________________________________________________//
    let parent_div = document.createElement('div');
    parent_div.id = 'data';
    for (let i = 0; i < mainData.length; i++) {
        let div = document.createElement('div');
        parent_div.appendChild(div);
        div.innerHTML = `
        <h2>${mainData[i].title}</h2>
        <p>${mainData[i].body}</p>
        <p>${mainData[i].category}</p>
        <p>${mainData[i].author}</p>`;
    }
    document.body.appendChild(parent_div);
}
}