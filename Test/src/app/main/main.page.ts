import { Component, OnInit } from '@angular/core';
import { alertController } from '@ionic/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {

  // window: any.alertController = alertController;
  constructor() { }

  ngOnInit() {

        const button = document.querySelector('ion-button');
        button.addEventListener('click', handleButtonClick);
    
        async function handleButtonClick() {
          const alert = await alertController.create({
            header: 'Use this lightsaber?',
            message: 'Do you agree to use this lightsaber to do good across the galaxy?',
            buttons: ['Disagree', 'Agree']
          });
    
          await alert.present();
        }


  }

}
