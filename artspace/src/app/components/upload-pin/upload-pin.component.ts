import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload-pin',
  templateUrl: './upload-pin.component.html',
  styleUrls: ['./upload-pin.component.css']
})
export class UploadPinComponent implements OnInit {
  selectedFile: any;
  isSelected:boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  onFileSelected(event: any) {
    if (event.target.files) {
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload=(event: any) => {
        this.selectedFile = event.target.result;
        this.isSelected = true;
      }
    }
  }



}
