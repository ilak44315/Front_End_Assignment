class User{
    constructor(name, emailAddress){
        this.name = name;
        this.emailAddress = emailAddress;
    }

    descripe(){
        return `${this.name}, email is  ${this.emailAddress}.`;
    }
}

class Dealership {
    constructor(name) {
        this.name = name;
        this.users = [];
    }

    addUser(user){
        if(user instanceof User){
            this.users.push(user);
        }else {
            throw new Error(`You can only add an instance of user. Argument is not a user: ${user}`);
        }
    }
    describe(){
        return `${this.name} has ${this.users.length} users.`;
    }
}

class Menu {
    constructor(){
        this.dealerships =[];
        this.selectedDealership = null;
    }
    start(){
        let selection = this.showMainMenuOptions();
        while (selection != 0){
            switch (selection) {
                case '1': 
                this.createDealership();
                break;
                case '2':
                    this.viewDealership();
                break;
                case '3':
                    this.deleteDealership();
                break;
                case '4':
                    this.displayDealerships();
                break;
                default:
                    selection = 0;

            }
        selection= this.showMainMenuOptions();
        }

        alert('Goodbye');
    }
showMainMenuOptions(){
    return prompt(`
    0) exit
    1) create new dealership
    2) view dealership
    3) delete dealership
    4) display all dealerships
    `);
}
showDealershipMenuOptions(dealershipInfo){
    return prompt(`
    0) back
    1) create user
    2) delete user
    ---------------------
    ${dealershipInfo}
    `);
}
displayDealerships(){
    let dealershipString ='';
    for(let i = 0; i< this.dealerships.length; i++){
        dealershipString += i + ')' + this.dealerships[i].name + ('\n');
    }
    alert(dealershipString);
 }

createDealership(){
    let name = prompt('Enter name for new dealership:');
    this.dealerships.push(new Dealership(name));
    }
viewDealership(){
    let index = prompt('Enter the index of the dealership you wish to view:');
    if(index > -1 && index < this.dealerships.length) {
        this.selectedDealership = this.dealerships[index];
        let description = 'Dealership Name: '+ this.selectedDealership.name + ('\n');

        for (let i = 0; i < this.selectedDealership.users.length; i++) {
        description += i + ' ) ' + this.selectedDealership.users[i].name + ' - ' + this.selectedDealership.users[i].emailAddress + ('\n');
    }

    let selection = this.showDealershipMenuOptions(description);
    switch (selection){
        case '1':
            this.createUser();
            break;
        case '2':
            this.deleteUser();
        }   
    }
}
    deleteDealership () {
        let index = prompt ('Input the index of the dealership you wish to delete: ');
        if (index > -1 && index < this.dealerships.length){
            this.dealerships.splice(index, 1);
        }
    }
    createUser() {
        let name = prompt('Enter name for new user');
        let emailAddress = prompt ('Enter email address for new user:');
        this.selectedDealership.users.push(new User(name, emailAddress));
    }

    deleteUser() {
        let index = prompt('Enter the index of the user your wish to delete:');
        if (index > -1 && index < this.selectedDealership.users.length) {
            this.selectedDealership.users.splice(index, 1);
        }
    }
}

let menu = new Menu();
menu.start();