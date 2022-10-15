export interface Station {
  locationName: string;
  crs: string;
  via: string | null;
  futureChangeTo: string | null;
  assocIsCancelled: boolean;
}
