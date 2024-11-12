import { TestBed } from '@angular/core/testing';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { LeadService } from './lead.service';
import { provideHttpClient } from '@angular/common/http';
import { Lead } from './lead.model';
import { firstValueFrom } from 'rxjs';

describe('LeadService', () => {
  let service: LeadService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers:[
        provideHttpClient(),
        provideHttpClientTesting() 
      ]
    });
    service = TestBed.inject(LeadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('#createNewLead should post lead object to /Lead endpoint', async () => {
    const lead: Lead = {firstName: 'John', lastName: 'Doe', email: '', phone: '', title: '', companyName: '', notes: ''};

    const http = TestBed.inject(HttpTestingController);
    const createNew$ = service.createNew(lead);
    const promice = firstValueFrom(createNew$);

    const req = http.expectOne('/Lead', 'post to api');
    expect(req.request.method).toBe('POST');

    req.flush(lead);
    expect(await promice).toEqual(lead);

    http.verify();

  });
});
