import { Routes } from '@angular/router';
import { ListLeadsComponent } from './leads/list-leads/list-leads.component';
import { CreateNewLeadComponent } from './leads/create-new-lead/create-new-lead.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const routes: Routes = [
    {
        path: '',
        component: DashboardComponent
    },
    {
        path: 'leads',
        children: [
            {
                path: '',
                component: ListLeadsComponent,
            },
            {
                path: 'create',
                component: CreateNewLeadComponent
            }
        ]
    },
];
