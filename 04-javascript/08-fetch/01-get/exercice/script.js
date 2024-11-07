const url = "../hero.json";
fetch(url)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    getData(data);
  })
  .catch((error) => {
    console.log(error);
  });
function getData(data) {
  // console.log(data);

  data.members.forEach((element) => {
    // console.log(element);
    document.getElementById("pet-select").innerHTML +=
      "<option>" + element.name + "</option>";
  });
  document.getElementById("pet-select").onchange = AfficheMembers;
  function AfficheMembers(element) {
    // console.log(element.target.value, data);
    const members = data.members.find((item) => {
      // console.log(item);
      return item.name == element.target.value;
    });
    // console.log(members);
    let memberDetails = "<div style='border: 5px solid red; width: 40%;'>";
    memberDetails += "<div>" + members.name + "</div>"+
      "<div>" + members.age + "</div>" +
      "<div>" + members.secretIdentity + "</div>" +
      "<div>" + members.powers + "</div>";
    memberDetails += "</div>";
    document.getElementById("membreAffiche").innerHTML = memberDetails;
  }
}

const url2 = "./langechange.json";
fetch(url2)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
   window.getLangeData=data.languages;
  })
  .catch((error) => {
    console.log(error);
  });
function setLangeData(language)   
 {
    const data = window.getLangeData[language];
     const title = document.getElementById("title");
     const labelSubj = document.getElementById("labelSubject");
     const langButton = document.querySelector(".language-select") ;
     title.innerHTML=data.h1;
     labelSubj.innerHTML=data.p;
     langButton.style.backgroundImage= data.img;
     
}
document.getElementsByClassName("language-select")[0].addEventListener("change", (event) => {
    const selectedLanguage = event.target.value;
    setLangeData(selectedLanguage);

})  
