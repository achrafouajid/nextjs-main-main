"use client";
import { useState, useEffect } from "react";
import { useFormik } from "formik";
import Input from "@/components/Input";
import { useRouter } from "next/navigation";
import * as Yup from "yup";

export default function ForgotPasswordForm() {
  const router = useRouter();
  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
  });
  const [countdown, setCountdown] = useState(0); // 5 minutes in seconds
  const [successMessage, setSuccessMessage] = useState("");

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema,
    onSubmit(values, formikHelpers) {
      setTimeout(() => {
        setSuccessMessage(
          `Email sent successfully to ${values.email}. Please check your spam folder. If you encounter any issues, contact us.`
        );
        setCountdown(300);
      }, 1000); // Simulating an asynchronous operation
    },
  });

  useEffect(() => {
    let timer: string | number | NodeJS.Timeout | undefined;

    if (countdown > 0) {
      timer = setTimeout(() => {
        setCountdown((prevCountdown) => prevCountdown - 1);
      }, 1000);
    } else clearTimeout(timer);
    return () => {
      clearTimeout(timer);
    };
  }, [countdown]);
  const isButtonDisabled = countdown > 0;
  return (
    <>
      <div className="mb-4 text-white font-bold text-xl text-center">
        Forgot Password
      </div>
      <form onSubmit={formik.handleSubmit}>
        <Input
          label="Email Address"
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
        <div className="flex items-center justify-between mt-4">
          <button
            type="submit"
            disabled={isButtonDisabled}
            className={`${
              isButtonDisabled
                ? "bg-gray-400"
                : "bg-green-600 hover:bg-green-400"
            } text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}
          >
            {isButtonDisabled
              ? `Resend in ${Math.floor(countdown / 60)}:${(countdown % 60)
                  .toString()
                  .padStart(2, "0")}`
              : "Send Verification"}
          </button>
        </div>
      </form>
      {successMessage && (
        <div className="mt-4 text-black">{successMessage}</div>
      )}
    </>
  );
}
