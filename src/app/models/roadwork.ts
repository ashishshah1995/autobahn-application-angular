export interface Roadwork {
  extent: string;
  identifier: string;
  routeRecommendation: unknown[];
  coordinate: {
    lat: string;
    long: string;
  };
  footer: unknown[];
  icon: string;
  isBlocked: string;
  description: string[];
  title: string;
  point: string;
  display_type: string;
  lorryParkingFeatureIcons: unknown[];
  future: boolean;
  subtitle: string;
  startTimestamp: string;
}
