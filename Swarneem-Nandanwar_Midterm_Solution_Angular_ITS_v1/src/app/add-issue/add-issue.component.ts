import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { IssueService } from '../services/issues.service'; 
import { Router } from '@angular/router';
import { Issues } from '../../model/issues.model';

@Component({
  selector: 'app-add-issue',
  templateUrl: './add-issue.component.html',
  styleUrl: './add-issue.component.css'
})

export class AddIssueComponent implements OnInit
{
  issueForm: FormGroup;

  ngOnInit(): void {}

  constructor(private issueService: IssueService, private router: Router) 
  {
    this.issueForm = new FormGroup
    ({
      title: new FormControl('', [Validators.required, Validators.minLength(3)]),
      description: new FormControl('', [Validators.required]),
      assignee: new FormControl('', [Validators.required]),
      priority: new FormControl('', [Validators.required]),
      status: new FormControl('Open', [Validators.required]),
      date: new FormControl(new Date(), [Validators.required])
    });
  }

  onSubmit(): void 
  {
    if (this.issueForm.valid) 
      {
      const issueData: Issues = this.issueForm.value;
      this.issueService.createIssue(issueData).subscribe(response => 
      {
        console.log('Issue added successfully!', response);
        alert("Issue is added")
        this.router.navigate(['/list-issue']); 
      });
    } 
    else 
    {
      console.log('Form is not valid');
    }
}
}
