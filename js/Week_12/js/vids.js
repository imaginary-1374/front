// vid 90





for (let i = 0; i < 5; i++) {
    let divelem = document.createElement(`div`);
    divelem.className = `products${i+1}`;
    divelem.setAttribute("style","padding: 20px; margin: 10px auto;");
    
    let h2elem = document.createElement("h2");
    h2elem.setAttribute("style","padding: 20px; margin: 10px 0 0 30px; font-size: 25px; color: green;");
    let h2text = document.createTextNode(`Product ${i+1}`);
    h2elem.appendChild(h2text);
    
    
    let pelem = document.createElement("p");
    pelem.setAttribute("style","margin-bottom: 0;font-size: 25px; font-weight: 400; color: grey;");
    let ptext = document.createTextNode("Product Description");
    pelem.appendChild(ptext);
    
    divelem.appendChild(h2elem);
    divelem.appendChild(pelem);
    
    document.body.appendChild(divelem);
}