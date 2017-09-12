"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function intent(name) {
    return (target, propertyKey, descriptor) => {
        if (!target.intents) {
            target.intents = {};
        }
        ;
        target.intents[name] = propertyKey;
        return descriptor;
    };
}
exports.default = intent;
//# sourceMappingURL=intent.js.map