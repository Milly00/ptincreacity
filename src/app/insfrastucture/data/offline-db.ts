// offline-db.ts
import Dexie, { Table } from 'dexie';

export interface OfflineRequest {
  id?: number;
  url: string;
  method: string;
  body?: any;
}

export class OfflineDB extends Dexie {
  requests!: Table<OfflineRequest>;

  constructor() {
    super('OfflineDatabase');//Nombre de la BD
    this.version(1).stores({
      requests: '++id, url, method', // tabla reques, índice por id
    });
  }
}

export const offlineDB = new OfflineDB();
