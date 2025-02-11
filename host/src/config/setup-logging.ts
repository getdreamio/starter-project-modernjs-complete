import type { LogConfig } from '@dream.mf/logging';

// Here we can setup which log functions we want to link to something like application insights
// Below is is an example showing how to use the logger

const setupLogging = () : LogConfig => {
    return {
        logInfo: (detail) => { console.log('Mock Log Aggregator', detail.detail); },
        debug: false,
    } as unknown as LogConfig;
};

export default setupLogging;
