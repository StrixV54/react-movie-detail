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
exports.putDescription = exports.getMovies = void 0;
const mongoreader_1 = require("./mongoreader");
const getMovies = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const movies = yield (0, mongoreader_1.readValue)();
        res.status(200).json({ movies });
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
exports.getMovies = getMovies;
const putDescription = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id, description } = req.body;
        // const movies = await readValue();
        // const jsonMovies = JSON.parse(movies).movies;
        // let isSame = false;
        // const newData = jsonMovies.movies.map((item) => {
        //   if (item.id.toString() === id.toString()) {
        //     res.status(200);
        //     if (item.description === description) {
        //       isSame = true;
        //     } else {
        //       item.description = description;
        //     }
        //   }
        //   return item;
        // });
        // if (isSame)
        //   res.json({
        //     message:
        //       "Value to be updated is same as before, hence not updating it.",
        //   });
        // else if (res.statusCode === 200 && !isSame) {
        //   writeValue(newData);
        //   res.json({ message: "Successfully updated", newData });
        // } else
        //   res.status(404).json({ message: `Id: "${id}" not found in database.` });
        //Depricating above code , using MongoDB now
        const result = yield (0, mongoreader_1.writeValue)(id, description);
        console.log(result);
        res
            .status(200)
            .json({ message: "Successfully Updated", db_response: result });
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
exports.putDescription = putDescription;
