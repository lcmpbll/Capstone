/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { fetchByPath, validateField } from "./utils";
import { DogSchema } from "../models";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import {
  Badge,
  Button,
  Divider,
  Flex,
  Grid,
  Icon,
  ScrollView,
  Text,
  TextField,
  useTheme,
} from "@aws-amplify/ui-react";
import { DataStore } from "aws-amplify";
function ArrayField({
  items = [],
  onChange,
  label,
  inputFieldRef,
  children,
  hasError,
  setFieldValue,
  currentFieldValue,
  defaultFieldValue,
}) {
  const { tokens } = useTheme();
  const [selectedBadgeIndex, setSelectedBadgeIndex] = React.useState();
  const [isEditing, setIsEditing] = React.useState();
  React.useEffect(() => {
    if (isEditing) {
      inputFieldRef?.current?.focus();
    }
  }, [isEditing]);
  const removeItem = async (removeIndex) => {
    const newItems = items.filter((value, index) => index !== removeIndex);
    await onChange(newItems);
    setSelectedBadgeIndex(undefined);
  };
  const addItem = async () => {
    if (
      (currentFieldValue !== undefined ||
        currentFieldValue !== null ||
        currentFieldValue !== "") &&
      !hasError
    ) {
      const newItems = [...items];
      if (selectedBadgeIndex !== undefined) {
        newItems[selectedBadgeIndex] = currentFieldValue;
        setSelectedBadgeIndex(undefined);
      } else {
        newItems.push(currentFieldValue);
      }
      await onChange(newItems);
      setIsEditing(false);
    }
  };
  return (
    <React.Fragment>
      {isEditing && children}
      {!isEditing ? (
        <>
          <Text>{label}</Text>
          <Button
            onClick={() => {
              setIsEditing(true);
            }}
          >
            Add item
          </Button>
        </>
      ) : (
        <Flex justifyContent="flex-end">
          {(currentFieldValue || isEditing) && (
            <Button
              children="Cancel"
              type="button"
              size="small"
              onClick={() => {
                setFieldValue(defaultFieldValue);
                setIsEditing(false);
                setSelectedBadgeIndex(undefined);
              }}
            ></Button>
          )}
          <Button
            size="small"
            variation="link"
            color={tokens.colors.brand.primary[80]}
            isDisabled={hasError}
            onClick={addItem}
          >
            {selectedBadgeIndex !== undefined ? "Save" : "Add"}
          </Button>
        </Flex>
      )}
      {!!items?.length && (
        <ScrollView height="inherit" width="inherit" maxHeight={"7rem"}>
          {items.map((value, index) => {
            return (
              <Badge
                key={index}
                style={{
                  cursor: "pointer",
                  alignItems: "center",
                  marginRight: 3,
                  marginTop: 3,
                  backgroundColor:
                    index === selectedBadgeIndex ? "#B8CEF9" : "",
                }}
                onClick={() => {
                  setSelectedBadgeIndex(index);
                  setFieldValue(items[index]);
                  setIsEditing(true);
                }}
              >
                {value.toString()}
                <Icon
                  style={{
                    cursor: "pointer",
                    paddingLeft: 3,
                    width: 20,
                    height: 20,
                  }}
                  viewBox={{ width: 20, height: 20 }}
                  paths={[
                    {
                      d: "M10 10l5.09-5.09L10 10l5.09 5.09L10 10zm0 0L4.91 4.91 10 10l-5.09 5.09L10 10z",
                      stroke: "black",
                    },
                  ]}
                  ariaLabel="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    removeItem(index);
                  }}
                />
              </Badge>
            );
          })}
        </ScrollView>
      )}
      <Divider orientation="horizontal" marginTop={5} />
    </React.Fragment>
  );
}
export default function DogSchemaCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onCancel,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    dogName: undefined,
    dogSize: undefined,
    dogYears: undefined,
    dogMonths: undefined,
    dogWeight: undefined,
    dogAge: undefined,
    dogAgeGroup: undefined,
    dogSex: undefined,
    dogLikes: [],
    dogDislikes: [],
    dogParks: undefined,
    ownerId: undefined,
    friendsArray: [],
  };
  const [dogName, setDogName] = React.useState(initialValues.dogName);
  const [dogSize, setDogSize] = React.useState(initialValues.dogSize);
  const [dogYears, setDogYears] = React.useState(initialValues.dogYears);
  const [dogMonths, setDogMonths] = React.useState(initialValues.dogMonths);
  const [dogWeight, setDogWeight] = React.useState(initialValues.dogWeight);
  const [dogAge, setDogAge] = React.useState(initialValues.dogAge);
  const [dogAgeGroup, setDogAgeGroup] = React.useState(
    initialValues.dogAgeGroup
  );
  const [dogSex, setDogSex] = React.useState(initialValues.dogSex);
  const [dogLikes, setDogLikes] = React.useState(initialValues.dogLikes);
  const [dogDislikes, setDogDislikes] = React.useState(
    initialValues.dogDislikes
  );
  const [dogParks, setDogParks] = React.useState(initialValues.dogParks);
  const [ownerId, setOwnerId] = React.useState(initialValues.ownerId);
  const [friendsArray, setFriendsArray] = React.useState(
    initialValues.friendsArray
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setDogName(initialValues.dogName);
    setDogSize(initialValues.dogSize);
    setDogYears(initialValues.dogYears);
    setDogMonths(initialValues.dogMonths);
    setDogWeight(initialValues.dogWeight);
    setDogAge(initialValues.dogAge);
    setDogAgeGroup(initialValues.dogAgeGroup);
    setDogSex(initialValues.dogSex);
    setDogLikes(initialValues.dogLikes);
    setCurrentDogLikesValue(undefined);
    setDogDislikes(initialValues.dogDislikes);
    setCurrentDogDislikesValue(undefined);
    setDogParks(initialValues.dogParks);
    setOwnerId(initialValues.ownerId);
    setFriendsArray(initialValues.friendsArray);
    setCurrentFriendsArrayValue(undefined);
    setErrors({});
  };
  const [currentDogLikesValue, setCurrentDogLikesValue] =
    React.useState(undefined);
  const dogLikesRef = React.createRef();
  const [currentDogDislikesValue, setCurrentDogDislikesValue] =
    React.useState(undefined);
  const dogDislikesRef = React.createRef();
  const [currentFriendsArrayValue, setCurrentFriendsArrayValue] =
    React.useState(undefined);
  const friendsArrayRef = React.createRef();
  const validations = {
    dogName: [{ type: "Required" }],
    dogSize: [],
    dogYears: [],
    dogMonths: [],
    dogWeight: [],
    dogAge: [],
    dogAgeGroup: [],
    dogSex: [],
    dogLikes: [],
    dogDislikes: [],
    dogParks: [],
    ownerId: [],
    friendsArray: [],
  };
  const runValidationTasks = async (fieldName, value) => {
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          dogName,
          dogSize,
          dogYears,
          dogMonths,
          dogWeight,
          dogAge,
          dogAgeGroup,
          dogSex,
          dogLikes,
          dogDislikes,
          dogParks,
          ownerId,
          friendsArray,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          await DataStore.save(new DogSchema(modelFields));
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...rest}
      {...getOverrideProps(overrides, "DogSchemaCreateForm")}
    >
      <TextField
        label="Dog name"
        isRequired={true}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              dogName: value,
              dogSize,
              dogYears,
              dogMonths,
              dogWeight,
              dogAge,
              dogAgeGroup,
              dogSex,
              dogLikes,
              dogDislikes,
              dogParks,
              ownerId,
              friendsArray,
            };
            const result = onChange(modelFields);
            value = result?.dogName ?? value;
          }
          if (errors.dogName?.hasError) {
            runValidationTasks("dogName", value);
          }
          setDogName(value);
        }}
        onBlur={() => runValidationTasks("dogName", dogName)}
        errorMessage={errors.dogName?.errorMessage}
        hasError={errors.dogName?.hasError}
        {...getOverrideProps(overrides, "dogName")}
      ></TextField>
      <TextField
        label="Dog size"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              dogName,
              dogSize: value,
              dogYears,
              dogMonths,
              dogWeight,
              dogAge,
              dogAgeGroup,
              dogSex,
              dogLikes,
              dogDislikes,
              dogParks,
              ownerId,
              friendsArray,
            };
            const result = onChange(modelFields);
            value = result?.dogSize ?? value;
          }
          if (errors.dogSize?.hasError) {
            runValidationTasks("dogSize", value);
          }
          setDogSize(value);
        }}
        onBlur={() => runValidationTasks("dogSize", dogSize)}
        errorMessage={errors.dogSize?.errorMessage}
        hasError={errors.dogSize?.hasError}
        {...getOverrideProps(overrides, "dogSize")}
      ></TextField>
      <TextField
        label="Dog years"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        onChange={(e) => {
          let value = parseInt(e.target.value);
          if (isNaN(value)) {
            setErrors((errors) => ({
              ...errors,
              dogYears: "Value must be a valid number",
            }));
            return;
          }
          if (onChange) {
            const modelFields = {
              dogName,
              dogSize,
              dogYears: value,
              dogMonths,
              dogWeight,
              dogAge,
              dogAgeGroup,
              dogSex,
              dogLikes,
              dogDislikes,
              dogParks,
              ownerId,
              friendsArray,
            };
            const result = onChange(modelFields);
            value = result?.dogYears ?? value;
          }
          if (errors.dogYears?.hasError) {
            runValidationTasks("dogYears", value);
          }
          setDogYears(value);
        }}
        onBlur={() => runValidationTasks("dogYears", dogYears)}
        errorMessage={errors.dogYears?.errorMessage}
        hasError={errors.dogYears?.hasError}
        {...getOverrideProps(overrides, "dogYears")}
      ></TextField>
      <TextField
        label="Dog months"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        onChange={(e) => {
          let value = parseInt(e.target.value);
          if (isNaN(value)) {
            setErrors((errors) => ({
              ...errors,
              dogMonths: "Value must be a valid number",
            }));
            return;
          }
          if (onChange) {
            const modelFields = {
              dogName,
              dogSize,
              dogYears,
              dogMonths: value,
              dogWeight,
              dogAge,
              dogAgeGroup,
              dogSex,
              dogLikes,
              dogDislikes,
              dogParks,
              ownerId,
              friendsArray,
            };
            const result = onChange(modelFields);
            value = result?.dogMonths ?? value;
          }
          if (errors.dogMonths?.hasError) {
            runValidationTasks("dogMonths", value);
          }
          setDogMonths(value);
        }}
        onBlur={() => runValidationTasks("dogMonths", dogMonths)}
        errorMessage={errors.dogMonths?.errorMessage}
        hasError={errors.dogMonths?.hasError}
        {...getOverrideProps(overrides, "dogMonths")}
      ></TextField>
      <TextField
        label="Dog weight"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        onChange={(e) => {
          let value = parseInt(e.target.value);
          if (isNaN(value)) {
            setErrors((errors) => ({
              ...errors,
              dogWeight: "Value must be a valid number",
            }));
            return;
          }
          if (onChange) {
            const modelFields = {
              dogName,
              dogSize,
              dogYears,
              dogMonths,
              dogWeight: value,
              dogAge,
              dogAgeGroup,
              dogSex,
              dogLikes,
              dogDislikes,
              dogParks,
              ownerId,
              friendsArray,
            };
            const result = onChange(modelFields);
            value = result?.dogWeight ?? value;
          }
          if (errors.dogWeight?.hasError) {
            runValidationTasks("dogWeight", value);
          }
          setDogWeight(value);
        }}
        onBlur={() => runValidationTasks("dogWeight", dogWeight)}
        errorMessage={errors.dogWeight?.errorMessage}
        hasError={errors.dogWeight?.hasError}
        {...getOverrideProps(overrides, "dogWeight")}
      ></TextField>
      <TextField
        label="Dog age"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        onChange={(e) => {
          let value = parseInt(e.target.value);
          if (isNaN(value)) {
            setErrors((errors) => ({
              ...errors,
              dogAge: "Value must be a valid number",
            }));
            return;
          }
          if (onChange) {
            const modelFields = {
              dogName,
              dogSize,
              dogYears,
              dogMonths,
              dogWeight,
              dogAge: value,
              dogAgeGroup,
              dogSex,
              dogLikes,
              dogDislikes,
              dogParks,
              ownerId,
              friendsArray,
            };
            const result = onChange(modelFields);
            value = result?.dogAge ?? value;
          }
          if (errors.dogAge?.hasError) {
            runValidationTasks("dogAge", value);
          }
          setDogAge(value);
        }}
        onBlur={() => runValidationTasks("dogAge", dogAge)}
        errorMessage={errors.dogAge?.errorMessage}
        hasError={errors.dogAge?.hasError}
        {...getOverrideProps(overrides, "dogAge")}
      ></TextField>
      <TextField
        label="Dog age group"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              dogName,
              dogSize,
              dogYears,
              dogMonths,
              dogWeight,
              dogAge,
              dogAgeGroup: value,
              dogSex,
              dogLikes,
              dogDislikes,
              dogParks,
              ownerId,
              friendsArray,
            };
            const result = onChange(modelFields);
            value = result?.dogAgeGroup ?? value;
          }
          if (errors.dogAgeGroup?.hasError) {
            runValidationTasks("dogAgeGroup", value);
          }
          setDogAgeGroup(value);
        }}
        onBlur={() => runValidationTasks("dogAgeGroup", dogAgeGroup)}
        errorMessage={errors.dogAgeGroup?.errorMessage}
        hasError={errors.dogAgeGroup?.hasError}
        {...getOverrideProps(overrides, "dogAgeGroup")}
      ></TextField>
      <TextField
        label="Dog sex"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              dogName,
              dogSize,
              dogYears,
              dogMonths,
              dogWeight,
              dogAge,
              dogAgeGroup,
              dogSex: value,
              dogLikes,
              dogDislikes,
              dogParks,
              ownerId,
              friendsArray,
            };
            const result = onChange(modelFields);
            value = result?.dogSex ?? value;
          }
          if (errors.dogSex?.hasError) {
            runValidationTasks("dogSex", value);
          }
          setDogSex(value);
        }}
        onBlur={() => runValidationTasks("dogSex", dogSex)}
        errorMessage={errors.dogSex?.errorMessage}
        hasError={errors.dogSex?.hasError}
        {...getOverrideProps(overrides, "dogSex")}
      ></TextField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              dogName,
              dogSize,
              dogYears,
              dogMonths,
              dogWeight,
              dogAge,
              dogAgeGroup,
              dogSex,
              dogLikes: values,
              dogDislikes,
              dogParks,
              ownerId,
              friendsArray,
            };
            const result = onChange(modelFields);
            values = result?.dogLikes ?? values;
          }
          setDogLikes(values);
          setCurrentDogLikesValue(undefined);
        }}
        currentFieldValue={currentDogLikesValue}
        label={"Dog likes"}
        items={dogLikes}
        hasError={errors.dogLikes?.hasError}
        setFieldValue={setCurrentDogLikesValue}
        inputFieldRef={dogLikesRef}
        defaultFieldValue={undefined}
      >
        <TextField
          label="Dog likes"
          isRequired={false}
          isReadOnly={false}
          value={currentDogLikesValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.dogLikes?.hasError) {
              runValidationTasks("dogLikes", value);
            }
            setCurrentDogLikesValue(value);
          }}
          onBlur={() => runValidationTasks("dogLikes", currentDogLikesValue)}
          errorMessage={errors.dogLikes?.errorMessage}
          hasError={errors.dogLikes?.hasError}
          ref={dogLikesRef}
          {...getOverrideProps(overrides, "dogLikes")}
        ></TextField>
      </ArrayField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              dogName,
              dogSize,
              dogYears,
              dogMonths,
              dogWeight,
              dogAge,
              dogAgeGroup,
              dogSex,
              dogLikes,
              dogDislikes: values,
              dogParks,
              ownerId,
              friendsArray,
            };
            const result = onChange(modelFields);
            values = result?.dogDislikes ?? values;
          }
          setDogDislikes(values);
          setCurrentDogDislikesValue(undefined);
        }}
        currentFieldValue={currentDogDislikesValue}
        label={"Dog dislikes"}
        items={dogDislikes}
        hasError={errors.dogDislikes?.hasError}
        setFieldValue={setCurrentDogDislikesValue}
        inputFieldRef={dogDislikesRef}
        defaultFieldValue={undefined}
      >
        <TextField
          label="Dog dislikes"
          isRequired={false}
          isReadOnly={false}
          value={currentDogDislikesValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.dogDislikes?.hasError) {
              runValidationTasks("dogDislikes", value);
            }
            setCurrentDogDislikesValue(value);
          }}
          onBlur={() =>
            runValidationTasks("dogDislikes", currentDogDislikesValue)
          }
          errorMessage={errors.dogDislikes?.errorMessage}
          hasError={errors.dogDislikes?.hasError}
          ref={dogDislikesRef}
          {...getOverrideProps(overrides, "dogDislikes")}
        ></TextField>
      </ArrayField>
      <TextField
        label="Dog parks"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              dogName,
              dogSize,
              dogYears,
              dogMonths,
              dogWeight,
              dogAge,
              dogAgeGroup,
              dogSex,
              dogLikes,
              dogDislikes,
              dogParks: value,
              ownerId,
              friendsArray,
            };
            const result = onChange(modelFields);
            value = result?.dogParks ?? value;
          }
          if (errors.dogParks?.hasError) {
            runValidationTasks("dogParks", value);
          }
          setDogParks(value);
        }}
        onBlur={() => runValidationTasks("dogParks", dogParks)}
        errorMessage={errors.dogParks?.errorMessage}
        hasError={errors.dogParks?.hasError}
        {...getOverrideProps(overrides, "dogParks")}
      ></TextField>
      <TextField
        label="Owner id"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              dogName,
              dogSize,
              dogYears,
              dogMonths,
              dogWeight,
              dogAge,
              dogAgeGroup,
              dogSex,
              dogLikes,
              dogDislikes,
              dogParks,
              ownerId: value,
              friendsArray,
            };
            const result = onChange(modelFields);
            value = result?.ownerId ?? value;
          }
          if (errors.ownerId?.hasError) {
            runValidationTasks("ownerId", value);
          }
          setOwnerId(value);
        }}
        onBlur={() => runValidationTasks("ownerId", ownerId)}
        errorMessage={errors.ownerId?.errorMessage}
        hasError={errors.ownerId?.hasError}
        {...getOverrideProps(overrides, "ownerId")}
      ></TextField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              dogName,
              dogSize,
              dogYears,
              dogMonths,
              dogWeight,
              dogAge,
              dogAgeGroup,
              dogSex,
              dogLikes,
              dogDislikes,
              dogParks,
              ownerId,
              friendsArray: values,
            };
            const result = onChange(modelFields);
            values = result?.friendsArray ?? values;
          }
          setFriendsArray(values);
          setCurrentFriendsArrayValue(undefined);
        }}
        currentFieldValue={currentFriendsArrayValue}
        label={"Friends array"}
        items={friendsArray}
        hasError={errors.friendsArray?.hasError}
        setFieldValue={setCurrentFriendsArrayValue}
        inputFieldRef={friendsArrayRef}
        defaultFieldValue={undefined}
      >
        <TextField
          label="Friends array"
          isRequired={false}
          isReadOnly={false}
          value={currentFriendsArrayValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.friendsArray?.hasError) {
              runValidationTasks("friendsArray", value);
            }
            setCurrentFriendsArrayValue(value);
          }}
          onBlur={() =>
            runValidationTasks("friendsArray", currentFriendsArrayValue)
          }
          errorMessage={errors.friendsArray?.errorMessage}
          hasError={errors.friendsArray?.hasError}
          ref={friendsArrayRef}
          {...getOverrideProps(overrides, "friendsArray")}
        ></TextField>
      </ArrayField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={resetStateValues}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Cancel"
            type="button"
            onClick={() => {
              onCancel && onCancel();
            }}
            {...getOverrideProps(overrides, "CancelButton")}
          ></Button>
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
