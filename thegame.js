var i=0;
var swerty=Math.floor(Math.random() * 100) + 1;

function test(){
    i++

    const N = document.getElementById("valeurentré").value
    if(N==swerty){
        document.getElementById("li_cas").innerHTML="C'est la bone réponse";
        document.getElementById("command2").style.display="none";
        document.getElementById("Lampenonallumé").src = "images/Doré et Violet Illustré Lampe Ramadan Invitation.png";
        document.getElementById("backgroudnone").style.display="none";
        document.getElementById("confirmer").style.display="none";
        document.getElementById("nbrchances").style.display="none";
        switch(i){
            case 1:
            case 2:    
            document.getElementById("commande").innerHTML="Bravo, vous etes un Génie !!!";
            document.getElementById("try").src="images/5eda3253383e63ab5ced9ae4d7c12493.jpeg";
            i=10;
            break;
            default :
            document.getElementById("commande").innerHTML="Félicitations, vous avez gagné après "+i+" tentatives";
            document.getElementById("try").src="images/Doré et Violet Illustré Lampe Ramadan Invitation (4).png";
            i=10;
            break;
        }
    }
    else if(N!=swerty){
        document.getElementById("backgroudnone").innerHTML="Il vous reste "+ (10-i) +" chances";
        document.getElementById("Lampenonallumé").src = "images/Untitled design (7).png";
        document.getElementById("try").src="images/Doré et Violet Illustré Lampe Ramadan Invitation (3).png";
        if(N<1 || N>100){
            document.getElementById("command2").innerHTML="Entrer un autre nombre entre 1 et 100 S'il vous plait !"
            document.getElementById("command2").style.display="block";
        }else if(N>=1 || N<=100){
            document.getElementById("commande").innerHTML="CHANCE PERDU !";
            document.getElementById("command2").style.display="none";
            if(N>swerty){
                document.getElementById("li_cas").innerHTML="votre nombre est plus grand à la valeur recherchée"
            }else if(N<swerty){
                document.getElementById("li_cas").innerHTML="votre nombre est plus petit à la valeur recherchée"
            }
        }
        //document.getElementById("commande").innerHTML="Raté !!!"votre nombre est plus petit à la valeur recherchée document.getElementById("backgroudnone").innerHTML="Il vous reste "+ 10-i +"chances"
    }
    if(((10-i)<=0) && N!=swerty){
        document.getElementById("commande").innerHTML="C'est raté !!";
        document.getElementById("valeurentré").style.display="none";
        document.getElementById("nbrchances").style.display="none";
        document.getElementById("backgroudnone").style.display="none";
        document.getElementById("li_cas").style.display="none";
        document.getElementById("confirmer").style.display="none";
        document.getElementById("try").src="images/SFFAsset_2HJH.png";
        
    }
    document.getElementById("nbrchances").innerHTML=10-i;


}

    function rejouer(){
       
        location.reload();
}
      

    

 
        // if(N.value==swerty){
        //     if(i<=1){
        //         document.getElementById("commande").innerHTML = "Bravo, vous etes un Génie !!!";
        //     }
        //     else if(i>=2){
        //         document.getElementById("commande").innerHTML = "Félicitations, vous avez gagné après "+i+" tentatives";
        //     }
        // }
        // else if(N.value>swerty){
        //     i++;
        //     document.getElementById("li_cas").innerHTML = "too big";
        // }
        // else if(N.value<swerty){
        //     i++;
        //     document.getElementById("li_cas").innerHTML = "too small";
        // }








/*var N ;
var swerty = 5;
for(i=1;i<=10;i++){
    N = parseInt(prompt("Devinez N !"))
    if(N==swerty){
        switch(i){
            case 1:
            case 2:
                alert("Bravo, vous etes un Génie !!!");
                i=11;
            break;
            default:
                alert("Félicitations, vous avez gagné après "+i+" tentatives");
                i=11;
            break;
        }
    }
    else if(i==10 && N!=swerty){
            alert("C'est raté !!");
    }else{
        if(N>swerty && (N<=100 && N>0)){alert("votre nombre est plus grand à la valeur recherchée")}
        else if(N<swerty && (N<=100 && N>0)){alert("votre nombre est plus petit à la valeur recherchée")}
    }
    if(N!=swerty){
        if(N>100 || N<=0){
    alert("Entrer un autre nombre entre 1 et 100 S'il vous plait !");
                }
                else if(N<=100 && N>0){     
    alert("le nombre des tentatives restants est : "+(10-i));
                }
            }    
    }*/