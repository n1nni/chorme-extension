let myLeads = [];

const inputEl = document.querySelector("#input-el");

const inputBtn =document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");
const deleteBtn=document.getElementById("delete-btn");
const tabBtn = document.getElementById("tab-btn");

const leadFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));

if(leadFromLocalStorage){
    myLeads = leadFromLocalStorage;
    render(myLeads);
}


function render(leads){
    let listItems ="";
    for(let i=0;i<leads.length;i++){
        // listItems += "<li><a href='"+ leads[i] +"' target=_blank>" + leads[i] + "</a></li>";
        listItems += `
        <li>
            <a href='${leads[i]}' target=_blank>
                ${leads[i]}
            </a>
        </li>`;
        // const li = document.createElement("li");
        // li.textContent=myLeads[i];
        // ulEl.append(li);
    }

    ulEl.innerHTML = listItems;
};


inputBtn.addEventListener("click", function(){ 
    // push to arrey
    myLeads.push(inputEl.value);
    inputEl.value="";
    // save to localstorage
    localStorage.setItem("myLeads",JSON.stringify(myLeads));

    render(myLeads);
});


// save tab
tabBtn.addEventListener("click",function(){

    chorme.tabs.query({active: true, currentWindow: true}, function(tabs){
        myLeads.push(tabs[0].url);
        localStorage.setItem("myLeads", JSON.stringify(myLeads));
        render(myLeads);
    });

});

// delete btn function
deleteBtn.addEventListener("click", function(){
    myLeads=[];
    localStorage.clear();
    render(myLeads);
});
