"use client";

import { SubmitHandler, useForm } from "react-hook-form";

import {
  Button,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
  Input,
  Label,
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shared/ui";

import { useRouter } from "next/navigation";

import { FillPostDto } from "@/entites/fills/model";
import { FillsCount } from "@/app/api/fillsCount/api";

const AddFillForm = ({ category }: { category: FillsCount[] }) => {
  const form = useForm<FillPostDto>({
    mode: "onChange",
    defaultValues: {
      title: "", // ✅ 명확히 controlled 상태
      url: "",
      description: "",
      category: "1",
      tag: null,
    },
  });

  const router = useRouter();

  const onSubmit: SubmitHandler<FillPostDto> = async (data) => {
    console.log(data);
    // router.back();
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex w-full flex-col gap-4"
      >
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <Label>제목 *</Label>
              <FormControl>
                <Input placeholder="Please enter a title" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="url"
          render={({ field }) => (
            <FormItem>
              <Label>Source URL</Label>
              <FormControl>
                <Input placeholder="Please enter a Source URL" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <Label>설명</Label>
              <FormControl>
                <Input placeholder="Please enter a description" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="category"
          render={({ field }) => {
            return (
              <FormItem>
                <Label>Category</Label>
                <FormControl>
                  <Select onValueChange={(val) => field.onChange(Number(val))}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select a Category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        {category.map((item) => (
                          <SelectItem
                            key={item.category_id}
                            value={String(item.category_id)} // ✅ 고유한 값으로 지정
                          >
                            {item.category_name}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            );
          }}
        />

        <Button type="submit">필인 추가</Button>
      </form>
    </Form>
  );
};

export default AddFillForm;
