import {Coach} from "./Coach";

export interface Formation {
    avgLoading: number,
    avgLoadingSpecified: boolean,
    coaches: Coach[];
}
