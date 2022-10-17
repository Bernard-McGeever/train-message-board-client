import {Formation} from "./Formation";
import {CallingPoints} from "./CallingPoints";

export interface TrainService {
  formation: Formation;
  previousCallingPoints: CallingPoints[] | null;
  subsequentCallingPoints: CallingPoints[];
  generatedAt: string;
  serviceType: number;
  locationName: string;
  crs: string;
  operator: string;
  operatorCode: string;
  rsid: string;
  isCancelled: boolean;
  cancelReason: string | null;
  delayReason: string | null;
  overdueMessage: string | null;
  length: number;
  detachFront: boolean;
  isReverseFormation: boolean;
  platform: string;
  sta: string | null;
  eta: string | null;
  ata: string | null;
  std: string | null;
  etd: string | null;
  atd: string | null;
}
