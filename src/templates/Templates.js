export default class {
    static async getTemplate(name) {
        switch (name) {
            case 'default': return import('./default/default');
            default: return null;
        }
    }
}
