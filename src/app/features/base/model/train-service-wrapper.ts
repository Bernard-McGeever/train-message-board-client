export class TrainServiceWrapper {
  delayReason?: string | undefined;
  destination: string;
  eta?: string | undefined;
  etd?: string | undefined;
  isCancelled: boolean;
  operatorCode: string;
  origin: string;
  platform?: string | undefined;
  serviceIdUrlSafe: string;
  sta?: string | undefined;
  std?: string | undefined;
  moreInfoShown: boolean;

  constructor(delayReason: string | undefined, destination: string, eta: string | undefined, etd: string | undefined, isCancelled: boolean, operatorCode: string,
              origin: string, platform: string | undefined, serviceIdUrlSafe: string, sta: string | undefined, std: string | undefined, moreInfoShown: boolean) {
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
