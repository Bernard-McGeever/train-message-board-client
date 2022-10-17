import {Service} from "./Service";
import {NRCCMessages} from "./NRCCMessages";

export interface HuxleyTwoGetResponse {
  trainServices: Service[];
  busServices: Service[] | null;
  ferryServices: Service[] | null;
  generatedAt: string; // DateTime
  locationName: string;
  crs: string;
  filterLocationName: string | null;
  filtercrs: string | null; // ?
  filterType: number;
  nrccMessages: NRCCMessages[] | null;
  platformAvailable: boolean;
  areServicesAvailable: boolean;
}
