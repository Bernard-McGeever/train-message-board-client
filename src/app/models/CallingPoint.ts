import {Formation} from "./Formation";

export interface CallingPoint {
  locationName: string;
  crs: string;
  st: string;
  et: string;
  at: string | null;
  isCancelled: boolean
  length: number;
  detachFront: boolean;
  formation: Formation
  adhocAlerts: string | null
}
