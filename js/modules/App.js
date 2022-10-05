import { Painter } from './Painter.js';
import { Utilities } from './Utilities.js';
import { Form } from './Form.js';

export class App {
  
    constructor() {

        this.painter = new Painter();
        this.utilities = new Utilities(this.painter);
        this.form = new Form();
        document.getElementById('button-show-form').addEventListener('click', this.showForm);

    }

    showForm () {
        document.getElementById('form-container').classList.remove('hidden');
    }

}