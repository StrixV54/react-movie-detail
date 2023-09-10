import { collection } from "../index";


export const readValue = async (): Promise<[] | undefined> => {
  try {
    const items = await collection.find({}).toArray();
    return items as [];
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.error("Error in reading from MongoDB", error);
  }
};

export const writeValue = async (
  id: string,
  newValue: string
): Promise<object | undefined> => {
  try {
    const result = await collection.updateOne(
      { id: Number(id) },
      { $set: { description: newValue } }
    );
    return result as object;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.error("Error in updating in MongoDB", error);
  }
};
