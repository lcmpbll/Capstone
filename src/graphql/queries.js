/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getDog = /* GraphQL */ `
  query GetDog($id: ID!) {
    getDog(id: $id) {
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
      ownerId
      friendsArray {
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
        ownerId
        friendsArray {
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
          ownerId
          createdAt
          updatedAt
          owner
        }
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listDogs = /* GraphQL */ `
  query ListDogs(
    $filter: ModelDogFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDogs(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
        ownerId
        friendsArray {
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
          ownerId
          createdAt
          updatedAt
          owner
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
