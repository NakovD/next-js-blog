"use client";

import { Controller } from "react-hook-form";
import { Input } from "@/app/components/ui/form/Input";
import { useAppForm } from "@/app/hooks/useAppForm";
import { Label } from "@/app/components/ui/form/Label";

const AddPostPage = () => {
  const { control } = useAppForm<{ name: string; thumbnailUrl: string }>();

  return (
    <form>
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
      <Controller
        control={control}
        name="thumbnailUrl"
        render={({ field: { name, ...rest } }) => (
          <Label htmlFor={name}>
            Thumbnail URL
            <Input id={name} {...rest} />
          </Label>
        )}
      />
    </form>
  );
};

export default AddPostPage;
