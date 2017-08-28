import { ChangeDetectorRef, Component, forwardRef, OnInit } from '@angular/core';
import { DatePickerComponent } from '../../../../../shared/components/date-picker.component';

@Component({
  selector: 'app-program-management',
  templateUrl: './program-management.component.html',
styleUrls: ['./program-management.component.scss',
            '../../../../../../../node_modules/font-awesome/scss/font-awesome.scss'
            ]
})
export class ProgramManagementComponent implements OnInit {
  ngOnInit(){}
}
