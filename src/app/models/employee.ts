// export interface Employee {
//     id?: number;
//     firstName?: string;
//     lastName?: string;
//     emailId?: string;
//     active?: boolean;
// }

export class Employee {
    constructor(
        public id?: number,
        public firstName?: string,
        public lastName?: string,
        public emailId?: string,
        public active?: boolean,
    ){}
}