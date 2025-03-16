"use client";

import { Controller } from "react-hook-form";
import { Input } from "@/app/components/ui/form/Input";
import { useAppForm } from "@/app/hooks/useAppForm";
import { Label } from "@/app/components/ui/form/Label";

const AddPostPage = () => {
  const { control } = useAppForm<{ name: string }>();

  return (
    <div>
      <Controller
        control={control}
        name="name"
        render={({ field: { name, ...rest } }) => (
          <Label htmlFor={name}>
            Name
            <Input id={name} {...rest} />
          </Label>
        )}
      />
    </div>
  );
};

export default AddPostPage;
