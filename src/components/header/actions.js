import { ARTIFACTS_VIEW, MUSEUMS_VIEW, SIGN_VIEW } from "./actionsTypes";

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

export function switchToSignUpView() {
  return {
    type: SIGN_VIEW
  };
}
