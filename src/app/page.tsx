"use client";
import CardComponent from "./components/card";
import { Suspense, useEffect, useState } from "react";

async function Call1() {
  const start = performance.now();
  const res = await fetch("https://dummyjson.com/products/1");
  const end = performance.now();
  const elapsedTime = end - start;
  return <CardComponent title={1} time={await elapsedTime} />;
}
async function Call2() {
  const start = performance.now();
  const res = await fetch("https://dummyjson.com/products/2");
  const end = performance.now();
  const elapsedTime = end - start;
  return <CardComponent title={2} time={  await elapsedTime} />;
}
 
export default function Home() {
  return (
    <div className="flex flex-col content-center flex-wrap mt-12 gap-6">
      <Suspense fallback={<Skeleton />}>
        <Call1 />
      </Suspense>
      <Suspense fallback={<Skeleton />}>
        <Call2 />
      </Suspense>
    </div>
  );
}

const Skeleton = () => {
  return (
    <div className="border p-6 rounded-lg w-[300px] bg-gray-100 h-[110px]"></div>
  );
};
