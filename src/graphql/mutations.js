/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createDog = /* GraphQL */ `
  mutation CreateDog(
    $input: CreateDogInput!
    $condition: ModelDogConditionInput
  ) {
    createDog(input: $input, condition: $condition) {
      id
      dogName
      dogSize
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
export const updateDog = /* GraphQL */ `
  mutation UpdateDog(
    $input: UpdateDogInput!
    $condition: ModelDogConditionInput
  ) {
    updateDog(input: $input, condition: $condition) {
      id
      dogName
      dogSize
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
export const deleteDog = /* GraphQL */ `
  mutation DeleteDog(
    $input: DeleteDogInput!
    $condition: ModelDogConditionInput
  ) {
    deleteDog(input: $input, condition: $condition) {
      id
      dogName
      dogSize
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
