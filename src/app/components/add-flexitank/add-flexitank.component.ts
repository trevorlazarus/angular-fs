import { Component, OnInit } from '@angular/core';
import { JobService } from '../../services/job.service';
import { Job } from '../../models/Job';
import { Flexitank } from '../../models/Flexitank';
import { FlexitankService } from'../../services/flexitank.service';


@Component({
  selector: 'app-add-flexitank',
  templateUrl: './add-flexitank.component.html',
  styleUrls: ['./add-flexitank.component.css']
})
export class AddFlexitankComponent implements OnInit {
  flexitank: Flexitank = {
    job_number:'',
    place_of_fitting:'',
    place_of_loading:'',
    job_id:'',
    //TODO: installers and loaders array
    //TODO: loading record map
    flexitank_number:'',
    flexitank_installation_progress:'page-a-1',
    customer_name:'',
    plastic_seal_number:'',
    installation_record:{
      accessories_etl_liner:'',
      accessories_heating_pad:'',
      accessories_others_1:'',
      accessories_others_2:'',
      accessories_polystyrene_foam:'',
      accessories_tub_liner:'',
      checklist_a_1:false,
      checklist_a_2:false,
      checklist_a_3:false,
      checklist_a_4:false,
      checklist_a_5:false,
      checklist_a_6:false,
      checklist_a_7:false,
      checklist_a_8:false,
      checklist_a_9:false,
      checklist_a_10:false,
      checklist_a_11:false,
      checklist_a_12:false,
      checklist_a_13:false,
      checklist_a_14:false,
      checklist_b_1:false,
      checklist_b_2:false,
      checklist_b_3:false,
      checklist_b_4:false,
      checklist_b_5:false,
      checklist_c_1:false,
      checklist_c_2:false,
      checklist_c_3:false,
      checklist_c_4:false,
      checklist_c_5:false,
      checklist_d_1:false,
      checklist_d_2:false,
      checklist_d_3:false,
      checklist_d_4:false,
      checklist_e_1:false,
      checklist_e_2:false,
      checklist_e_3:false,
      checklist_e_4:false,
      container_door:'',
      container_door_final:'',
      container_flexitank:'',
      container_flexitank_bulkhead:'',
      container_left:'',
      container_right:'',
      container_inside:'',
      container_number:'',
      container_warning_label:'',
      container_year:''
    }
  }
  constructor(private flexitankService: FlexitankService) { }

  ngOnInit() {
  }
  onSubmit() {
    if (this.flexitank.flexitank_number != '' && this.flexitank.place_of_fitting != '') {
      this.flexitankService.addFlexitank(this.flexitank);
      this.flexitank.flexitank_number = '';
      this.flexitank.place_of_fitting = '';

    }
  }

}
