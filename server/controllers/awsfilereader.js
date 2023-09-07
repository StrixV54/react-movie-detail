import AWS from "aws-sdk";

const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});

const bucketName = "reactmovieproject";
const fileName = "sampledata.json";

export const writeValue = (newValue) => {
  const jsonNewValue = { movies: newValue };
  const jsonContent = JSON.stringify(jsonNewValue, undefined, 2);

  const params = {
    Bucket: bucketName,
    Key: fileName,
    Body: jsonContent,
    ContentType: "application/json", // Specify the content type
  };

  s3.putObject(params, (err, data) => {
    if (err) {
      console.error("Error uploading JSON to S3:", err);
    } else {
      console.log("JSON object uploaded successfully:", data);
    }
  });
};

export const readValue = async () => {
  const params = {
    Bucket: bucketName,
    Key: fileName,
  };
  return await readFile(params);
};

const readFile = (params) => {
  return new Promise((resolve, reject) => {
    s3.getObject(params, (err, data) => {
      if (err) {
        reject(err);
        return;
      } else {
        const content = data.Body.toString();
        resolve(content);
      }
    });
  });
};
