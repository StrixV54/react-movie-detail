const url = import.meta.env.VITE_BASEPATH || "http://localhost:5000/";

export const getMoviesList = async (): Promise<[] | undefined> => {
  try {
    const localStorageCache: string | null = localStorage.getItem(
      "react-movie-movielist"
    );
    const isUpdated: string | null = localStorage.getItem(
      "react-movie-isupdated"
    );

    let result = null;
    if (localStorageCache && isUpdated === null) {
      result = JSON.parse(localStorageCache);
    } else {
      const res = await fetch(url + "api/getmovies");
      let outputList = await res.json();
      outputList = outputList?.movies;
      if (!outputList) throw new Error("No Movie List returned back");
      localStorage.setItem("react-movie-movielist", JSON.stringify(outputList));
      localStorage.removeItem("react-movie-isupdated");
      result = outputList;
    }
    return result;
  } catch (error) {
    console.log("Something went wrong", error);
  }
};

export const postDetails = async (
  id: string,
  description: string
): Promise<void> => {
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
      localStorage.setItem("react-movie-isupdated", "yes");
      // console.log("New Movie Data : ", result.newData);
    }
  } catch (error) {
    console.log("Something went wrong", error);
  }
};
