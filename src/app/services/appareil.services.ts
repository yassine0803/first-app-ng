export class AppareilService {
    appareils = [
        {
          name: "televesion",
          status: 'allumé'
        },
        {
          name: "laptop",
          status: 'allumé'
        },
        {
          name: "phone",
          status: 'éteint'
        }
      ];
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
}