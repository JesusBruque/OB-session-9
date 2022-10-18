export class Task {
    name = '';
    lastName = '';
    userName = '';
    conected = true;

    constructor(name, lastName, userName, conected){
        this.name = name;
        this.lastName = lastName;
        this.userName = userName;
        this.conected = conected;
    }
}