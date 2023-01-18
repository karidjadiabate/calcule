
    // mon code js
    //déclaration de variable string avec une chaine vide

   let string ="";
    //sélection des éléments <button> dans le document et  les stockant dans la variable buttons.
    let buttons = document.querySelectorAll("button");
    //Ce code permet d'ajouter des événements à chaque bouton et d'effectuer des calculs sur une chaîne de caractères. 
    //Lorsque le bouton égal est cliqué, 
    //le code évalue la chaîne de caractères et affiche le résultat sur l'ecran.

     Array.from(buttons).forEach((button) => {
       button.addEventListener("click",(e)=>{

  

      if(e.target.innerHTML == "="){
        string = eval(string);
        document.querySelector("textarea").innerText = string;    
    }
//    
   //Lorsque le bouton AC est cliqué, 
    //le code évalue la chaîne de caractères  Si le texte ajouté est AC effacer, l'ecran est vidée 
      else if(e.target.innerHTML == "(AC)"){
       string ="";
       document.querySelector("textarea").innerText =string;
     }
     // 
     
     
      else{
       string = string + e.target.innerText;
       document.querySelector("textarea").innerText =string;    }

       })
      
     });



