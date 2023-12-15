"use client";
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import CustomInput from "@/components/CustomInput";
import { ColorPicker } from "antd";

export default function Page() {
  const formik = useFormik({
    initialValues: {
      categoryName: "",
    },
    validationSchema: Yup.object({
      categoryName: Yup.string()
        .max(6, "Category name should not be more than 6 characters")
        .matches(/^[a-zA-Z]+$/, "Category name should contain only letters")
        .required("Category name is required"),
    }),
    onSubmit: (values) => {
      console.log("Form submitted with values:", values);
    },
  });

  return (
    <div>
      <div className="mb-4 font-bold text-xl">Ajouter une catégorie :</div>
      <div>
        <form onSubmit={formik.handleSubmit}>
          <div className="mb-4 font-bold text-l">
            Intitulé de la catégorie du blog :
          </div>
          <CustomInput
            type="text"
            label="Santé"
            id="categoryName"
            name="categoryName"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.categoryName}
          />

          {formik.touched.categoryName && formik.errors.categoryName ? (
            <div className="text-red-500">{formik.errors.categoryName}</div>
          ) : null}

          <div className="mb-4 font-bold text-l">Choisir Couleur </div>
          <div className="flex flex-row items-center">
            <ColorPicker size="large" showText className="mb-4" />
            <a className="text-green-600 hover:text-green-400"> Visualiser </a>
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-green-600 hover:bg-green-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Créer Catégorie
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
