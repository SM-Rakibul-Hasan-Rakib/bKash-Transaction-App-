const transaction_list = document.getElementById("transaction_list");
const main_balance = document.getElementById("main_balance");

// load all transaction
let transactionUI = "";
let cashIn = 0;
let cashOut = 0;
transaction.reverse().forEach((item, index) => {
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
console.log(trxID());
console.log(Date.now());
// console.log("Cash In", cashIn);
// console.log("Cash Out", cashOut);
