
import { patchSetTimeout, patchSetInterval } from './timeout';
import { patchXmlHttpRequest } from './xhr';
import { patchWebSocket } from './websocket';

export function patchAll() {
    patchSetTimeout();
    patchSetInterval();
    patchXmlHttpRequest();
    patchWebSocket();
}

export * from './timeout';
export * from './xhr';
export * from './webSocket';
