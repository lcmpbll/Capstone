/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getDogSchema = /* GraphQL */ `
  query GetDogSchema($id: ID!) {
    getDogSchema(id: $id) {
      id
      dogName
      dogSize
      dogYears
      dogMonths
      dogWeight
      dogAge
      atThePark
      startTimeAtPark
      dogAgeGroup
      dogSex
      dogLikes
      dogDislikes
      dogParks
      ownerId
      friendsArray
      createdAt
      updatedAt
    }
  }
`;
export const listDogSchemas = /* GraphQL */ `
  query ListDogSchemas(
    $filter: ModelDogSchemaFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDogSchemas(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        dogName
        dogSize
        dogYears
        dogMonths
        dogWeight
        dogAge
        atThePark
        startTimeAtPark
        dogAgeGroup
        dogSex
        dogLikes
        dogDislikes
        dogParks
        ownerId
        friendsArray
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
