import firebase from "../utils/firebase";

export const FIRESTORE_PATH = "seedTypes";

export type SeedType = {
  id: string;
  name: string;
  url: string;
  targetSeedDensityGrams: number;
  sproutsInDays: number;
  idealTempMin: number;
  idealTempMax: number;
  seedDepthIn: number;
  plantSpacingInches: number;
  fullSunMin: number;
  fullSunMax: number;
};

export const SeedTypeInitialState = {
  name: '',
  url: '',
  targetSeedDensityGrams: 35,
  sproutsInDays: 6,
  idealTempMin: 40,
  idealTempMax: 70,
  seedDepthIn: 0.25,
  plantSpacingInches: 6,
  fullSunMin: 4,
  fullSunMax: 8,
};

export type SeedTypeCollectionProps = {
  isLoading: boolean;
  data?: SeedType[];
}

export type SeedTypeDocumentProps = {
  isLoading: boolean;
  data: SeedType;
};

export function createSeedType(obj: Omit<SeedType, "id">) {
  firebase
    .firestore()
    .collection(FIRESTORE_PATH)
    .add(obj);
}

export function updateSeedType(id: string, obj: Omit<SeedType, "id">) {
  firebase
    .firestore()
    .collection(FIRESTORE_PATH)
    .doc(id)
    .update(obj);
}

export function deleteSeedType(id: string) {
  firebase
    .firestore()
    .collection(FIRESTORE_PATH)
    .doc(id)
    .delete();
}
