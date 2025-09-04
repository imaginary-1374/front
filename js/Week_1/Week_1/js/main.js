window.onload = function() {
    document.write('<h1 style="color:blue; text-align: center; letter-spacing:0.7px; text-transform:capitalize; font-weight: bold; font-family: Arial;">zydom</h1>');

    console.log("%cElzero %cWeb %cSchool",
        "color: red; font-size: 40px;",
        "color: green; font-size: 40px; font-weight: bold;",
        "color: blue; font-size: 40px;"
    );

    console.group("Group one");
    console.log("Message One");
    console.log("Message Two");
    console.group("Child Group");
    console.log("Messag One");
    console.log("Message Two");
    console.group("Grand Child Group");
    console.log("Message One");
    console.log("Message Two");
    console.groupEnd();
    console.groupEnd();
    console.groupEnd();
    console.group("Group 2");
    console.log("Message One");
    console.log("Message Two");
    console.groupEnd();
    
    console.table(["elzero", "ahmed", "sameh", "gamal"]);

    // console.log("Iam In Console");
    // document.write("Iam In Page");
    // console.log("Iam In Console");
    // document.write("Iam In Page");
}
