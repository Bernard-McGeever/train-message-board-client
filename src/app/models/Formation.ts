import {Coaches} from "./Coaches";

export interface Formation {
    avgLoading: number,
    avgLoadingSpecified: boolean,
    coaches: Coaches[];
}
