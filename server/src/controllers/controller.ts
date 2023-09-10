import { readValue, writeValue } from "./mongoreader";
import { Request, Response } from "express";

export const getMovies = async (req: Request, res: Response): Promise<void> => {
  try {
    const movies = await readValue();
    res.status(200).json({ movies });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const putDescription = async (req: Request, res: Response): Promise<void> => {
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
    const result = await writeValue(id, description);
    console.log(result);
    res
      .status(200)
      .json({ message: "Successfully Updated", db_response: result });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};
