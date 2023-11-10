export default class {
    static async getModule(path) {
        switch (path) {
            case 'app/widgets/TTWidjModel': return import('./TTWidjModel');
            default: return null;
        }
    }
}
