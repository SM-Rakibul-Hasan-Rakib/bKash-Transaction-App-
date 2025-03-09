const transaction_list = document.getElementById("transaction_list");
const main_balance = document.getElementById("main_balance");
const create_transaction_form = document.getElementById(
  "create_transaction_form"
);

// load all transaction
const loadTransaction = () => {
  let transactionUI = "";
  let cashIn = 0;
  let cashOut = 0;

  const data = JSON.parse(localStorage.getItem("transaction")) ?? [];

  data.reverse().forEach((item, index) => {
    if (item.trxType === "Cash In") {
      cashIn += item.amount;
    } else {
      cashOut += item.amount;
    }
    transactionUI += `<div class="transaction-item">
            <div class="trans-info">
              <img
                src="${item.photo}"
              />
              <div class="details">
                <span class="trans-type">${item.trxType}</span>
                <span class="trans-user">${
                  item.userName ? item.userName : item.phone
                }</span>
                <span class="trans-id">TrxID : ${item.id}</span>
              </div>
            </div>
            <div class="trans-data">
              <span class="trans-amount ${
                item.trxType === "Cash In" ? "" : "trans-out"
              }">${item.trxType === "Cash In" ? "+" : "-"} ${item.amount}</span>
              <span class="trans-date">${teansactionTime(item.createAt)}</span>
            </div>
          </div>`;
  });

  transaction_list.innerHTML = transactionUI;
  main_balance.innerHTML = `${cashIn - cashOut} BDT`;
};

loadTransaction();
// create new transaction
create_transaction_form.onsubmit = (event) => {
  event.preventDefault();

  const form_data = new FormData(event.target);
  const data = Object.fromEntries(form_data);

  // clear is data
  const oldData = JSON.parse(localStorage.getItem("transaction")) ?? [];

  oldData.push({
    id: trxID(),
    trxType: data.type,
    amount: +data.amount,
    userName: data.name,
    phone: data.phone,
    photo: data.photo,
    status: "true",
    trash: "false",
    createAt: Date.now(), // Corrected timestamp
    updateAt: "",
  });

  localStorage.setItem("transaction", JSON.stringify(oldData));

  event.target.reset();
  loadTransaction();
};
