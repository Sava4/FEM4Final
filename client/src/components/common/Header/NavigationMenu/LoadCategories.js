import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCategoriesList } from "../../../../store/headerMenu";

export const LoadCategories = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategoriesList());
  }, []);

  return "";
};
