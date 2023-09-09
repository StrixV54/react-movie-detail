import { readValue, writeValue } from "./awsfilereader.js";

export const getMovies = async (req, res) => {
  try {
    const movies = await readValue();
    res.status(200).json(JSON.parse(movies));
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const putDescription = async (req, res) => {
  try {
    const { id, description } = req.body;
    const movies = await readValue();
    const jsonMovies = JSON.parse(movies);
    const newData = jsonMovies.movies.map((item) => {
      if (item.id.toString() === id.toString()) {
        res.status(200);
        if (item.description === description) {
          res.json({ message: "Value to be updated is same as before, hence not updating it." });
          return;
        } else {
          item.description = description;
        }
      }
      return item;
    });
    if (res.statusCode === 200) {
      writeValue(newData);
      res.json({ message: "Success", newData });}
    else
      res.status(404).json({ message: `Id: "${id}" not found in database.` });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
