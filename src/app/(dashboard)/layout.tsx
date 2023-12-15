import React from "react";
import AdminLayout from "./_layouts/AdminLayout";
type userRole = "admin" | "user" | "promotor";
export default function layout(props: any) {
  const activeRole: userRole = "admin";
  switch (activeRole) {
    case "admin":
      return <AdminLayout {...props} />;

    default:
      return <AdminLayout {...props} />;
  }
}
