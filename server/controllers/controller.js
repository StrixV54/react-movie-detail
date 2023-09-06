import { json } from "express";
import { readValue, writeValue } from "./datareader.js";

export const getMovies = async (req, res) => {
  try {
    const movies = await readValue();
    // console.log(typeof movies);
    res.status(200).json(JSON.parse(movies));
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

export const putDescription = async (req, res) => {
  try {
    const { id, description } = req.body;
    const movies = await readValue();
    let foundFlag = false;
    let isSame = false;
    const jsonMovies = JSON.parse(movies);
    const newData = jsonMovies.movies.map((item) => {
      if (item.id.toString() === id.toString()) {
        if (item.description === description) {
          isSame = true;
        } else {
          item.description = description;
          foundFlag = true;
        }
      }
      return item;
    });
    writeValue(newData);
    if (foundFlag) res.status(200).json({ message: "Success", newData });
    else if (isSame)
      res.status(200).json({ message: "Updated value is same as before" });
    else
      res.status(404).json({ message: `Id: "${id}" not found in database.` });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};
