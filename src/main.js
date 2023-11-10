import Maps from '@topomat/maps';
import Templates from '@topomat/maps/_maps/widgets/templates/Templates';
import Widgets from '@topomat/maps/application-base/view/Widgets';
import AppTemplates from './templates/Templates';
import AppWidgets from './widgets/Widgets';

(async () => {
    Widgets.setExternalModulesFunction(AppWidgets.getModule);
    Templates.setExternalTemplatesFunction(AppTemplates.getTemplate);

    // function to update the configuration
    /*maps.updateConfiguration = async (config, credential, urlParams) => {
        console.log('updateConfiguration', config, credential, urlParams);
    };*/

    // promise that resolves when the main application is loaded
    /*maps.when().then((event) => {
        console.log('Portal parameters', event.portal);
        console.log('Application configuration', event.config);
        maps.listen.on('load', (event2) => {
            console.log('Main view', event2.view); 
        });

        // check when a widget has been loaded and renderered
        document.getElementById('xxxxxx').addEventListener('_maps-render', (event) => {
            console.log('Widget', event.detail.source);
        });
    });*/
    
    const maps = new Maps();
    await maps.load();
})();
