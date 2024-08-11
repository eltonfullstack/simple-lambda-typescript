import { Context, APIGatewayProxyResult } from 'aws-lambda';

interface IMessage {
    message: string
}

export const handler = async (event: IMessage, context: Context): Promise<APIGatewayProxyResult> => {
    
  return {
      statusCode: 200,
      body: JSON.stringify({
          message: event.message,
      }),
   };
   
};