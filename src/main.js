import Maps from 'maps';
import AppWidgets from 'app/widgets/Widgets';
import AppTemplates from 'app/templates/Templates';
import Widgets from 'maps/application-base/view/Widgets';
import Templates from 'maps/application-base/Templates';
//import applicationConfig from './config/application.json';
//import applicationBaseConfig from './config/applicationBase.json';

const getJson = async (url) => {
    const r = await fetch(url);
    return r.text();
};

(async () => {
    Widgets.setExternalModulesFunction(AppWidgets.getModule);
    Templates.setExternalModulesFunction(AppTemplates.getModule);

    const applicationConfig = await getJson('./config/application.json');
    const applicationBaseConfig = await getJson('./config/applicationBase.json');
    const maps = new Maps();
    await maps.load(applicationConfig, applicationBaseConfig);
})();
