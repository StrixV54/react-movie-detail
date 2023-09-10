"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.writeValue = exports.readValue = void 0;
const index_1 = require("../index");
const readValue = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const items = yield index_1.collection.find({}).toArray();
        return items;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    }
    catch (error) {
        console.error("Error in reading from MongoDB", error);
    }
});
exports.readValue = readValue;
const writeValue = (id, newValue) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield index_1.collection.updateOne({ id: Number(id) }, { $set: { description: newValue } });
        return result;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    }
    catch (error) {
        console.error("Error in updating in MongoDB", error);
    }
});
exports.writeValue = writeValue;
