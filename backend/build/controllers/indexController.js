"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.indexController = void 0;
class IndexController {
    index(req, res) {
        res.json({ text: "Ruta inicial del mantenedor de empleados con mean." });
    }
}
exports.indexController = new IndexController();
