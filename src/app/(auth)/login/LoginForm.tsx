"use client";
import { useFormik } from "formik";
import React from "react";
import Link from "next/link";
import Input from "@/components/Input";
import { useRouter } from "next/navigation";
import * as Yup from "yup";

export default function LoginForm() {
  const router = useRouter();
  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password has to be longer than 6 characters!")
      .required("Password is required!"),
  });
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit(values, formikHelpers) {
      values.email;
      router.push("/dashboard");
    },
  });

  return (
    <>
      <div className="mb-4 text-white font-bold text-xl text-center">Login</div>
      <form onSubmit={formik.handleSubmit}>
        <Input
          label="Email Adress"
          type="text"
          name="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        {formik.touched.email && formik.errors.email ? (
          <div>{formik.errors.email}</div>
        ) : null}
        <Input
          label="Password"
          type="password"
          name="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
        />
        {formik.touched.password && formik.errors.password ? (
          <div>{formik.errors.password}</div>
        ) : null}

        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-green-600 hover:bg-green-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Login
          </button>
          <Link
            className="inline-block align-baseline font-bold text-sm text-green-600 hover:text-green-400"
            href="/forgot-password"
          >
            Forgot Password?
          </Link>
        </div>
      </form>
    </>
  );
}
