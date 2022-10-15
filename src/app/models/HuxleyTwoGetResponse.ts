import {TrainService} from "./TrainService";
import {NRCCMessages} from "./NRCCMessages";

export interface HuxleyTwoGetResponse {
  trainServices: TrainService[];
  busServices: TrainService[] | null;
  ferryServices: TrainService[] | null;
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
