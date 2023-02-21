import { APIGatewayProxyHandler } from "aws-lambda";
import { clientDynanoDB } from "../utils/dynamoDBClient";
import { v4 as uuid } from "uuid";

interface IBodyRequest {
  title: string,
  deadline: Date,
}

interface ICreateDTO {
  id: string;
  user_id: string;
  title: string;
  done: boolean;
  deadline: Date;
}

export const handler: APIGatewayProxyHandler = async (event) => {
  try {
    const { user_id } = event.pathParameters;
    const { title, deadline } = JSON.parse(event.body) as IBodyRequest;

    const todo:ICreateDTO = {
      id: uuid(),
      user_id: user_id,
      title: title,
      done: false,
      deadline: deadline
    }

    await clientDynanoDB.put({
      TableName: "to_dos",
      Item: {
        id: todo.id,
        user_id: todo.user_id,
        title: todo.title,
        done: todo.done,
        deadline: todo.deadline,
      }
    }).promise();

    return {
      statusCode: 201,
      body: JSON.stringify({
        message: "ToDo created successfully!",
        todo,
      }),
      headers: {
        "Content-type": "application/json",
      }
    }
  } catch (error) {
    console.log("Erro: ", error)
  }
};