"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const db_1 = __importDefault(require("./db"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.EXPRESS_PORT;
app.get("/", (_req, res) => {
    res.send("Express + TypeScript Server");
});
app.get("/hi", (_req, res) => {
    res.send("Express + TypeScript Server");
});
app.get("/team", async (req, res) => {
    const result = await db_1.default.query("SELECT $1::text as name", [
        "SOFTWARESLOTHS",
    ]);
    const name = result.rows[0].name;
    res.send(`Our team is ${name}!`);
});
app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});
//# sourceMappingURL=server.js.map