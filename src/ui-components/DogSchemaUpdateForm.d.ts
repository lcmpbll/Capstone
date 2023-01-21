/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { DogSchema } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type DogSchemaUpdateFormInputValues = {
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
export declare type DogSchemaUpdateFormValidationValues = {
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
export declare type DogSchemaUpdateFormOverridesProps = {
    DogSchemaUpdateFormGrid?: FormProps<GridProps>;
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
export declare type DogSchemaUpdateFormProps = React.PropsWithChildren<{
    overrides?: DogSchemaUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    dogSchema?: DogSchema;
    onSubmit?: (fields: DogSchemaUpdateFormInputValues) => DogSchemaUpdateFormInputValues;
    onSuccess?: (fields: DogSchemaUpdateFormInputValues) => void;
    onError?: (fields: DogSchemaUpdateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: DogSchemaUpdateFormInputValues) => DogSchemaUpdateFormInputValues;
    onValidate?: DogSchemaUpdateFormValidationValues;
} & React.CSSProperties>;
export default function DogSchemaUpdateForm(props: DogSchemaUpdateFormProps): React.ReactElement;
