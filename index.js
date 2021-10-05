"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Internal runtime handler for exit.
 */
function handleExit(err) {
    var _a, _b, _c;
    if (process != null) {
        (_a = process.exit) === null || _a === void 0 ? void 0 : _a.call(process, (_b = err === null || err === void 0 ? void 0 : err.code) !== null && _b !== void 0 ? _b : -1);
    }
    else if (document != null) {
        (_c = document.dispatchEvent) === null || _c === void 0 ? void 0 : _c.call(document, new Event('entry-error'));
    }
    else {
        console.error(`Additionally, could not determine the environment (This process will be unable to exit gracefully or dispatch the error event)`);
    }
}
/**
 * Entry point for asyncrhonous methods.
 */
function entry(target, property) {
    if (property == null) {
        property = 'main';
    }
    const args = process === null || process === void 0 ? void 0 : process.argv;
    const main = target[property];
    if (typeof main != 'function') {
        console.error('Invalid target', property, 'at', target);
        throw new Error(`Unable to find "${property}" function on target ${target}!`);
    }
    try {
        const result = main(args);
        if (result instanceof Promise) {
            result.catch(err => {
                console.error(err);
                handleExit(err);
            });
        }
    }
    catch (err) {
        console.error(`${property} ended with a synchronous error:`, err);
        handleExit(err);
    }
}
exports.default = entry;
