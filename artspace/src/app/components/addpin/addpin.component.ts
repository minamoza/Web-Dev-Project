import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addpin',
  templateUrl: './addpin.component.html',
  styleUrls: ['./addpin.component.css']
})
export class AddpinComponent implements OnInit {
  pins!: any[];
  selectedFile = null;

  constructor() { }

  ngOnInit(): void {
  }

  onFileSelected(event: any) {
    if (event.target.files) {
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload=(event: any) => {
        this.selectedFile = event.target.result;
      }
    }

  }

  onUpload() {
    if (this.selectedFile) {
      // this.pins.append(this.selectedFile)
    }
  }
}
