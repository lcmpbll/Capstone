/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createDogSchema = /* GraphQL */ `
  mutation CreateDogSchema(
    $input: CreateDogSchemaInput!
    $condition: ModelDogSchemaConditionInput
  ) {
    createDogSchema(input: $input, condition: $condition) {
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
      createdAt
      updatedAt
      friendsArray
      pendingFriends
    }
  }
`;
export const updateDogSchema = /* GraphQL */ `
  mutation UpdateDogSchema(
    $input: UpdateDogSchemaInput!
    $condition: ModelDogSchemaConditionInput
  ) {
    updateDogSchema(input: $input, condition: $condition) {
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
      createdAt
      updatedAt
      friendsArray
      pendingFriends
    }
  }
`;
export const deleteDogSchema = /* GraphQL */ `
  mutation DeleteDogSchema(
    $input: DeleteDogSchemaInput!
    $condition: ModelDogSchemaConditionInput
  ) {
    deleteDogSchema(input: $input, condition: $condition) {
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
      createdAt
      updatedAt
      friendsArray
      pendingFriends
    }
  }
`;
