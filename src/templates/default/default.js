import * as commonUtils from '@topomat/maps/_maps/utils/commonUtils';
import styleSheet from './default.css?inline';
import htmlTemplate from './default.html?raw';
import i18n from './default.i18n.json';

export default class {
    async execute(templated) {
        await commonUtils.setHtmlAndStyleSheet(templated, htmlTemplate, styleSheet, i18n);
    }
}
