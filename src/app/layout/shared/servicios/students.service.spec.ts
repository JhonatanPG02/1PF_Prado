import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { StudentsService } from './students.service';


fdescribe(`TEST del componente: 'StudentsService'`, () => {
  let service: StudentsService;
  let httpMock: HttpTestingController

  beforeEach( () => {
     TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule],
      providers: [ StudentsService ]
    })

    //Declaración general
    service = TestBed.get(StudentsService);
    httpMock = TestBed.get(HttpTestingController);

  });

  it('Debe existir el StudentsService', () => {
    expect(service).toBeTruthy();
  });

  it('Debe validar ser un metodo GET de data studiantes', () => {

      let data = [
              {
                  id: 44767589,
                  documentNumber: "44767589",
                  name: "Pedro",
                  lastname: "Merino Aliaga",
                  course: "Angular",
                  turn: "Noche",
                  email: "pedro.20245@gmail.com"
              }
          ]

      const req = httpMock.expectOne('http://demo3045564.mockable.io/students')
        expect(req.request.method).toEqual("GET");
        expect(req.cancelled).toBeFalsy();
        expect(req.request.responseType).toEqual('json')
        req.flush(data);

      httpMock.verify();
    });

});
