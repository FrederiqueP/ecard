

export class Form {

    constructor() {

        // ecouter submit
        document.querySelector("#form-container").addEventListener("submit", this.formProcess);
        
    }

    formProcess(e) {
        // et ne pas soumettre le formulaire
        e.preventDefault(); 
        
        // récuperer le canvas dans une image
        const canvas = document.getElementById('my-canvas');
        const dataURL = canvas.toDataURL();
        const image = document.getElementById('image');
        image.value = dataURL;
       
        const myForm = document.querySelector("#form-container form");

        console.log(myForm);
        
        // ce querySelector veut atteindre la balise form contenu dans la div form-container
        // Un element HTML <form> — quand il est spécifié, l'objet FormData sera rempli avec 
        // les clés/valeurs du formulaire en utilisant les noms de propriétés de chaque élément 
        // pour clé et les valeurs soumises. Cela encodera aussi le contenu des fichiers.
        const data = new FormData(myForm);

        // fetch envoi une requete sur le serveur 
        // premier parametre une url, et ensuite les options 
        // php lit le contenu du post
        fetch('contact.php', {
            method: 'POST',
            body: data
            })
            .then (response=>response.json())
            .then (data=>{
                // le tableau  en php devient un objet en javascript
                // on regarde la propriété success
                if(data.success) {
                    // message succcès 
                    alert ('Email envoyé avec succès');
                    // réinitialisation du formulaire
                    myForm.reset();
                    document.getElementById('senderemail-error').textContent = "";
                    document.getElementById('recipientemail-error').textContent = "";
                    // passer la section qui contient le formulaire à caché
                    document.getElementById('form-container').classList.add('hidden');
                }
                else {
                    // affiche les erreurs
                    let error1= data.errors.senderemail; 
                    let error2 = data.errors.recipientemail; 
                    if(error1){
                        document.getElementById('senderemail-error').textContent = error1;
                    }
                    if(error2){
                        document.getElementById('recipientemail-error').textContent = error2;
                    }
                }
            });

    }
  
}