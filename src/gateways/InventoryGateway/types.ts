type Condition = "New" | "Used"
type Feature = {
  featureId: string;
  name: string;
  number: number;
  type: string;
  value: string;
  valueId: string;
}
type FeatureGroup = {
  featureGroupId: string;
  features: Array<Feature>;
  isDefault: false;
  name: string;
}
type Geopoint = { lat: number; lon: number; }
type HighLow = { high: number; low: number; }
type Image = {
  hoardId: string | null;
  url: string | null;
}
type Status = "For Sale" | "Not For Sale" | "Open To Offers";
type StringKeyNumberValue = Record<string, number>;

export type Vehicle = {
  archived: boolean;
  classification: string;
  classificationId: string;
  condition: Condition;
  comments: number;
  createdUserId: string;
  dateCreated: string;
  dateModified: string | null;
  dealerName: string | null;
  dealerId: string | null;
  decodeMethod: string;
  deleted: boolean;
  description: string;
  externalId: string;
  featureGroup: Array<FeatureGroup>;
  follows: number;
  geopoint: Geopoint;
  generation: string;
  generationId: string;
  id: string;
  image: Array<Image>;
  likes: number;
  locationId: string;
  make: string;
  makeId: string;
  model: string;
  modelId: string;
  moderatorApproved: boolean | null;
  modifiedUserId: string | null;
  pending: boolean;
  popularity: number;
  price: number;
  shares: number;
  sold: boolean;
  status: Status;
  stockNumber: string;
  style: string | null;
  subClassification: string;
  subClassificationId: string;
  trim: string | null;
  userId: string | null;
  vehicleId: string;
  views: number;
  vin: string;
  year: number;
}

export type VehicleSearchCriteria = {
  archived?: boolean | null;
  sold?: boolean | null;
  pendingType?: "Pending" | "NotPending";
  imageOnly?: boolean | null,
  // search: ? null,
  // sorting: ?  null
  classification?: Array<string>;
  condition?: Array<string>;
  customMake: string | null;
  customModel: string | null;
  make: Array<string>;
  model: Array<string>;
  ownerId: string | null;
  status: Array<string>;
  subclassification: Array<string>;
  zip: string | null;
}

export type VehicleSearchResult = {
  classifications: StringKeyNumberValue;
  conditions: { [key in Condition]?: number; };
  dealers: StringKeyNumberValue;
  makes: StringKeyNumberValue;
  models: StringKeyNumberValue;
  priceRange: HighLow,
  search: VehicleSearchCriteria;
  statuses: { [key in Status]?: number};
  subClassifications: StringKeyNumberValue;
  yearRange: HighLow;
}
