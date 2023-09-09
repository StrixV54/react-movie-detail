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
    let isSame = false;
    const newData = jsonMovies.movies.map((item) => {
      if (item.id.toString() === id.toString()) {
        res.status(200);
        if (item.description === description) {
          isSame = true;
        } else {
          item.description = description;
        }
      }
      return item;
    });
    if (isSame) res.json({ message: "Value to be updated is same as before, hence not updating it." });
    else if (res.statusCode === 200 && !isSame) {
      writeValue(newData);
      res.json({ message: "Successfully updated", newData });
    } else
      res.status(404).json({ message: `Id: "${id}" not found in database.` });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
