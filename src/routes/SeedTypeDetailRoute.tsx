import React from "react";
import { RouteComponentProps } from "react-router";
import { FirestoreDocument } from "react-firestore";
import CircularProgress from "@material-ui/core/CircularProgress";

import DetailBar from "../components/DetailBar";
import { FIRESTORE_PATH, SeedTypeDocumentProps } from "../models/SeedType";
import SeedTypeDetail from "../components/SeedTypes/SeedTypeDetail";

type UrlParams = {
  id: string;
};
export default function SeedTypeDetailRoute({
  match
}: RouteComponentProps<UrlParams>) {
  return (
    <>
      <DetailBar backUrl="/seed_types" />
      <FirestoreDocument
        path={`${FIRESTORE_PATH}/${match.params.id}`}
        render={({ data }: SeedTypeDocumentProps) => {
          return !data ? <CircularProgress /> : <SeedTypeDetail data={data} />;
        }}
      />
    </>
  );
}
