import { Painter } from './Painter.js';
import { Utilities } from './Utilities.js';


export class App {
  
    constructor() {
        // instanciation de painter
        this.painter = new Painter();

        this.utilities = new Utilities(this.painter);
        
    }

}