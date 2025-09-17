document.addEventListener("DOMContentLoaded", () => {
  // company name
  const companyNameDom = document.getElementById("company-name");
  companyNameDom.innerText = data.companyName;
  companyNameDom.classList.remove("no-value");

  // company address
  const companyAddressDom = document.getElementById("company-address");
  companyAddressDom.innerText = data.companyAddress;
  companyAddressDom.classList.remove("no-value");

  // date
  const dateDom = document.getElementById("date");
  dateDom.innerText = data.invoiceDate;
  dateDom.classList.remove("no-value");

  // due date
  const dueDateDom = document.getElementById("due-date");
  dueDateDom.innerText = data.invoiceDueDate;
  dueDateDom.classList.remove("no-value");

  //Borcele Bank
  //Account Name: Adeline Palmerston
  //Account No.: 0123 4567 8901
  let htmlString = "";
  for (let i = 0; i < data.companyAddress.length; i++) {
    htmlString = htmlString + data.companyAddress[i] + "<br>";
  }
  console.log(htmlString);
  // const companyAddressDom = document.getElementById('company-address')

  // pay to company
  const payToCompanyDom = document.getElementById("pay-to-company");
  payToCompanyDom.innerText = data.payToCompany;
  payToCompanyDom.classList.remove("no-value");

  // pay to name
  const payToNameDom = document.getElementById("pay-to-name");
  payToNameDom.innerText = data.payToName;
  payToNameDom.classList.remove("no-value");

  // pay to number
  const payToNumberDom = document.getElementById("pay-to-number");
  payToNumberDom.innerText = data.payToNumber;
  payToNumberDom.classList.remove("no-value");

  // description
  const descriptionDom = document.getElementById("description");
  descriptionDom.classList.remove("no-value-border-above-below");

  // unit price
  const unitPriceDom = document.getElementById("description2");
  unitPriceDom.classList.remove("no-value-border-above-below");

  // quantity
  const quantityDom = document.getElementById("description3");
  quantityDom.classList.remove("no-value-border-above-below");

  // total
  const totalDom = document.getElementById("description4");
  totalDom.classList.remove("no-value-border-above-below");

  // description
  const description2Dom = document.getElementById("description");
  description2Dom.classList.remove("no-value");

  // brand consultation
  const brandConsultationDom = document.getElementById("brand-consultation");
  brandConsultationDom.classList.remove("no-value");

  // logo design
  const logoDesignDom = document.getElementById("logo-design");
  logoDesignDom.classList.remove("no-value");

  // website design
  const websiteDesignDom = document.getElementById("website-design");
  websiteDesignDom.classList.remove("no-value");

  // social media templates
  const socialMediaTemplatesDom = document.getElementById(
    "social-media-templates"
  );
  socialMediaTemplatesDom.classList.remove("no-value");

  // brand photography
  const brandPhotographyDom = document.getElementById("brand-photography");
  brandPhotographyDom.classList.remove("no-value");

  // brand guide
  const brandGuideDom = document.getElementById("Brand-guide");
  brandGuideDom.classList.remove("no-value");

  // // unit price brand guide
  // const unitPrice2Dom = document.getElementById("Brand-guide");
  // unitPrice2Dom.classList.remove("no-value");

  // // quantity brand guide
  // const quantity2Dom = document.getElementById("Brand-guide");
  // quantity2Dom.classList.remove("no-value");

  // // total brand guide
  // const total2Dom = document.getElementById("Brand-guide");
  // total2Dom.classList.remove("no-value");

  // items
  const itemsDom = document.getElementById("items");
  itemsDom.classList.remove("no-value-border-above-below2");

  // <tr class="border-above-below">
  //               <th id="description" class="no-value-border-above-below">DESCRIPTION</th>
  //               <th id="description2" class="no-value-border-above-below">UNIT PRICE</th>
  //               <th id="description3" class="no-value-border-above-below">QTY</th>
  //               <th id="description4" class="no-value-border-above-below">TOTAL</th>
  //           </tr>

});


// document.addEventListener("DOMContentLoaded", () => {
//   // Richard Sanches
  
//   // company name
  
//   const companyNameDom = document.getElementById("company-name");
//   companyNameDom.innerText = data.companyName;
//   companyNameDom.classList.remove("no-value");

//   // 1234 Anywhere St., Any City
//   // company address
//   let htmlString = "";
//   for (let i = 0; i < data.companyAddress.length; i++) {
//     htmlString = htmlString + data.companyAddress[i] + "<br>";
//   }
//   console.log(htmlString);
//   const companyAddressDom = document.getElementById("company-address");
//   companyAddressDom.innerHTML = htmlString;
//   companyAddressDom.classList.remove("no-value");

//   // issued to name

//   // issued to address

//   // pay to company

//   // pay to name

//   // pay to number

//   // invoice no

//   // items and tax
//   //   <tr>
//   //     <td class="text-left">
//   //         <span id="brand-consultation" class="no-value">Brand consultation</span>
//   //     </td>
//   //     <td class="text-right">100</td>
//   //     <td class="text-right">1</td>
//   //     <td class="text-right">$100</td>
//   // </tr>
//   htmlString += "";
//   for (let i = 0; i < data.items.length; i++) {
//     const amount = data.items[i].unitPrice * data.items[i].quantity;

//     htmlString = '';
//     htmlString = '<tr>';
//     htmlString = '<td class="text-left">' + data.items[i].description + '</td>';
//     htmlString = '<td class="text-right">' + data.items[i].unitPrice + '</td>';
//     htmlString = '<td class="text-right">' + data.items[i].quantity + '</td>';
//     htmlString = '<td class="text-right">' + data.items[i].total + '</td>';
//     htmlString = '</tr>';

//   }
//   const tableDom = document.getElementById("table");
//   tableDom.innerHTML = htmlString;
// });
