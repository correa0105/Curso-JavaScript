function Account(agency, account, balance) {
    this.agency = agency;
    this.account = account;
    this.balance = balance;
};

Account.prototype.withdraw = function (value) {
    if (this.balance <= value) {
        console.log(`VALOR A SER SACADO R$${value}`);
        console.log("## VOCÊ NÃO PODE SACAR, POIS SEU SALDO ATUAL É INFERIOR AO VALOR DE SAQUE ##");
        this.viewBalance();
        return
    }
    this.balance -= value;
};

Account.prototype.deposit = function (value) {
    this.balance += value;
    console.log(`## VOCE DEPOSITOU R$${value} ##`);
    this.viewBalance();
};

Account.prototype.viewBalance = function () {
    console.log(`AG/C: ${this.agency} / ${this.account} | R$${this.balance.toFixed(2)}`);
};

function CurrentAccount(agency, account, balance, limit) {
    Account.call(this, agency, account, balance);
    this.limit = limit;
}

CurrentAccount.prototype = Object.create(Account.prototype);
CurrentAccount.prototype.constructor = CurrentAccount;

CurrentAccount.prototype.withdraw = function (value) {        //FOI REALIZADO UM POLIMORFISMO NO MÉTODO DA SACAR POIS, ELE SE COMPORTA DIFERENTE PARA CADA TIPO DE OBJETO
    if ((this.balance + this.limit) <= value) {
        console.log(`VALOR A SER SACADO R$${value}`);
        console.log("## VOCÊ NÃO PODE SACAR, POIS SEU SALDO ATUAL É INFERIOR AO VALOR DE SAQUE ##");
        this.viewBalance();
        return
    }

    this.balance -= value;
    console.log(`VALOR A SER SACADO R$${value}`);
    this.viewBalance();
};

function SavingsAccount(agency, account, balance) {
    Account.call(this, agency, account, balance);
}

SavingsAccount.prototype = Object.create(Account.prototype);
SavingsAccount.prototype.constructor = CurrentAccount;

const account = new CurrentAccount(4871, 01274, 3000, 500);
account.deposit(350);
account.withdraw(3450);

console.log("\n");

const account1 = new SavingsAccount(4871, 01274, 0);
account1.deposit(350);
account1.withdraw(3450);