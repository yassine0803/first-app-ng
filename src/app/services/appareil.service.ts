import { Subject } from 'rxjs/Subject';

export class AppareilService {
  appareilSubject = new Subject<any[]>();
    private appareils = [
        {
          id:1,
          name: "televesion",
          status: 'allumé'
        },
        {
          id:2,
          name: "laptop",
          status: 'allumé'
        },
        {
          id:3,
          name: "phone",
          status: 'éteint'
        }
      ];
      emitAppareilSubject(){
        this.appareilSubject.next(this.appareils.slice());
      }
      getAppareilById(id: number){
        const apparel = this.appareils.find(
          (appareilObject)=> {
            return appareilObject.id === id;
          }
        );
        return apparel;
      }
    switchOnAll(){
        for (let appareil of this.appareils){
            appareil.status = 'allumé';
        }
        this.emitAppareilSubject();
    }
    switchOnOff(){
        for(let appareil of this.appareils){
            appareil.status = 'éteint';
        }
        this.emitAppareilSubject();
    }
    switchOffOne(index: number){
        this.appareils[index].status = "éteint";
        this.emitAppareilSubject();
    }
    switchOnOne(index: number){
        this.appareils[index].status = "allumé";
        this.emitAppareilSubject();
    }

    addAppareil(name: string, status: string){
      const appareilObject = {
        id:0,
        name: '',
        status: ''
      };
      appareilObject.name = name;
      appareilObject.status = status;
      appareilObject.id = this.appareils[(this.appareils.length - 1)].id+1;
      this.appareils.push(appareilObject);
      this.emitAppareilSubject();
    }
}