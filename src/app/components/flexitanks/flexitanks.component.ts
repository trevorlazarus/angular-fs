import { Component, OnInit } from '@angular/core';
import { FlexitankService } from '../../services/flexitank.service';
import { Flexitank } from '../../models/Flexitank';
import { Job } from '../../models/Job';

@Component({
  selector: 'app-flexitanks',
  templateUrl: './flexitanks.component.html',
  styleUrls: ['./flexitanks.component.css']
})
export class FlexitanksComponent implements OnInit {

  flexitanks: Flexitank[];
  editState: boolean = false;
  flexitankToEdit: Flexitank;
  constructor(private flexitankService: FlexitankService) { }

  ngOnInit() {
    this.flexitankService.getFlexitanks().subscribe(flexitanks => {
      // console.log(items);
      this.flexitanks = flexitanks;
    });
  }

  deleteFlexitank(event, flexitank: Flexitank) {
    this.clearState();
    this.flexitankService.deleteFlexitank(flexitank);
  }

  editFlexitank(event, flexitank: Flexitank) {
    this.editState = true;
    this.flexitankToEdit = flexitank;
  }

  clearState() {
    this.editState = false;
    this.flexitankToEdit = null;
  }

  updateFlexitank(flexitank: Flexitank) {
    this.flexitankService.updateFlexitank(flexitank);
    this.clearState();
  }

}
