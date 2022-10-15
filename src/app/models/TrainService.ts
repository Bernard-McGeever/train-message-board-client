import {Station} from "./Station";
import {Formation} from "./Formation";

export interface TrainService {
  formation: Formation | null;
  origin: Station[];
  destination: Station[];
  currentOrigins: Station[] | null;
  currentDestinations: Station[] | null;
  rsid: string | null; // ?
  serviceIdPercentEncoded: string;
  serviceIdGuid: string;
  serviceIdUrlSafe: string;
  sta: string | null; // time 'HH:mm'
  eta: string | null; // time 'HH:mm'
  std: string | null; // time 'HH:mm'
  etd: string | null; // time 'HH:mm'
  platform: string | null;
  operator: string
  operatorCode: string;
  isCircularRoute: boolean;
  isCancelled: boolean;
  filterLocationCancelled: boolean;
  serviceType: number;
  length: number;
  detachFront: boolean;
  isReverseFormation: boolean;
  cancelReason: string | null;
  delayReason: string | null;
  serviceID: string;
  adhocAlerts: string | null; // ?
}
