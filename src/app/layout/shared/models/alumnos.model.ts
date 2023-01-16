export class Alumnos {
    id: number = 0;
    documentNumber: string='';
    name:string ='';
    lastname:string ='';
    course:string='';
    turn:string='';
    email:string=''

  constructor(id:number, documentNumber:string, name:string, lastname:string, course:string, turn: string, email: string){
      this.id= id,
      this.documentNumber=documentNumber,
      this.name=name,
      this.lastname=lastname,
      this.course=course,
      this.turn=turn,
      this.email=email
  }
}
