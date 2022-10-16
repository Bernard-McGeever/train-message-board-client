export interface CRS {
  stationName?: string;
  crsCode?: string;
}

export class StationNameMap implements CRS {
  // @ts-ignore
  public constructor(public stationName?: string, public crsCode?: string) {
  }

  init(data?: any) {
    if (data) {
      this.stationName = data["stationName"];
      this.crsCode = data["crsCode"];
    }
  }

  static fromJS(data: any): StationNameMap {
    const result = new StationNameMap();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === 'object' ? data : {};

    data["stationName"] = this.stationName;
    data["crsCode"] = this.crsCode;

    return data;
  }
}
