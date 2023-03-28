import resolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';

const production = !process.env.ROLLUP_WATCH;

export default {
    input: {
        RemoteClient: '@arcgis/core/core/workers/RemoteClient.js',
        GpBuffer: 'maps/_maps/widgets/geoprocessing/workers/Buffer.js',
        GpCentroid: 'maps/_maps/widgets/geoprocessing/workers/Centroid.js',
        GpCut: 'maps/_maps/widgets/geoprocessing/workers/Cut.js',
        GpDifference: 'maps/_maps/widgets/geoprocessing/workers/Difference.js',
        GpDissolve: 'maps/_maps/widgets/geoprocessing/workers/Dissolve.js',
        GpIntersect: 'maps/_maps/widgets/geoprocessing/workers/Intersect.js',
        GpMerge: 'maps/_maps/widgets/geoprocessing/workers/Merge.js',
        GpSelect: 'maps/_maps/widgets/geoprocessing/workers/Select.js',
        FieldForm: 'maps/_maps/widgets/data/edit/FieldFormWorker.js',
        Exports: 'maps/_maps/utils/exportsWorker.js'
    },
    output: {
        chunkFileNames: 'chunks/[name]-[hash].js',
        dir: production ? 'dist/workers' : 'workers',
        format: 'system',
        exports: 'named'
    },
    plugins: [resolve(), production && terser()],
    preserveEntrySignatures: 'allow-extension'
};
