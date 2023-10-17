import React from "react";

type Props = {};

export default function Loading({}: Props) {
  return (
    <div className="flex justify-center mt-12">
      <h1 className="text-2xl">loading...</h1>
    </div>
  );
}
