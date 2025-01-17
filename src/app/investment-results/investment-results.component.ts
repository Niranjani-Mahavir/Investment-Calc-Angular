import { CurrencyPipe } from '@angular/common';
import { Component, computed } from '@angular/core';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css',
})
export class InvestmentResultsComponent {
  constructor(private investmentSrv: InvestmentService) {}

  // results() {
  //   return this.investmentSrv.resultData();
  // }
  // results = computed(() => this.investmentSrv.resultData())
  results = this.investmentSrv.resultData.asReadonly();
}
