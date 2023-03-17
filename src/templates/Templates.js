export default class {
    static async getModule(path) {
        switch (path) {
            case 'default': return import('./default/default');
            default: return null;
        }
    }
}
