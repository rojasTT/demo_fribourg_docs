import styleSheet from './default.css?inline';
import htmlTemplate from './default.html?raw';
import i18n from './default.i18n.json'; 

export default class {
    constructor() {
        this.styleSheet = styleSheet;
        this.htmlTemplate = htmlTemplate;
        this.i18n = i18n;
    }

    async execute(templated) {
        //Récupération de l'instance Templated -> permet de manipuler le template avant qu'il ne soit rendu
    }
}
