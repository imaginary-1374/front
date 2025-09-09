let day = "friday";
if (day.trim() !== day) {
    console.log("You Need To Remove Spaces And Make First Letter Capital => Friday");
}

if ((day.at(0)) >= 'a' && day.at(0) <= 'z') {
    console.log("You Need To Make First Letter Capital => Friday");
}
else{

    switch (day) {
        case "Friday":
            case "Saturday":
                case "Sunday":
                    console.log("No Appointments Available")
    break;
    case "Monday":
    case "Thursday":
        console.log("From 10:00 AM To 5:00 PM")
        break;
        case "Tuesday":
            console.log("From 10:00 AM To 6:00 PM")
            break;
            case "Wednesday":
                console.log("From 10:00 AM To 7:00 PM")
                break;
                default:
        console.log("Its Not A Valid Day")
        break;
    }
}