let request = new XMLHttpRequest();
request.open("GET","./main.json");
request.send();

request.onload = function() {

function onconnect(link) { 
    return new Promise((resolve, reject) => {

        if (request.readyState === 4 && request.status === 200) {
            // obj.forEach(el => {
            //     el.userId.value === 5? resolve(el) : reject(Error('403 Server Could not Reach The File'));
            // });   مشتغلتش
            resolve(JSON.parse(request.responseText));
        } else{
            reject(Error('403 Server Could not Reach The File'));
        }
});
}

// ________________________________________________________________________________________//

function onconnect(link) {
    if (request.readyState === 4 && request.status === 200) {
        return Promise.resolve(JSON.parse(request.responseText))
    } else{
        return Promise.reject(Error('403 Server Could not Reach The File'));
    }
}

// ________________________________________________________________________________________//

async function onconnect(link) {
    if (request.readyState === 4 && request.status === 200) {
        return JSON.parse(request.responseText)
    } else {
        throw new Error('403 Server Could not Reach The File')
    }
}

// ________________________________________________________________________________________//

onconnect('./main.json')
.then(res => {
    res.length = 5;
    return res;
})
.then(res => {

for (let i = 0; i < res.length; i++) {
    let div = document.createElement('div');
    div.innerHTML = 
    `<h3>${res[i].title}</h3>
    <p>${res[i].description}</p>`;
    document.body.appendChild(div);
}
})
}

// ________________________________________________________________________________________//

fetch('./main.json').then(res => {
    let obj = res.json();
    return obj;
})
.then(res => {
    
    res.length = 5;
    for (let i = 0; i < res.length; i++) {
        let div = document.createElement('div');
        div.innerHTML = 
        `<h3>${res[i].title}</h3>
        <p>${res[i].description}</p>`;
        document.body.appendChild(div);
    }
});

// ________________________________________________________________________________________//

async function fetchdata(link) {
    let data;
    try{
        data = await (await fetch(link)).json();
        data.length = 5;
    }
    catch {
        console.log(Error('403 Server Could not Reach The File'));
    }
    finally{
        for (let i = 0; i < data.length; i++) {
            let div = document.createElement('div');
            div.innerHTML = 
            `<h3>${data[i].title}</h3>
            <p>${data[i].description}</p>`;
            document.body.appendChild(div);
        }
    }
}
fetchdata('http://127.0.0.1:5500/Week_22/main.json');
