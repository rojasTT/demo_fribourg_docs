import Widget from 'maps/_maps/widgets/_base/Widget';

export default class extends Widget {
    i18n = {
        en: {
            title: 'Test'
        },
        fr: {
            title: 'Test'
        },
        de: {
            title: 'Test'
        }
    };

    type = 'Test';

    declaredClass = 'app.widgets.Test';

    iconClass = 'esri-icon-experimental';

    constructor(params, container, position) {
        super();
        super.init(params, container, position);
    }

    _render() {
        return new Promise((resolve) => {   
            console.log('Widget Test _render');
            resolve(this);
        });
    }
}
