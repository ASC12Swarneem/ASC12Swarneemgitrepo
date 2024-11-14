import { Component, OnInit } from '@angular/core';
import { Issues } from '../../model/issues.model';
import { IssueService } from '../services/issues.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-issue',
  templateUrl: './edit-issue.component.html',
  styleUrl: './edit-issue.component.css'
})
export class EditIssueComponent implements OnInit
{
  issue: Issues = new Issues();

  constructor(private issueService: IssueService, private router: Router, private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void 
  {
    const issueID = this.activatedRoute.snapshot.params['id'];
    if (issueID) {
      this.issueService.getIssuebyID(issueID).subscribe((data: Issues) => {
        this.issue = data;
      });
    }
  }

  updateIssue(): void {
    if (this.issue.id) {
      this.issueService.updateIssue(this.issue.id, this.issue).subscribe(
        (updatedIssue) => {
          console.log('Issue updated successfully:', updatedIssue);
          this.router.navigate(['/list-issue']); // Navigate to the issue list
        },
        (error) => {
          console.error('Error updating issue:', error);
        }
      );
    }
  }

}
