import { ARTIFACTS_VIEW, MUSEUMS_VIEW, MONUMENT_VIEW } from "./actionsTypes";

export function switchToArtifactView() {
  return {
    type: ARTIFACTS_VIEW
  };
}

export function switchToMuseumView() {
  return {
    type: MUSEUMS_VIEW
  };
}

export function switchToMonumentView() {
  return {
    type: MONUMENT_VIEW
  };
}
