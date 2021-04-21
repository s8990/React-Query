import React, { useEffect, useState } from "react";
import { useQuery, useMutation, queryCache } from "react-query";
import * as api from "../api";

export const useAllProducts = () => {
  return useQuery("products", () => api.getAllProducts(), {
    refetchOnWindowFocus: false,
    refetchOnReconnect: true,
    // refetchOnError: true,
  });
};

export const useProduct = (id) => {
  return useQuery(["product", id], (_, id) => api.getProduct(id), {
    refetchOnWindowFocus: false,
    refetchOnReconnect: true,
    // refetchOnError: true,
  });
};

export const useDeleteProduct = () => {
  return useMutation((id) => api.deleteProduct(id), {
    onSuccess: (_, id) => {
      const products = queryCache.getQueryData("products");
      const data = products.filter((item) => item._id !== id);
      queryCache.setQueryData("products", data);
    },
  });
};

export const useUpdateProduct = () => {
  return useMutation((id) => api.updateProduct(id), {
    onSuccess: (_, { id, ...variables }) => {
      queryCache.refetchQueries("products");
      queryCache.refetchQueries(["product", id]);
    },
  });
};
