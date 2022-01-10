export class Goal01 {
  // v01
  // id: number | undefined;
  // name: string | undefined;
  // description: string | undefined;

  showDescription: boolean | undefined;
  constructor(
    public id: number,
    public name: string,
    public description: string,
    public completeDate: Date
  ){
    this.showDescription=false;
  }
}
