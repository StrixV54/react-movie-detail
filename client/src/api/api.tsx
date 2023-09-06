const url = import.meta.env.VITE_BASEPATH || "http://localhost:5000/";

export const getMoviesList = async () => {
  try {
    const res = await fetch(url + "api/getmovies");
    const result = await res.json();
    return result.movies;
  } catch (error) {
    console.log("Something went wrong", error);
  }
};

export const postDetails = async (id: string, description: string) => {
  try {
    const res = await fetch(url + "api/updatedetails", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id,
        description,
      }),
    });
    // const result = await res.json();
    if (res.ok) {
      console.log(`Success :: updated movie with id: ${id}`);
      // console.log("New Movie Data : ", result.newData);
    }
  } catch (error) {
    console.log("Something went wrong", error);
  }
};
