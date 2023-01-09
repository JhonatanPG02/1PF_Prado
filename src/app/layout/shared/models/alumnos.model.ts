export class Alumnos {
    documentNumber:string=''
    name:string ='';
    lastname:string ='';
    course:string='';
    turn:string='';
    email:string=''

  constructor(documentNumber:string, name:string, lastname:string, course:string, turn: string, email: string){
      this.documentNumber=documentNumber,
      this.name=name,
      this.lastname=lastname,
      this.course=course,
      this.turn=turn,
      this.email=email
  }
}
