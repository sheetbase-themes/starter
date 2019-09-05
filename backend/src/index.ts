import { sheetbase } from '@sheetbase/server';

import appRoutes from './routes/index';

/**
 * modules
 */

const Sheetbase = sheetbase({
    allowMethodsWhenDoGet: true, // for dev, should remove when in production
});

/**
 * routes
 */

appRoutes();

// export for using elsewhere
export { Sheetbase };
