var array = document.body.querySelector(".array");
var warriors = [
    {
        name:"Bob",
        damage:2,
        health:10,
        warrior:true
    },
    {
        name:"Jerry",
        damage:1,
        health:12,
        warrior:true
    },
    {
        name:"Mavis",
        damage:2,
        health:10,
        warrior:true
    },
    {
        name:"Morty",
        damage:4,
        health:10,
        warrior:true
    },
    {
        name:"Shorty",
        damage:10,
        health:3,
        warrior:false
    },
    {
        name:"Porty",
        damage:1,
        health:14,
        warrior:true
    },{
        name:"Perry",
        damage:2,
        health:9,
        warrior:true
    },
    {
        name:"Larry",
        damage:2,
        health:17,
        warrior:false
    }
];

for(var i=0; i<warriors.length; i++) {

    if(warriors[i].health >= 10&&warriors[i].damage >= 2&&warriors[i].warrior===true){
        var ele = document.createElement("div");
        var nameEle = document.createElement("h1");
        var damageEle = document.createElement("h2");
        var healthEle = document.createElement("h2");

        nameEle.innerHTML = "Name: " + warriors[i].name;
        if(warriors[i].name.includes("a")){
            nameEle.style.color = "red";
        }
        damageEle.innerHTML = "Damage: " + warriors[i].damage;
        healthEle.innerHTML = "Health: " + warriors[i].health;

    }
    ele.appendChild(nameEle);
    ele.appendChild(damageEle);
    ele.appendChild(healthEle);
    array.appendChild(ele);
}

