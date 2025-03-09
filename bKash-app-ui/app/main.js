const transaction_list = document.getElementById("transaction_list");
const main_balance = document.getElementById("main_balance");
const create_transaction_form = document.getElementById(
  "create_transaction_form"
);

// load all transaction
// let userUI = "";
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

// user.reverse().forEach((item, index) => {
//   userUI += `<div class="user">
//         <img
//           src="${item.photo}"
//           alt=""
//         />
//         <div class="info">
//           <h4>${item.name}</h4>
//           <div id="main_balance" class="balance">12000 BDT</div>
//         </div>
//       </div>`;
// });

transaction_list.innerHTML = transactionUI;
main_balance.innerHTML = `${cashIn - cashOut} BDT`;
// console.log(trxID());
// console.log(Date.now());
// console.log("Cash In", cashIn);
// console.log("Cash Out", cashOut);

// create ner transaction
// create_transaction_form.onSubmit = (e) => {
//   e.preventDefault();

//   const form_data = new FormData(e.target);
// };

create_transaction_form.addEventListener("submit", function (event) {
  event.preventDefault();
});
