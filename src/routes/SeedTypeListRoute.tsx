import React from "react";
import { FirestoreCollection } from "react-firestore";

import MenuAppBar from "../components/MenuAppBar";
import SeedTypeList from "../components/SeedTypes/SeedTypeList";
import { SeedTypeCollectionProps } from "../models/SeedType";

export default function SeedTypeListRoute() {
  return (
    <>
      <MenuAppBar title="Seed Types" />
      <FirestoreCollection
        path="seedTypes"
        sort="name"
        render={({ data, isLoading }: SeedTypeCollectionProps) => (
          <SeedTypeList isLoading={isLoading} data={data} />
        )}
      />
    </>
  );
}
