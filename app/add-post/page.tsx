"use client";

import { Input } from "@/app/components/ui/form/Input";
import { useAppForm } from "@/app/hooks/useAppForm";
import { Label } from "@/app/components/ui/form/Label";
import { useState } from "react";
import { Button } from "../components/ui/Button";
import Image from "next/image";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormField } from "../components/ui/form/FormField";

const schema = z.object({ name: z.string(), thumbnailUrl: z.string().url() });

type AddPostForm = z.infer<typeof schema>;

const initialImageState = { isLoaded: false, isError: false };

const AddPostPage = () => {
  const { control, watch, getFieldState, formState } = useAppForm<AddPostForm>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", thumbnailUrl: "" },
    mode: "onChange",
  });

  const [imageState, setImageState] = useState(initialImageState);

  const handleLoadImage = () =>
    setImageState({ ...imageState, isLoaded: true });

  const handleErrorImage = () =>
    setImageState({ isLoaded: false, isError: true });

  const handleResetImageState = () => setImageState({ ...initialImageState });

  return (
    <form className="max-w-2xl">
      <FormField
        control={control}
        name="name"
        render={({ field: { name, ...rest } }) => (
          <Label htmlFor={name}>
            Name
            <Input id={name} {...rest} />
          </Label>
        )}
      />
      <div className="mb-4" />
      <div>
        <FormField
          control={control}
          name="thumbnailUrl"
          render={({ field: { name, onChange, ...rest } }) => (
            <Label htmlFor={name}>
              Thumbnail URL
              <Input
                id={name}
                {...rest}
                onChange={(e) => {
                  onChange(e);
                  if (!imageState.isLoaded && !imageState.isError) return;
                  handleResetImageState();
                }}
              />
            </Label>
          )}
        />
        <div className="mb-4" />
        <Button
          variant="outline"
          disabled={getFieldState("thumbnailUrl", formState).invalid}
          onClick={handleLoadImage}
          type="button"
        >
          Preview Thumbnail
        </Button>
        {imageState.isError && (
          <>
            <div className="mb-4" />
            <p className="text-red-500">
              There was an error when loading your image. Please try again!
            </p>
          </>
        )}
        {imageState.isLoaded && (
          <>
            <div className="mb-4" />
            <div className="max-w-80">
              <Image
                src={watch("thumbnailUrl")}
                fill={true}
                alt="post thumbnail"
                objectFit="cover  "
                className="rounded-md !relative"
                onError={handleErrorImage}
              />
            </div>
          </>
        )}
      </div>
    </form>
  );
};

export default AddPostPage;
