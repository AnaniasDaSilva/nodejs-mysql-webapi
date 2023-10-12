const customers =[{
    id: 1,
    nome: "Nany da Siva",
    idade: 54,
    uf: "RJ"
}];

function selectCustomers(){
    return customers;
}

function selectCustomer(id){
    return customers.find(c => c.id === id);
}

function insertCustomer(customer){
    customers.push(customer);
}

function updateCustomer(id, customerData){
    const customer = customers.find(c => c.id ===id);
    if(!selectCustomer) return;
    customer.nome = customerData.nome;
    customer.idade = customerData.idade;
    customer.uf = customerData.uf;

}

function deleteCustomer(id){
    const index = customers.findIndex(c => c.id === id);
    customers.splice(index, 1);
}

module.exports = {
    selectCustomers,
    selectCustomer,
    insertCustomer,
    updateCustomer,
    deleteCustomer

}

