import {CallingPoint} from "./CallingPoint";

export interface CallingPoints {
  callingPoint: CallingPoint[];
  serviceType: number;
  serviceChangeRequired: boolean;
  assocIsCancelled: boolean;
}
