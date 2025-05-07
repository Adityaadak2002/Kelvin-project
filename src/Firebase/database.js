import { database } from './firebase';

// Function to write data to the database
export const writeData = async (path, data) => {
  try {
    await database.ref(path).set(data);
    console.log("Data written successfully!");
  } catch (error) {
    console.error("Data write error:", error.message);
  }
};

// Function to read data from the database
export const readData = async (path) => {
  try {
    const snapshot = await database.ref(path).once('value');
    return snapshot.val();
  } catch (error) {
    console.error("Data read error:", error.message);
  }
};
