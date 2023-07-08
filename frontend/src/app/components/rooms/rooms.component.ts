import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit {
  rooms: any[] = [];
  addMode: boolean = false;
  newRoom: any = {
    name: '',
    description: ''
  };

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.fetchRooms();
  }

  fetchRooms(): void {
    this.httpClient.get<any[]>('http://localhost:8000/api/rooms').subscribe(
      response => {
        this.rooms = response;
      },
      error => {
        console.error('Error fetching rooms:', error);
      }
    );
  }

  toggleAddMode(): void {
    this.addMode = !this.addMode;
  }

  addRoom(): void {
    this.httpClient.post('http://localhost:8000/api/rooms', this.newRoom).subscribe(
      response => {
        // Reset the newRoom object and fetch the updated list of rooms
        this.newRoom = {
          name: '',
          description: ''
        };
        this.fetchRooms();
      },
      error => {
        console.error('Error adding room:', error);
        if (error.error && error.error.message) {
          // Display the server-side validation error message
          alert(error.error.message);
        } else {
          // Display a generic error message
          alert('An error occurred while adding the room.');
        }
      }
    );
  }
}

