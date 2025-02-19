import { ComponentProps } from "react";
import { Controller } from "react-hook-form";

type FormFieldProps = ComponentProps<typeof Controller>;

export const FormField = (props: FormFieldProps) => <Controller {...props} />;
