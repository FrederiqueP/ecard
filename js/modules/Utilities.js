

export class Utilities {

    constructor(painter) {

        // couleur ligne 
        this.painter = painter;
        this.colorPalette= document.getElementById("my-color");
        this.getColor();
       
    }

    getColor() {

        const colors = document.querySelectorAll(".color-picker");

        for (let oneColor of colors) {
            oneColor.addEventListener('click', (e)   => {
            // On récupère le nom de la couleur avec l'évènement dans la fonction anonyme 
            // et la méthode currentTarget qui renoie ce qui a été cliqué
            let nameColor = e.currentTarget.getAttribute("data-color");
            console.log("Nom couleur: " + nameColor);
            this.painter.changeColor(nameColor);
                
            });

            // oneColor.addEventListener('click', function() {
            //     console.log(this);
            // });
            // renvoie la div :
            // <div class="color-picker brown" data-color="brown">
        }
  

        // L'événement change est déclenché pour les éléments <input> (entrée), 
        // lorsqu'un changement de leur valeur est réalisé par l'utilisateur. 
        this.colorPalette.addEventListener('change', (e) => {
            const color = this.colorPalette.value;
            this.painter.changeColor(color);
        });


    }

 

   
}


