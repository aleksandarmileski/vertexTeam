import { Component } from '@angular/core';

import { NavController, ModalController } from 'ionic-angular';

import { ItemDetailsPage } from '../item-details/item-details'
import { AddMemberPage } from '../add-member/add-member'
import { MemberService } from '../../app/member.service'
import { Member } from '../../app/member'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  team

  constructor(
    public navCtrl: NavController,
    private modalCtrl: ModalController,
    private memberService: MemberService
  ) {

  }

  ngOnInit(): void {
    this.getMembers();
  }

  getMembers(): void {
    this.memberService.getMembers().then(teamMembers =>
      this.team = teamMembers
    );
  }

  selectMember(member) {
    console.log(member)

    //  basic navigation to other component
    // this.navCtrl.push(ItemDetailsPage, { member: member })

    this.modalCtrl
      .create(ItemDetailsPage, { member: member }).present()

  }

  addMember() {
    this.modalCtrl
      .create(AddMemberPage).present()
  }

}
