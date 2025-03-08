const transaction_list = document.getElementById("transaction_list");

// load all transaction
let transactionUI = "";
transaction.reverse().forEach((item, index) => {
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
              <span class="trans-date">01:04 8/8/24</span>
            </div>
          </div>`;
});

transaction_list.innerHTML = transactionUI;
