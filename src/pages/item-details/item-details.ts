import { Component, OnInit } from '@angular/core';

import { NavParams, ViewController } from 'ionic-angular'

@Component({
    moduleId: 'module.id',
    selector: 'item-details',
    templateUrl: 'item-details.html'
})
export class ItemDetailsPage implements OnInit {

    member

    constructor(
        private navParams: NavParams,
        private viewCtrl: ViewController
    ) {
        this.member = navParams.get('member')
    }

    done() {
        this.viewCtrl.dismiss();
    }

    cancel() {
        this.viewCtrl.dismiss();
    }

    addSkill(member, newSkill) {
        newSkill != '' ?
            this.member.skills.push(newSkill) :
            console.log("Please enter valid name");
    }

    ngOnInit() { }
}