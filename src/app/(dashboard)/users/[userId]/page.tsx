import React from "react";

export default function page(props: {
  params: { userId: string };
  searchParams: any;
}) {
  props.params.userId;
  return <div>page</div>;
}
