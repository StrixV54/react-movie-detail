import { client, collection } from "../index.js";

export const readValue = async () => {
  try {
    const items = await collection.find({}).toArray();
    return items;
  } catch (error) {
    console.error("Error in reading from MongoDB", err);
  }
};

export const writeValue = async (id, newValue) => {
  try {
    const result = await collection.updateOne(
      { id: Number(id) },
      { $set: { description: newValue } }
    );
    return result;
  } catch (error) {
    console.error("Error in updating in MongoDB", err);
  }
};
