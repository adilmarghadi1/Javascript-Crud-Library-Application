var selectedRow = null
var data101 = document.getElementById('data101')
function onFormSubmit() {
    
        var formData = readFormData();
        if (selectedRow == null)
        {
            insertNewRecord(formData)
            sortTable()

            // localStorage.setItem('data101', JSON.stringify(formData));
            // let storageProfileString = localStorage.getItem("data101");
            // console.log("String saved in LocalStorage", storageProfileString);
            // let savedPerson = JSON.parse(storageProfileString);
            // console.log("Person object:", savedPerson);
            // console.log("Person's name:", savedPerson.titre);


        }
 

               
        else{
            updateRecord(formData);

            localStorage.setItem('data101', JSON.stringify(formData)); 
            let storageProfileString = localStorage.getItem("data101");
            console.log("String saved in LocalStorage", storageProfileString);
            let savedPerson = JSON.parse(storageProfileString);
            console.log("Person object:", savedPerson);
            console.log("Person's name:", savedPerson.titre);
        }

        resetForm();
    
}
 
const titre = document.getElementById("titre")
const auteur = document.getElementById('auteur')
const prix = document.getElementById('prix')
const email = document.getElementById('email')



 


//  formData.sort((a,b) => { return a.formData["prix"] - b.formData["prix"]})

function readFormData() {
    var formData = {};
    formData["titre"] = document.getElementById("titre").value;
    formData["auteur"] = document.getElementById("auteur").value;
    formData["email"] = document.getElementById("email").value;
    formData["prix"] = document.getElementById("prix").value;
    formData["langue"] = document.getElementById("langue").value;
    formData["date"] = document.getElementById("date").value;
   

    formData['input2']= document.querySelector('input[name="fav"]:checked').value

 
   
   
 




if ((titre.value>='A' && titre.value<='Z') ||  (titre.value>='a' && titre.value<='z'))
    {
        console.log("True")
    }
    else {
        alert("Please Fill The Title Field Correctly");
        document.getElementById("titre1").focus();

    }

    if ((auteur.value>='A' && auteur.value<='Z') ||  (auteur.value>='a' && auteur.value<='z'))
    {
        console.log("True")
    }
    else {
        alert("Please Fill The Auteur Field Correctly");
        document.getElementById("titre1").focus();

    }

    // Email Regex Validation

     var emailRegex = new RegExp(/^[a-z\d\.]+@[a-z\d]+\.([a-z]{2,8})(\.[a-z]{2,8})?$/);
    let checkEmail = email.value;
    var valid = emailRegex.test(checkEmail);

      if(valid==true) {
          console.log("Email is valid")
    } else {
        alert("Email is not valid")
        document.getElementById("titre1").focus();
  }

    // Language input
    var languee = document.getElementById("langue").value;

    if (languee=='')
    {
        alert("Please Select Your Language")
        document.getElementById("titre1").focus();
    }

    else {
        console.log("True")
    }

    // Price Regex Validation
    var prix = new RegExp(/^\d+(,\d{1,2})?$/)
    var checkPrice = document.getElementById("prix").value;
    var valid = prix.test(checkPrice)

    if (valid==true)
    {
        console.log("The Price is Valid")
    }

    else {
        alert("The Price is not Valid")
        document.getElementById("titre1").focus();
    }

    // Date Regex Validation

    var datee = new RegExp(/(?:((0\d|[12]\d|3[01])|(0\d|1[012]))[\-|\\|\/]((0\d|1[012])|(0\d|[12]\d|3[01]))[\-|\\|\/](((19|20)\d{2})|\d\d))/);
    var checkDate = document.getElementById("date").value;
    var validDate = datee.test(checkDate)

    if (validDate==true)
    {
        console.log("The Date is valid")
    }

    else {
        alert("The Date is Not Valid");
        document.getElementById("titre1").focus();
    }

   
     class Ouvrage {
    constructor(titre, auteur, prix, email, date, langue, input2)
    {
        this.titre = formData["titre"];
        this.auteur = formData["auteur"];
        this.prix = formData["prix"];
        this.email = formData["email"];
        this.date = formData["date"];
        this.langue = formData['langue'];
        this.input2 = formData["input2"];
    }

    DetailOuvrage() {
        return (`L'ouvrage ${this.titre} est un ${this.input2}  en langue ${this.langue} écrit par  ${this.auteur}  et publié le ${this.date} Le prix de ${this.titre} , est de  ${this.prix} DHs`)
    }
}

const ouvrage1 = new Ouvrage()
alert(ouvrage1.DetailOuvrage())
// let data101 = document.getElementById('data101')
// data101.innerHTML += ouvrage1.DetailOuvrage() + "<br>"

 

 
    return formData;

    
  
}

// Sort Algorithm


function sortTable() {
  var table, rows, switching, i, x, y, shouldSwitch;
  table = document.querySelector("table");
  switching = true;
 
  while (switching) {
     switching = false;
    rows = table.rows;
 
    for (i = 1; i < (rows.length - 1); i++) {

      shouldSwitch = false;
 
      x = rows[i].getElementsByTagName("td")[0];
      y = rows[i + 1].getElementsByTagName("td")[0];
     
      if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
 
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }
}
 
  
function insertNewRecord(data) {
    var table = document.getElementById("list").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);


 
   
    
        

    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.titre;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.auteur;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.email;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.prix;
    cell5 = newRow.insertCell(4);
  cell5.innerHTML = data.langue;
  cell6 = newRow.insertCell(5);
  cell6.innerHTML = data.input2;
    cell7 = newRow.insertCell(6);
    cell7.innerHTML = data.date;
    cell8 = newRow.insertCell(7);
    cell8.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;

                        
     
     
           


           
 
             
        }


 

 
 
function resetForm() {
    document.getElementById("titre").value = "";
    document.getElementById("auteur").value = "";
    document.getElementById("email").value = "";
    document.getElementById("prix").value = "";
    document.getElementById("langue").value = "";
    document.getElementById("input2").value = "";
    document.getElementById("date").value = "";
 
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("titre").value = selectedRow.cells[0].innerHTML;
    document.getElementById("auteur").value = selectedRow.cells[1].innerHTML;
    document.getElementById("email").value = selectedRow.cells[2].innerHTML;
    document.getElementById("prix").value = selectedRow.cells[3].innerHTML;
    document.getElementById("langue").value = selectedRow.cells[4].innerHTML;
    document.getElementById("input2").value = selectedRow.cells[5].innerHTML;
    document.getElementById("date").value = selectedRow.cells[6].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.titre;
    selectedRow.cells[1].innerHTML = formData.auteur;
    selectedRow.cells[2].innerHTML = formData.email;
    selectedRow.cells[3].innerHTML = formData.prix;
    selectedRow.cells[4].innerHTML = formData.langue;
    selectedRow.cells[5].innerHTML = formData.input2;
    selectedRow.cells[6].innerHTML = formData.date;
}

function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("list").deleteRow(row.rowIndex);
        resetForm();
    }
}

  


let submit1 = document.getElementById('submit1')
submit1.addEventListener("click", onFormSubmit);