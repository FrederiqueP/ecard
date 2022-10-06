

export class Utilities {

    constructor(painter) {

        // on a besoin des propriétés de painter
        this.painter = painter;
 
        // selection outils gomme ou crayon
        this.pen = document.getElementById("my-pen");
        this.eraser = document.getElementById("my-eraser");
        this.undo = document.getElementById("undo");
        this.favorite = document.getElementById("favorite");
        // affiche la couleur en cours dans l'étoile
        this.favorite.style.color = this.painter.currentColor;
        this.getTools();
    
        // sélection de la couleur sur un input color
        // ou sur plusieurs couleurs prédéfinies
        this.colorPalette = document.getElementById("my-color");
        this.getColor();
    
        // selection de la taille du trait de dessin
        this.minusLine = document.getElementById("minus");
        this.normalLine = document.getElementById("normal");
        this.plusLine = document.getElementById("plus");
        this.getLineWidth();
    }

    getTools() {
        // prendre outil crayon
        this.pen.addEventListener('click', (e)   => {
            this.painter.changeColor(this.painter.currentColor);
           
        });
        // prendre outil gomme (on ecrit en blanc)
        this.eraser.addEventListener('click', (e)   => {
            this.painter.changeColor('#ffffff');
        });
        // recommence
        this.undo.addEventListener('click', (e)   => {
            this.painter.context.clearRect(0, 0, this.painter.canvas.width, this.painter.canvas.height);
        });
        
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
            // attention préciser la propriété currentColor du painter
            this.painter.currentColor = nameColor;    
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
            this.painter.currentColor = color;    
             // affiche la couleur en cours dans l'étoile
             this.favorite.style.color = this.painter.currentColor;
        });

    }

    getLineWidth() {

        this.minusLine.addEventListener('click', (e)   => {
            if(this.painter.currentLineWidth < 2) {
                this.painter.currentLineWidth = 1;
            } else {
                this.painter.currentLineWidth --;
            }
        });

        this.normalLine.addEventListener('click', (e)   => {
            this.painter.currentLineWidth = 5;
        });

        this.plusLine.addEventListener('click', (e)   => {
            this.painter.currentLineWidth ++;
        });

    }
 

   
}


