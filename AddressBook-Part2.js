class AddressBook {
    constructor(contacts) {
        this.contacts = contacts;
    }
    add(info) {
        this.contacts.push(info);
    }
    deleteAt(index) {
        this.contacts.splice(index, 1);

    }
    print() {
        console.log(this.contacts);
    }
    display() {
        const body = document.querySelector('.contactContainer');
        body.innerHTML = '';
        // while (body.hasChildNodes()) {
        //     body.removeChild(body.firstChild);
        // }
        for (let i = 0; i < this.contacts.length; i++) {
            const contactRecord = document.createElement('div');
            contactRecord.className = 'contactDetails';
            contactRecord.innerHTML = `<p>Name: ${this.contacts[i].name}</p><p>Email: ${this.contacts[i].email}</p><p>Phone: ${this.contacts[i].phone}</p><p>Relation: ${this.contacts[i].relation}</p><img class="delete" src="TrashCan.png">`;
            body.appendChild(contactRecord);
        }
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

const book = new AddressBook([new Contacts('Robert', 'rdimech@me.com', '313-123-1234', 'Friend'), new Contacts('Sean', 'sean@me.com', '313-123-1234', 'Friend')]);

book.display();

const addButton = document.querySelector('.addButton');
const inputName = document.querySelector('#contactName');
const inputEmail = document.querySelector('#email');
const inputPhone = document.querySelector('#phone');
const inputRelation = document.querySelector('select');

addButton.addEventListener('click', () => {
    book.add(new Contacts(inputName.value, inputEmail.value, inputPhone.value, inputRelation.value));
    book.display();
    document.getElementById('contactName').value = '';
    document.getElementById('email').value = '';
    document.getElementById('phone').value = '';
})

const section = document.querySelector('.contactContainer');

section.addEventListener('click', (evt) => {
    if(evt.target.className === 'delete') {
        const deleteIndex = Array.from(section.children).indexOf(evt.target.parentNode);
        book.deleteAt(deleteIndex);
        book.display();
    }
});