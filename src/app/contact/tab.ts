// import { title } from "process"

export interface Tab {
  title: any;
  active: boolean;
  iconBullet: any;
  iconEmail: any;
  items: {id: string, icon: any, name: any, title: any, email: string, phone: any, duties: {dutyName: any }[] }[]

};

