import { useCallback, useMemo } from "react";
import useSWR, { MutatorOptions, useSWRConfig } from "swr";
import { useNetwork } from "@/hooks/useNetwork";
import { errorLog } from "@/utils/logger";
import {
  CreateTagRequest,
  CreateTagRequestSchema,
  CreateTagResponseSchema,
  ListTagsResponseSchema,
} from "./Tags.schema";
import { TagService } from "./Tags.services";

export const useCreateTag = () => {
  const { controllerId } = useNetwork();
  const { mutate } = useSWRConfig();

  const createTag = useCallback(
    async (data: CreateTagRequest, options?: MutatorOptions) => {
      try {
        const res = await mutate(
          controllerId ? `create-tag` : null,
          () =>
            TagService.createTag(
              controllerId,
              CreateTagRequestSchema.parse(data)
            ),
          options
        );
        return CreateTagResponseSchema.parse(res);
      } catch (error) {
        errorLog("Error while parsing data", error);
        return undefined;
      }
    },
    [controllerId, mutate]
  );

  return createTag;
};

export const useDeleteTag = () => {
  const { controllerId } = useNetwork();
  const { mutate } = useSWRConfig();

  return (tagId: string, options?: MutatorOptions) =>
    mutate(
      controllerId ? `delete-tag` : null,
      () => TagService.deleteTag(controllerId, tagId),
      options
    );
};

export const useListTags = () => {
  const { controllerId } = useNetwork();

  const { data, ...others } = useSWR(controllerId ? `list-tags` : null, () =>
    TagService.listTags(controllerId)
  );

  const parsedData = useMemo(() => {
    if (others.isLoading || !controllerId) return undefined;
    try {
      return ListTagsResponseSchema.parse(data);
    } catch (error) {
      errorLog("Error while parsing data", error);
      return undefined;
    }
  }, [data, others.isLoading, controllerId]);

  return { data: parsedData, ...others };
};
