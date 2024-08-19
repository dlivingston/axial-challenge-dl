import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DecimalPipe } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-output',
  standalone: true,
  imports: [ DecimalPipe, MatButtonModule],
  templateUrl: './output.component.html',
  styleUrl: './output.component.scss'
})
export class OutputComponent implements OnInit {
  fullNumber: number = 0;

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.fullNumber = +params['number'];
    });
  }

  goBack() {
    this.router.navigate(['/input']);
  }
}
