import { Injectable } from '@angular/core';
import { Leader } from '../shared/leader';
import { LEADERS } from '../shared/leaders';

@Injectable()
export class LeaderService {

	constructor() { }

	getLeaders(): Leader[] {
		return LEADERS;
	}

	getFeaturedLeader(): Leader {
		return LEADERS.filter((promotion) => promotion.featured)[0];
	}
}
