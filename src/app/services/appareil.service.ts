export class AppareilService {
    appareils = [
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
    }
    switchOnOff(){
        for(let appareil of this.appareils){
            appareil.status = 'éteint';
        }
    }
    switchOffOne(index: number){
        this.appareils[index].status = "éteint";
    }
    switchOnOne(index: number){
        this.appareils[index].status = "allumé";
    }
}