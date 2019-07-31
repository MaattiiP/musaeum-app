import { GET_ARTIFACTS } from './actionsTypes';


export function saveArtifacts(payload) {
  return {
    type: GET_ARTIFACTS,
    artifact: payload
  }
}
