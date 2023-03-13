export default class {
    static async getModule(path) {
        switch (path) {
        case 'app/widgets/Test': return import('app/widgets/Test');
        default: return null;
        }
    }
}