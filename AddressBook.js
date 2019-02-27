class AddressBook {
    constructor(contacts) {
        this.contacts = contacts;
    }
    add(info) {
        this.contacts.push(info);
        // copy array to help with history tracking during debug
        // this.contacts = [...this.contacts, info];
    }
    deleteAt(index) {
        this.contacts.splice(index, 1);
        // copy array to help with history tracking during debug
        // this.contacts = [...this.contacts.slice(0, index), ...this.contacts.slice(index+1)]

    }
    print() {
        console.log(this.contacts);
    }
}

class Contacts {
    constructor(name, email, phone, relation) {
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.relation = relation;
    }
}

const book = new AddressBook([new Contacts('Robert', 'rdimech@me.com', '313-123-1234', 'me'), new Contacts('Sean', 'sean@me.com', '313-123-1234', 'friend')]);

while (true) {
    const response = prompt('Add, Remove, Print or Quit?');
    if (response === 'Quit') {
        break;
    }
    if (response === 'Add') {
        const name = prompt('Name?');
        const email = prompt('Email?');
        const phone = prompt('Phone?');
        const relation = prompt('Relation?');
        book.add(new Contacts(name, email, phone, relation));
    }
    if (response === 'Remove') {
        const index = prompt('Index to delete?');
        book.deleteAt(index);
    }
    if (response === 'Print') {
        book.print();
    }
}
