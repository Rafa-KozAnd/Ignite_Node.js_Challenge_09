import { APIGatewayProxyHandler } from "aws-lambda";
import { clientDynanoDB } from "../utils/dynamoDBClient";

export const handler: APIGatewayProxyHandler = async (event) => {
    try {
        const { user_id } = event.pathParameters;
  
        const response = await clientDynanoDB.scan({
        TableName: "to_dos",
        FilterExpression: "user_id = :user_id",
        ExpressionAttributeValues: {
            ":user_id": user_id,
        }
        }).promise();
    
        const todos = response.Items;
    
        if (!todos) {
            return {
                statusCode: 400,
                body: JSON.stringify({
                message: 'There is no todo for this user',
                }),
            }
        }
    
        return {
            statusCode: 200,
            body: JSON.stringify({
                todos,
            }),
        }
    } catch (error) {
        console.log("Error: ", error)
    }
  }