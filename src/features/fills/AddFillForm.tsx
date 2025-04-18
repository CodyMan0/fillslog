"use client";

import { useForm } from "react-hook-form";

import {
  Button,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
  Input,
  Label,
} from "@/shared/ui";

import { useRouter } from "next/navigation";

const AddFillForm = () => {
  const form = useForm({
    mode: "onChange",
  });

  const router = useRouter();

  return (
    <Form {...form}>
      <div className="flex flex-col gap-4">
        <FormField
          control={form.control}
          name="oldPassword"
          render={({ field }) => (
            <FormItem>
              <Label>제목 *</Label>
              <FormControl>
                <Input
                  placeholder="Please enter your current password "
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="newPassword"
          render={({ field }) => (
            <FormItem>
              <Label>유튜브 영상 URL *</Label>
              <FormControl>
                <Input
                  placeholder="Please enter your new password"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="newPassword"
          render={({ field }) => (
            <FormItem>
              <Label>메모</Label>
              <FormControl>
                <Input
                  placeholder="Please enter your new password"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="newPassword"
          render={({ field }) => (
            <FormItem>
              <Label>Tag</Label>
              <FormControl>
                <Input
                  placeholder="Please enter your new password"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          onClick={form.handleSubmit(() => router.push("/fills"))}
          className="text-black"
        >
          {" "}
          필인 추가
        </Button>
      </div>
    </Form>
  );
};

export default AddFillForm;
