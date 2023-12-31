export interface DataReader {
  raw_data: string[][];
  read(): void;
}
