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
      dogAgeGroup
      dogSex
      dogLikes
      dogDislikes
      dogParks
      friendsArray
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
        dogAgeGroup
        dogSex
        dogLikes
        dogDislikes
        dogParks
        friendsArray
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncDogSchemas = /* GraphQL */ `
  query SyncDogSchemas(
    $filter: ModelDogSchemaFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncDogSchemas(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        dogName
        dogSize
        dogYears
        dogMonths
        dogWeight
        dogAge
        dogAgeGroup
        dogSex
        dogLikes
        dogDislikes
        dogParks
        friendsArray
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
