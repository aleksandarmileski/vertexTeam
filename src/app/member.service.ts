import { Injectable } from '@angular/core';

import { Member } from './member';

@Injectable()
export class MemberService {
    members: [Member] = [
        {
            name: 'Denko Mancheski',
            picture: 'https://scontent.fskg1-1.fna.fbcdn.net/v/l/t1.0-1/c1.0.160.160/p160x160/15894352_10210634888382829_4615753460012417222_n.jpg?oh=7d6e0155debb85864fdca916ca090016&oe=590B3EF8',
            skills: ['Everything']
        },
        {
            name: 'Filip Barakoski',
            picture: 'https://media.licdn.com/mpr/mpr/shrink_100_100/AAEAAQAAAAAAAAihAAAAJDQ0MGY1MGU2LTE5ZDUtNDliOC05OTEyLTdhZmExY2I1MjU1ZQ.jpg',
            skills: ['Css']
        },
        {
            name: 'Goce Poposki',
            picture: 'https://scontent.fskg1-1.fna.fbcdn.net/v/t1.0-1/p64x64/14183951_1101512919885742_3105170201508344576_n.jpg?oh=eb10f494c7bafab324d7c5a440d19a87&oe=591D341C',
            skills: ['Ng-translate']
        },
        {
            name: 'Aleksandar Mileski',
            picture: 'https://scontent.fskg1-1.fna.fbcdn.net/v/t1.0-1/p160x160/15400519_10209885356283639_5270947930688003284_n.jpg?oh=19bcea43a670e3ab9ee9fd65e4c53b4d&oe=594B361B',
            skills: ['Noob']
        }
    ]
    getMembers(): Promise<Member[]> {
        return Promise.resolve(this.members);
    }
}