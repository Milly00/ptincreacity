import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { offlineDB, OfflineRequest } from '../data/offline-db';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class OfflineService {
  constructor(private http: HttpClient, private snackBar: MatSnackBar) {
    // Reintenta automáticamente cuando vuelva la conexión
    window.addEventListener('online', () => {
      this.syncRequests();
    });
  }

  async saveRequest(req: OfflineRequest) {
    await offlineDB.requests.add(req);
  }

  async syncRequests() {
    const all = await offlineDB.requests.toArray();

    for (const req of all) {
      try {
        await this.http
          .request(req.method, req.url, { body: req.body })
          .toPromise();
        await offlineDB.requests.delete(req.id!); // eliminar si fue exitoso
        this.snackBar.open('✔ Petición reenviada correctamente', 'Cerrar', {
          duration: 3000,
          panelClass: ['success-snackbar'],
        });
      } catch (err) {
        console.error('Error reenviando petición offline:', err);
      }
    }
  }
}
