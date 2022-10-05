// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { DogSchema } = initSchema(schema);

export {
  DogSchema
};