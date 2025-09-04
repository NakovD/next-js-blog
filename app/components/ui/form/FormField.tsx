"use client";

import { ComponentProps } from "react";
import { Controller, FieldPath, FieldValues } from "react-hook-form";

type FormFieldProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> = ComponentProps<typeof Controller<TFieldValues, TName>>;

export const FormField = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>(
  props: FormFieldProps<TFieldValues, TName>
) => <Controller {...props} />;
