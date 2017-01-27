import { Component, OnInit } from '@angular/core';

import { ViewController, ModalController } from 'ionic-angular';
import { MemberService } from '../../app/member.service'
import { Member } from '../../app/member'

@Component({
    selector: 'add-member',
    templateUrl: 'add-member.html'
})
export class AddMemberPage implements OnInit {

    newMember: Member = {
        name: '',
        picture: 'https://ytimg.googleusercontent.com/vi/F4bbVEMpiuA/mqdefault.jpg',
        skills: ['']
    }

    constructor(private viewCtrl: ViewController,
        private memberService: MemberService
    ) {
    }

    addMember() {
        // newMember: Member ={name:'',picture:'',skills:[]}
        this.memberService.members.push(
            this.newMember
        )
        this.cancel()
    }

    cancel() {
        this.viewCtrl.dismiss();
    }
    ngOnInit() { }
}