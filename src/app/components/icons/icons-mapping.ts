import { DataComponent } from './data/data.component';
import { FacebookComponent } from './facebook/facebook.component';
import { FavoriteChartComponent } from './favorite-chart/favorite-chart.component';
import { InstagramComponent } from './instagram/instagram.component';
import { LinkedinComponent } from './linkedin/linkedin.component';
import { MedalComponent } from './medal/medal.component';
import { PeopleComponent } from './people/people.component';
import { RefreshComponent } from './refresh/refresh.component';
import { ShieldCheckComponent } from './shield-check/shield-check.component';
import { WhatsappComponent } from './whatsapp/whatsapp.component';

export const ICONS = new Map<string, any>([
  ['facebook', FacebookComponent],
  ['linkedin', LinkedinComponent],
  ['instagram', InstagramComponent],
  ['whatsapp', WhatsappComponent],
  ['people', PeopleComponent],
  ['medal', MedalComponent],
  ['shield-check', ShieldCheckComponent],
  ['refresh', RefreshComponent],
  ['data', DataComponent],
  ['favorite-chart', FavoriteChartComponent]
]);
