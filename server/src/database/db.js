import mongoose from "mongoose";
import colors from "colors";

const connnectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB);
    console.log(
      `A conexação com o banco de dados MongoDB - ${mongoose.connection.host} - foi realizada com sucesso `
        .bgBlue.black
    );
  } catch (error) {
    console.log(
      `Algum erro foi encontrado ao realizar a conexação com o banco de dados ${error}`
        .bgRed.black
    );
  }
};

export default connnectDB;
