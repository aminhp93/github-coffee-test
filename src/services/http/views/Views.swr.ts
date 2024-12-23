import { useCallback, useMemo } from "react";
import useSWR, { MutatorOptions, useSWRConfig, SWRConfiguration } from "swr";
import {
  CreateViewRequest,
  CreateViewRequestSchema,
  CreateViewResponseSchema,
  DeleteViewResponseSchema,
  ListViewsResponseSchema,
  ReadViewResponseSchema,
  UpdateViewRequest,
  UpdateViewRequestSchema,
  UpdateViewResponseSchema,
  ViewsType,
} from "./Views.schema";
import { ViewsService } from "./Views.services";
import { useNetwork } from "@/hooks/useNetwork";
import { errorLog } from "@/utils/logger";

export const useListViews = (
  type: ViewsType = "process-view",
  config?: SWRConfiguration
) => {
  const { controllerId } = useNetwork();

  const { data, ...others } = useSWR(
    controllerId ? `list-views/filter=${type}` : null,
    () => ViewsService.listViews(controllerId, type),
    config
  );

  const parsedData = useMemo(() => {
    if (others.isLoading || !controllerId) return undefined;
    try {
      return ListViewsResponseSchema.parse(data);
    } catch (error) {
      errorLog("Error while parsing data", error);
      return undefined;
    }
  }, [controllerId, data, others.isLoading]);

  return {
    data: parsedData,
    ...others,
  };
};

/**
 * fetch view data
 */
export const useReadView = (
  viewId: string | undefined,
  config?: SWRConfiguration
) => {
  const { controllerId } = useNetwork();
  const { data, ...others } = useSWR(
    controllerId && viewId ? `view/${viewId}` : null,
    () => (viewId ? ViewsService.readView(controllerId, viewId) : undefined),
    config
  );

  const parsedData = useMemo(() => {
    if (others.isLoading || data === undefined || !controllerId)
      return undefined;
    try {
      return ReadViewResponseSchema.parse(data);
    } catch (error) {
      errorLog("Error while parsing data", error);
      return undefined;
    }
  }, [controllerId, data, others.isLoading]);

  return {
    data: parsedData,
    ...others,
  };
};

/**
 * get view data on demand without revalidating cache
 */
export const useGetView = () => {
  const { controllerId } = useNetwork();
  const { mutate } = useSWRConfig();

  return useCallback(
    async (viewId: string, options?: MutatorOptions) => {
      try {
        const res = await mutate(
          controllerId ? `view/${viewId}` : null,
          () => ViewsService.readView(controllerId, viewId),
          options
        );
        return ReadViewResponseSchema.parse(res);
      } catch (error) {
        errorLog("Error while parsing data", error);
        return undefined;
      }
    },
    [controllerId, mutate]
  );
};

export const useUpdateView = () => {
  const { controllerId } = useNetwork();
  const { mutate } = useSWRConfig();

  return useCallback(
    async (
      viewId: string,
      data: UpdateViewRequest,
      options?: MutatorOptions
    ) => {
      try {
        const res = await mutate(
          controllerId ? `view/${viewId}` : null,
          () =>
            ViewsService.updateView(
              controllerId,
              viewId,
              UpdateViewRequestSchema.parse(data)
            ),
          options
        );
        return UpdateViewResponseSchema.parse(res);
      } catch (error) {
        errorLog("Error while parsing data", error);
        return undefined;
      }
    },
    [controllerId, mutate]
  );
};

export const useCreateView = () => {
  const { controllerId } = useNetwork();
  const { mutate } = useSWRConfig();

  return useCallback(
    async (data: CreateViewRequest, options?: MutatorOptions) => {
      try {
        const res = await mutate(
          controllerId ? `create-view` : null,
          () =>
            ViewsService.createView(
              controllerId,
              CreateViewRequestSchema.parse(data)
            ),
          options
        );
        return CreateViewResponseSchema.parse(res);
      } catch (error) {
        errorLog("Error while parsing data", error);
        return undefined;
      }
    },
    [controllerId, mutate]
  );
};

export const useDeleteView = () => {
  const { controllerId } = useNetwork();
  const { mutate } = useSWRConfig();

  return useCallback(
    async (viewId: string, options?: MutatorOptions) => {
      try {
        const res = await mutate(
          controllerId ? `delete-view` : null,
          () => ViewsService.deleteView(controllerId, viewId),
          options
        );
        return DeleteViewResponseSchema.parse(res);
      } catch (error) {
        errorLog("Error while parsing data", error);
        return undefined;
      }
    },
    [controllerId, mutate]
  );
};
