import fs from "fs";

const fileName = "sampledata.json";

// using sampledata.json now
export const dummyData = [
  {
    id: 1,
    movie: "The Shawshank Redemption",
    rating: 9.2,
    description:
      "Over the course of several years, two convicts form a friendship, seeking consolation and, eventually, redemption through basic compassion.",
    category: "drama",
    imdb_url:
      "https://m.media-amazon.com/images/M/MV5BNDE3ODcxYzMtY2YzZC00NmNlLWJiNDMtZDViZWM2MzIxZDYwXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_QL75_UX280_CR0,3,280,414_.jpg",
  },
  {
    id: 2,
    movie: "The Godfather",
    rating: 9.2,
    description:
      "Don Vito Corleone, head of a mafia family, decides to hand over his empire to his youngest son Michael. However, his decision unintentionally puts the lives of his loved ones in grave danger.",
    category: "crime",
    imdb_url:
      "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_QL75_UY414_CR6,0,280,414_.jpg",
  },
  {
    id: 3,
    movie: "The Dark Knight",
    rating: 9,
    description:
      "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    category: "action",
    imdb_url:
      "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_QL75_UX280_CR0,0,280,414_.jpg",
  },
  {
    id: 4,
    movie: "Pulp Fiction",
    rating: 8.9,
    description:
      "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
    category: "crime",
    imdb_url:
      "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_QL75_UY414_CR2,0,280,414_.jpg",
  },
  {
    id: 5,
    movie: "The Lord of the Rings: The Return of the King",
    rating: 9,
    description:
      "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.",
    category: "drama",
    imdb_url:
      "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_QL75_UX280_CR0,0,280,414_.jpg",
  },
  {
    id: 6,
    movie: "The Good, the Bad and the Ugly",
    rating: 8.8,
    description:
      "A bounty hunting scam joins two men in an uneasy alliance against a third in a race to find a fortune in gold buried in a remote cemetery.",
    category: "action",
    imdb_url:
      "https://m.media-amazon.com/images/M/MV5BNjJlYmNkZGItM2NhYy00MjlmLTk5NmQtNjg1NmM2ODU4OTMwXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_QL75_UX280_CR0,3,280,414_.jpg",
  },
  {
    id: 7,
    movie: "Fight Club",
    rating: 8.8,
    description:
      "An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into much more.",
    category: "action",
    imdb_url:
      "https://m.media-amazon.com/images/M/MV5BODQ0OWJiMzktYjNlYi00MzcwLThlZWMtMzRkYTY4ZDgxNzgxXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_QL75_UX280_CR0,3,280,414_.jpg",
  },
  {
    id: 8,
    movie: "The Lord of the Rings: The Fellowship of the Ring",
    rating: 8.8,
    description:
      "A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.",
    category: "drama",
    imdb_url:
      "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_QL75_UX280_CR0,1,280,414_.jpg",
  },
  {
    id: 9,
    movie: "Forrest Gump",
    rating: 8.8,
    description:
      "The history of the United States from the 1950s to the '70s unfolds from the perspective of an Alabama man with an IQ of 75, who yearns to be reunited with his childhood sweetheart.",
    category: "drama",
    imdb_url:
      "https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_QL75_UY414_CR3,0,280,414_.jpg",
  },
  {
    id: 10,
    movie: "Inception",
    rating: 8.8,
    description:
      "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O., but his tragic past may doom the project and his team to disaster.",
    category: "action",
    imdb_url:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_QL75_UX280_CR0,0,280,414_.jpg",
  },
];

const readFile = (filePath) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, "utf8", (error, fileContent) => {
      if (error != null) {
        reject(error);
        return;
      }
      resolve(fileContent);
    });
  });
};

export const readValue = async () => {
  try {
    if (!fs.existsSync(fileName)) {
      const newValue = JSON.stringify({ movies: dummyData });
      fs.writeFileSync(fileName, newValue);
    }
    const data = await readFile(fileName);
    return data;
  } catch (error) {
    console.error("Error reading JSON file:", error);
    throw error;
  }
};

export const writeValue = (newValue) => {
  fs.readFile(fileName, "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    const jsonData = JSON.parse(data);
    jsonData.movies = newValue;
    const updatedData = JSON.stringify(jsonData, undefined, 2);
    fs.writeFile(fileName, updatedData, "utf8", (err) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log("File updated successfully.");
    });
  });
};
