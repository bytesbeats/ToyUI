declare interface Schema<T> {
  title: string;
  version: number;
  primaryKey: string;
  type: "object" | "array";
  properties?: T;
}
