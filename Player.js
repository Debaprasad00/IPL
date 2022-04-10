document.getElementById("btn").addEventListener("click", function() {
  document.querySelector(".team_form").style.display ="flex";
});
document.getElementById("team-can-btn").addEventListener("click", function() {
  document.querySelector(".team_form").style.display ="none";
});
   var team_array =[];
team_array.forEach(cardMaker);
function cardMaker(text){
    var div=document.createElement("div");
    div.classList.add("card");
    console.log(text.team_name);
    console.log(text.team_img);
    const htmlData =' <div class="image" id="teamImg"></div><div class="title" id="teamHead"></div><div class="des"><a href="CSK.html"><button>View</button></a><button id="cancel">Delete</button></div>';
   
    div.insertAdjacentHTML("afterbegin",htmlData);
    const team_img_l1=`<img src="${text.team_img}">`
    const team_name_h1=`<h1 id="inh1">${text.team_name}</h1>`;
    div.querySelector("#teamImg").innerHTML = team_img_l1;
    div.querySelector("#teamHead").innerHTML = team_name_h1;
    const cancelButton = div.querySelector("#cancel");

    cancelButton.addEventListener("click", () =>{
      localStorage.removeItem(team_name.value);
      div.remove();

    });
    document.body.appendChild(div);

}
function store_team(){
    let team_name=document.getElementById("team_name");
    let team_img_link=document.getElementById("team_img_link");

    var team_info={
        team_name:team_name.value,
        team_img: team_img_link.value
    }
    console.log("hello");
    console.log(team_info.team_name);
    console.log(team_info.team_img);

    localStorage.setItem(team_name.value,JSON.stringify(team_info));
    document.querySelector(".team_form").style.display ="none";
   
    cardMaker(team_info);
}
document.getElementById("team-sub-btn").addEventListener("click", store_team);