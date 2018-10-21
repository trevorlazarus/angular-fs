import { Injectable } from '@angular/core';
import { Job } from '../models/Job';
import { Flexitank } from '../models/Flexitank';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable({
  providedIn: 'root'
})
export class JobService {
  
  
  jobsCollection: AngularFirestoreCollection<Job>;
  jobs: Observable<Job[]>;
  JobDoc: AngularFirestoreDocument<Job>;
  
  flexitanksCollection: AngularFirestoreCollection<Flexitank>;
  flexitanks: Observable<Flexitank[]>;
  FlexitankDoc: AngularFirestoreDocument<Flexitank>;

  constructor(public afs: AngularFirestore) {
    // this.jobs = this.afs.collection('jobs').valueChanges();
    this.jobsCollection = this.afs.collection('jobs', ref => ref.orderBy('job_id','asc'));
    this.jobs = this.jobsCollection.snapshotChanges().map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Job;
        data.id = a.payload.doc.id;
        return data;
      });
    });

    this.flexitanksCollection = this.afs.collection('flexitanks', ref => ref.orderBy('flexitank_number','asc'));
    this.flexitanks = this.flexitanksCollection.snapshotChanges().map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Job;
        data.id = a.payload.doc.id;
        return data;
      });
    });

  }

  getJobs() {
    return this.jobs;
  }
  addJob(job: Job){
    this.jobsCollection.add(job);

  }
  deleteJob(job: Job){
    this.JobDoc = this.afs.doc(`jobs/${job.id}`);
    this.JobDoc.delete();
  }
  updateJob(job: Job){
    this.JobDoc = this.afs.doc(`jobs/${job.id}`);
    this.JobDoc.update(job);

  }

  getFlexitanks() {
    return this.flexitanks;
  }
  addFlexitank(flexitank: Flexitank){
    this.flexitanksCollection.add(flexitank);
    
  }
  deleteFlexitank(flexitank: Flexitank){
    this.FlexitankDoc = this.afs.doc(`flexitanks/${flexitank.id}`);
    this.FlexitankDoc.delete();
  }
  updateFlexitank(flexitank: Flexitank){
    this.FlexitankDoc = this.afs.doc(`flexitanks/${flexitank.id}`);
    this.FlexitankDoc.update(flexitank);

  }

  updateFlexitankFromJob(flexitank: Flexitank){
    this.FlexitankDoc = this.afs.doc(`flexitanks/${flexitank.id}`);
    this.FlexitankDoc.update(flexitank);

  }
 
}

//could add an interface here
