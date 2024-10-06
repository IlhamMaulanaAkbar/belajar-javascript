const user = {
    id: 2205,
    displayName: "UndeR",
    realName: "Ilham"
};

function introduce({displayName, realName}){
    console.log (`${displayName} adalah nama username dari ${realName}`);
}

introduce(user);

