import React from "react";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getCategoriesList } from "../../../../store/headerMenu";

export const OnLoadCategories = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategoriesList());
  }, []);

  return "";
};
