import {Service} from "../../../models/Service";
import {Station} from "../../../models/Station";
import {Formation} from "../../../models/Formation";

export class TrainServiceWrapper {
  delayReason: string | null;
  destination: string;
  eta: string | null;
  etd: string | null;
  isCancelled: boolean;
  operatorCode: string;
  origin: string;
  platform: string | null;
  serviceIdUrlSafe: string;
  sta: string | null;
  std: string | null;
  moreInfoShown: boolean;

  constructor(delayReason: string | null, destination: string, eta: string | null, etd: string | null, isCancelled: boolean, operatorCode: string,
              origin: string, platform: string | null, serviceIdUrlSafe: string, sta: string | null, std: string | null, moreInfoShown: boolean) {
    this.delayReason = delayReason;
    this.destination = destination;
    this.eta = eta;
    this.etd = etd;
    this.isCancelled = isCancelled;
    this.operatorCode = operatorCode;
    this.origin = origin;
    this.platform = platform;
    this.serviceIdUrlSafe = serviceIdUrlSafe;
    this.sta = sta;
    this.std = std;
    this.moreInfoShown = moreInfoShown;
  }
}
