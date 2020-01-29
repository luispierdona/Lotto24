import { InforDialogComponent } from './infor-dialog/infor-dialog.component';
import { Component, OnInit, Inject } from '@angular/core';
import { MusicInfoService } from './../../services/music-info.service';
import { MusicInfo } from 'src/app/models/music';
import { Config } from 'protractor';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-material-view',
  templateUrl: './material-view.component.html',
  styleUrls: ['./material-view.component.scss']
})
export class MaterialViewComponent implements OnInit {

  breakpoint: number;
  collection: MusicInfo[];
  filteredCollection: MusicInfo[];
  cardClass = 'backgroundA';
  selected = 'none';
  constructor(private service: MusicInfoService, public dialog: MatDialog, private sanitizer: DomSanitizer) { }

  ngOnInit() {
    // Set the Style by the screen width (to check if it is pc or phone)
    this.cardClass = (window.innerWidth <= 480) ? 'cardPhoneScreen' : 'card';
    this.getMusicInfo(); // Get the data
  }

  // Change the class on resize window
  onResize(event) {
    this.cardClass = (event.target.innerWidth <= 480) ? 'cardPhoneScreen' : 'card';
  }

  // Data from service
  getMusicInfo() {
    this.service.getMusicInfo()
    .subscribe(
      (data: Config) => { this.collection = data.results; this.filteredCollection = this.collection; console.log(this.collection); },
      error => { console.log(error);
    });
  }

  // Filter by typing
  applyFilter(filterValue: string) {
    this.filteredCollection = this.collection;
    if (filterValue !== '') {
      this.filteredCollection = this.filteredCollection.filter( x => x.collectionName.includes(filterValue.trim().toLowerCase())  );
    }
  }

  // To Safe-Pass browser security
  getBackground(image) {
    return this.sanitizer.bypassSecurityTrustStyle(`linear-gradient(rgba(29, 29, 29, 0), rgba(16, 16, 23, 0.5)), url(${image})`);
  }

  // Function to Sort the albums
  applySort() {
    this.filteredCollection = this.collection;
    switch (this.selected) {
      case 'none': {
          this.getMusicInfo();
          break;
      }
      case 'ANAZ': {
          this.filteredCollection.sort((a, b) => a.artistName.localeCompare(b.artistName));
          break;
      }
      case 'ANZA': {
          this.filteredCollection.sort((a, b) => b.artistName.localeCompare(a.artistName) );
          break;
      }
      case 'TAZ': {
          this.filteredCollection.sort((a, b) => a.collectionName.localeCompare(b.collectionName));
          break;
      }
      case 'TZA': {
          this.filteredCollection.sort((a, b) => b.collectionName.localeCompare(a.collectionName) );
          break;
      }
      default: {
          this.filteredCollection = this.collection;
          break;
      }

    }
  }

  // Dialog info of the album selected
  openInfoDialog(item: any) {
    console.log(item);
    const dialogRef = this.dialog.open(InforDialogComponent, {
      maxWidth: '400px',
      minHeight: '580px',
      data: {data: item}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}

