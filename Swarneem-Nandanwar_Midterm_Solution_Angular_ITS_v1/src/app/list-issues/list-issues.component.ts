import { Component, OnInit } from '@angular/core';
import { Issues } from '../../model/issues.model';
import { IssueService } from '../services/issues.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-issues',
  templateUrl: './list-issues.component.html',
  styleUrls: ['./list-issues.component.css']
})
export class ListIssuesComponent implements OnInit {

  issues: Issues[] = []; 
  issueService: IssueService;
  
  searchIssue: Issues[] | null = null;  
  searchinpt: string = ''; 
  
  constructor(issueService : IssueService, private router: Router)
  {
    this.issueService = issueService;
  }

  ngOnInit(): void {
    this.issueService?.getIssues().subscribe((issueData) => { 
      this.issues = issueData;
      this.searchIssue = issueData;
    });
  }

  deleteIssue(toDeleteIssue: Issues): void {
    if (toDeleteIssue.id !== undefined) {
      this.issueService.deleteIssue(toDeleteIssue.id).subscribe(() => {
        this.issues = this.issues.filter(issue => issue.id !== toDeleteIssue.id);
      });
    }
  }

  editIssue(issueId: number | undefined): void {
    if (issueId !== undefined) {
      this.router.navigate(['update', issueId]);
    }
  }

  issueSearch(): void {
    const searchTerm = this.searchinpt.toLowerCase().trim();
    
    if (searchTerm) {
      this.searchIssue = this.issues.filter(issue =>
        issue.title?.toLowerCase().includes(searchTerm) 
      );
      if (this.searchIssue.length > 0) {
        console.log("Issue(s) found:", this.searchIssue);
      } else {
        console.log("No matching issue found for search term:", this.searchinpt);
      }
    } else {
      this.searchIssue = this.issues;
      console.log("Showing all issues");
    }
  }
}
