let friends = ["Ahmed", "Sayed", "Ali", 1, 2, "Mahmoud", "Amany"];
let index = 0;
let counter = 0;
let num = index;
while(counter < friends.length)
{
    if(friends[counter][index] != 'A' &&typeof( friends[counter]) !='number' )
    {
        num++;
        console.log(
            `"${num} =>${friends[counter]}"`
            );
        counter++;
    }
    else{
        counter++;
        continue;
    }
}