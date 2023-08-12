import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReservationService } from '../reservation/reservation.service';
import { Reservation } from '../models/reservation';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-reservation-from',
  templateUrl: './reservation-from.component.html',
  styleUrls: ['./reservation-from.component.css'],
})
export class ReservationFromComponent implements OnInit {
  reservationForm: FormGroup = new FormGroup({});
  constructor(
    private FormBuilder: FormBuilder,
    private reservationService: ReservationService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.reservationForm = this.FormBuilder.group({
      checkInDate: ['', Validators.required],
      checkOutDate: ['', Validators.required],
      guestName: ['', Validators.required],
      guestEmail: ['', [Validators.required, Validators.email]],
      roomNumber: ['', Validators.required],
    });
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id) {
      this.reservationService.getReservation(id).subscribe((reservation) => {
        if (reservation) {
          this.reservationForm.patchValue(reservation);
        }
      });
    }
  }
  onSubmit() {
    if (this.reservationForm.valid) {
      let reservation: Reservation = this.reservationForm.value;

      let id = this.activatedRoute.snapshot.paramMap.get('id');
      if (id) {
        //update
        this.reservationService
          .updateReservation(id, reservation)
          .subscribe(() => {
            console.log('updated');
          });
      } else {
        this.reservationService.addReservation(reservation).subscribe(() => {
          console.log('added');
        });
      }
      this.router.navigate(['/list']);
    }
  }
}
