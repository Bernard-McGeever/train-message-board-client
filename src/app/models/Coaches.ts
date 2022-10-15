import {Toilet} from "./Toilet";

export interface Coaches {
  coachClass: string;
  toilet: Toilet | null,
  loading: number;
  loadingSpecified: boolean;
  number: string;
}
