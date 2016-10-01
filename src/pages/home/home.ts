import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';


import { EkhmoiFabToolbar } from '../fab-toolbar/fab-toolbar';

@Component({
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController, private alertCtrl: AlertController) {
  
  }
  public options = {
    color: "danger",
    icon: 'car',
    enableBackdropDismiss: true,
    buttons: [
      {icon: 'mail', handler: ()=> {console.log('close me')}},
      {icon: 'alarm', handler: ()=> {console.log('close me')}},
      {icon: 'laptop', handler: ()=> {console.log('dont close me'); return false}}
    ]
  }
  changeColor() {
    this.options.color = 'dark';
  }
  onAlert(event) {
    let prompt = this.alertCtrl.create({
      title: 'Login',
      message: 'Enter your login and password',
      cssClass: 'alert-with-border',
      inputs: [
        {
          name: 'login',
          placeholder: 'Login',
          type: 'text',
          value: 'test'
        },
        {
          name: 'password',
          placeholder: 'Password',
          type: 'password',
          value: 'test'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Next',
          handler: data => {
            return false;
          }
        }
      ]
    });
    prompt.present();
  }
}
