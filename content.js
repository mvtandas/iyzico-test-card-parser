function init() {
  let inputs = document.querySelectorAll("input");
  let ccNumbers = [
    "5890040000000016",
    "5526080000000006",
    "4766620000000001",
    "4603450000000000",
    "4987490000000002",
    "5311570000000005",
    "9792020000000001",
    "9792030000000000",
    "5170410000000004",
    "5400360000000003",
    "374427000000003",
    "4475050000000003",
    "5528790000000008",
    "4059030000000009",
    "5504720000000003",
    "5892830000000000",
    "4543590000000006",
    "4910050000000006",
    "4157920000000002",
    "5168880000000002",
    "5451030000000000",
  ];
  let names = [
    "John Doe",
    "Jane Doe",
    "John Smith",
    "Jane Smith",
    "John Johnson",
    "Jane Johnson",
    "John Williams",
    "Jane Williams",
    "John Brown",
  ];
  inputs.forEach((input) => {
    if (input.getAttribute("autocomplete") == "cc-number") {
      input.value = ccNumbers[Math.floor(Math.random() * ccNumbers.length)];
    }
    if (input.getAttribute("autocomplete") == "cc-csc") {
      input.value = Math.floor(Math.random() * (100, 999));
    }
    if (input.getAttribute("autocomplete") == "cc-name") {
      input.value = names[Math.floor(Math.random() * names.length)];
    }
    if (input.getAttribute("autocomplete") == "cc-exp") {
      input.value = 12 + "/" + (Math.floor(Math.random() * 10) + 2025);
    }
  });
}

init();
