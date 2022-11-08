import {Toilet} from "./Toilet";

export interface Coach {
  coachClass: string;
  toilet: Toilet | null,
  loading: number;
  loadingSpecified: boolean;
  number: string;
}
