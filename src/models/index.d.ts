import { ModelInit, MutableModel } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";

type DogSchemaMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type EagerDogSchema = {
  readonly id: string;
  readonly dogName: string;
  readonly dogSize?: string | null;
  readonly dogYears?: number | null;
  readonly dogMonths?: number | null;
  readonly dogWeight?: number | null;
  readonly dogAge?: number | null;
  readonly atThePark?: boolean | null;
  readonly startTimeAtPark?: string | null;
  readonly dogAgeGroup?: string | null;
  readonly dogSex?: string | null;
  readonly dogLikes?: (string | null)[] | null;
  readonly dogDislikes?: (string | null)[] | null;
  readonly dogParks?: string | null;
  readonly ownerId?: string | null;
  readonly friendsArray?: (string | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyDogSchema = {
  readonly id: string;
  readonly dogName: string;
  readonly dogSize?: string | null;
  readonly dogYears?: number | null;
  readonly dogMonths?: number | null;
  readonly dogWeight?: number | null;
  readonly dogAge?: number | null;
  readonly atThePark?: boolean | null;
  readonly startTimeAtPark?: string | null;
  readonly dogAgeGroup?: string | null;
  readonly dogSex?: string | null;
  readonly dogLikes?: (string | null)[] | null;
  readonly dogDislikes?: (string | null)[] | null;
  readonly dogParks?: string | null;
  readonly ownerId?: string | null;
  readonly friendsArray?: (string | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type DogSchema = LazyLoading extends LazyLoadingDisabled ? EagerDogSchema : LazyDogSchema

export declare const DogSchema: (new (init: ModelInit<DogSchema, DogSchemaMetaData>) => DogSchema) & {
  copyOf(source: DogSchema, mutator: (draft: MutableModel<DogSchema, DogSchemaMetaData>) => MutableModel<DogSchema, DogSchemaMetaData> | void): DogSchema;
}