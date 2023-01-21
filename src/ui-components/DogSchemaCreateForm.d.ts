/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type DogSchemaCreateFormInputValues = {
    dogName?: string;
    dogSize?: string;
    dogYears?: number;
    dogMonths?: number;
    dogWeight?: number;
    dogAge?: number;
    atThePark?: boolean;
    startTimeAtPark?: string;
    dogAgeGroup?: string;
    dogSex?: string;
    dogLikes?: string[];
    dogDislikes?: string[];
    dogParks?: string;
    ownerId?: string;
    friendsArray?: string[];
};
export declare type DogSchemaCreateFormValidationValues = {
    dogName?: ValidationFunction<string>;
    dogSize?: ValidationFunction<string>;
    dogYears?: ValidationFunction<number>;
    dogMonths?: ValidationFunction<number>;
    dogWeight?: ValidationFunction<number>;
    dogAge?: ValidationFunction<number>;
    atThePark?: ValidationFunction<boolean>;
    startTimeAtPark?: ValidationFunction<string>;
    dogAgeGroup?: ValidationFunction<string>;
    dogSex?: ValidationFunction<string>;
    dogLikes?: ValidationFunction<string>;
    dogDislikes?: ValidationFunction<string>;
    dogParks?: ValidationFunction<string>;
    ownerId?: ValidationFunction<string>;
    friendsArray?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type DogSchemaCreateFormOverridesProps = {
    DogSchemaCreateFormGrid?: FormProps<GridProps>;
    dogName?: FormProps<TextFieldProps>;
    dogSize?: FormProps<TextFieldProps>;
    dogYears?: FormProps<TextFieldProps>;
    dogMonths?: FormProps<TextFieldProps>;
    dogWeight?: FormProps<TextFieldProps>;
    dogAge?: FormProps<TextFieldProps>;
    atThePark?: FormProps<SwitchFieldProps>;
    startTimeAtPark?: FormProps<TextFieldProps>;
    dogAgeGroup?: FormProps<TextFieldProps>;
    dogSex?: FormProps<TextFieldProps>;
    dogLikes?: FormProps<TextFieldProps>;
    dogDislikes?: FormProps<TextFieldProps>;
    dogParks?: FormProps<TextFieldProps>;
    ownerId?: FormProps<TextFieldProps>;
    friendsArray?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type DogSchemaCreateFormProps = React.PropsWithChildren<{
    overrides?: DogSchemaCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: DogSchemaCreateFormInputValues) => DogSchemaCreateFormInputValues;
    onSuccess?: (fields: DogSchemaCreateFormInputValues) => void;
    onError?: (fields: DogSchemaCreateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: DogSchemaCreateFormInputValues) => DogSchemaCreateFormInputValues;
    onValidate?: DogSchemaCreateFormValidationValues;
} & React.CSSProperties>;
export default function DogSchemaCreateForm(props: DogSchemaCreateFormProps): React.ReactElement;
