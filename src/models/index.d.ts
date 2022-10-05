import { ModelInit, MutableModel } from "@aws-amplify/datastore";

type DogSchemaMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class DogSchema {
  readonly id: string;
  readonly dogName: string;
  readonly dogSize?: string | null;
  readonly dogYears?: number | null;
  readonly dogMonths?: number | null;
  readonly dogWeight?: number | null;
  readonly dogAge?: number | null;
  readonly dogAgeGroup?: string | null;
  readonly dogSex?: string | null;
  readonly dogLikes?: (string | null)[] | null;
  readonly dogDislikes?: (string | null)[] | null;
  readonly dogParks?: string | null;
  readonly ownerId?: string | null;
  readonly friendsArray?: (string | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<DogSchema, DogSchemaMetaData>);
  static copyOf(source: DogSchema, mutator: (draft: MutableModel<DogSchema, DogSchemaMetaData>) => MutableModel<DogSchema, DogSchemaMetaData> | void): DogSchema;
}