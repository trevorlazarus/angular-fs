import { Component, OnInit } from '@angular/core';
import { JobService } from '../../services/job.service'
import { Job } from '../../models/Job';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {
  jobs: Job[];
  editState: boolean = false;
  jobToEdit: Job;
  constructor(private jobService: JobService) { }

  ngOnInit() {
    this.jobService.getJobs().subscribe(jobs => {
      // console.log(jobs);
      this.jobs = jobs;
    });
  }
 
  deleteJob(event, job:Job){
    this.clearState();
    this.jobService.deleteJob(job);
  }
  editJob(event, job:Job) {
    this.editState = true;
    this.jobToEdit = job;
  }
  clearState(){
    this.editState = false;
    this.jobToEdit = null;
  }
  updateJob(job: Job){
  this.jobService.updateJob(job);
  this.clearState();

  }
}
