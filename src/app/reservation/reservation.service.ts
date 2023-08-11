import { Injectable } from '@angular/core';
import { Reservation } from '../models/reservation';
@Injectable({
  providedIn: 'root',
})
export class ReservationService {
  private reservations: Reservation[] = [];
  constructor() {
    let saveReservations = localStorage.getItem('reservations');
    if (saveReservations) {
      this.reservations = JSON.parse(saveReservations);
    }
  }
  //CRUD
  getReservations(): Reservation[] {
    return this.reservations;
  }

  getReservation(id: string): Reservation {
    return this.reservations.find((res) => res.id === id)!;
  }

  addReservation(reservation: Reservation): void {
    reservation.id = Date.now().toString(); //adding unique id
    this.reservations.push(reservation);
    localStorage.setItem('reservations', JSON.stringify(this.reservations));
  }
  deleteReservation(id: string): void {
    let index = this.reservations.findIndex((res) => res.id === id);
    this.reservations.splice(index, 1);
    localStorage.setItem('reservations', JSON.stringify(this.reservations));
  }

  updateReservation(id: string, updatedReservation: Reservation): void {
    let index = this.reservations.findIndex((res) => res.id === id);
    this.reservations[index] = updatedReservation;
    localStorage.setItem('reservations', JSON.stringify(this.reservations));
  }
}
