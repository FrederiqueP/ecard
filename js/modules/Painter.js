


export class Painter {

    constructor() {
        // Le constructeur permet de créer des propriétés et de les initialiser
        this.canvas = document.getElementById('my-canvas');
        this.context = this.canvas.getContext('2d');
        // peindre canvas en blanc
        this.context.fillStyle = 'white';
        this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
        // position initiale
        this.x = 0;
        this.y = 0;
        // couleur ligne par defaut
        this.currentColor = '#c0392b';
        // epaisseur ligne par defaut
        this.currentLineWidth = 5;
        // controler si la souris est enfoncée
        this.isDrawing = false;

        // On lance aussi tout ce qu'on doit faire lors du chargement du painter
        this.init();




    }

    init() {
        // Installation du gestionnaire d'événement au click sur le canvas
        this.canvas.addEventListener('mousemove', this.drawline.bind(this));
        this.canvas.addEventListener('mousedown', this.onMouseDown.bind(this));
        this.canvas.addEventListener('mouseup', this.onMouseUp.bind(this));

    }
    
    // nouvelle position à partir de l'événement de la souris
    getMouseCoords(event) {
        return {
            x: event.offsetX,
            y: event.offsetY
        }
    }

    drawline(event) {
        // console.log(this);
        // avec utilisation de bind()
        // La méthode bind() crée une nouvelle fonction qui, lorsqu'elle est appelée, a pour contexte 'this' la valeur passée en paramètre et éventuellement une suite d'arguments qui précéderont ceux fournis à l'appel de la fonction créée.
        // Object { canvas: canvas#my-canvas, context: CanvasRenderingContext2D, x: 127, y: 212, currentColor: "#c0392b", currentLineWidth: 5, isDrawing: false }
        
        // vérifier si la souris est enfoncée
        if (this.isDrawing) {
    
            this.context.beginPath(); // debut
        
            this.context.lineWidth = this.currentLineWidth;
            this.context.lineCap = 'round';
            // this.context.strokeStyle = this.currentColor;   
            // coordonnées début 
            this.context.moveTo(this.x, this.y); // à partir
         
            const coords = this.getMouseCoords(event);
            this.context.lineTo(coords.x, coords.y); // vers
        
            this.context.stroke(); // dessine
            // 
            this.x = coords.x;
            this.y =   coords.y;
        }
    }
    
    onMouseDown(event) {
        // souris enfoncée prendre les coordonnées
        const coords = this.getMouseCoords(event);
        this.x = coords.x;
        this.y = coords.y;
        this.isDrawing = true;
    }

    onMouseUp() {
        // souris relachée ne plus dessiner
        this.isDrawing = false;
    }
    
    changeColor(color) {
        this.context.strokeStyle = color;   

    }

}