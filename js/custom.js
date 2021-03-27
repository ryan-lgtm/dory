$('#stateInput').focus();

var data = [{
    name: "Alabama",
    code: "AL",
    url: "https://revenue.alabama.gov/sales-use/",
    forms_url: "",
    online_file_url: "https://myalabamataxes.alabama.gov/_/",
    payment_url: "",
    registration_url: "https://revenue.alabama.gov/sales-use/business-tax-online-registration-system/"
  },
  {
    name: "Alaska",
    code: "AK",
    url: "http://www.tax.alaska.gov/programs/programs/index.aspx?10002",
    forms_url: "",
    online_file_url: "",
    payment_url: "",
    registration_url: "https://arsstc.org/"
  },
  {
    name: "Arizona",
    code: "AZ",
    url: "https://www.aztaxes.gov/",
    forms_url: "https://www.azdor.gov/Forms/TransactionPrivilegeTax.aspx",
    online_file_url: "https://aztaxes.gov/Home/Login",
    payment_url: "",
    registration_url: "https://www.aztaxes.gov/default.aspx?target=Introduction"
  },
  {
    name: "Arkansas",
    code: "AR",
    url: "http://www.dfa.arkansas.gov/offices/exciseTax/salesanduse/Pages/default.aspx",
    forms_url: "http://www.dfa.arkansas.gov/offices/exciseTax/salesanduse/Documents/SupplementalLocalSalesandUseTaxSchedule.pdf",
    online_file_url: "https://atap.arkansas.gov/_/",
    payment_url: "",
    registration_url: "https://atap.arkansas.gov/_/"
  },
  {
    name: "California",
    code: "CA",
    url: "https://www.cdtfa.ca.gov/taxes-and-fees/sutprograms.htm",
    forms_url: "https://www.cdtfa.ca.gov/formspubs/forms.htm",
    online_file_url: "https://onlineservices.cdtfa.ca.gov/_/",
    payment_url: "",
    registration_url: "https://efile.boe.ca.gov/ereg/index.boe"
  },
  {
    name: "Colorado",
    code: "CO",
    url: "https://www.colorado.gov/tax",
    forms_url: "https://www.colorado.gov/pacific/sites/default/files/DR0100.pdf",
    online_file_url: "https://www.colorado.gov/revenueonline/_/",
    payment_url: "https://tax.colorado.gov/electronic-funds-transfer",
    registration_url: "https://www.colorado.gov/revenueonline/_/"
  },
  {
    name: "Connecticut",
    code: "CT",
    url: "https://drs.ct.gov/eservices/_/",
    forms_url: "http://www.ct.gov/drs/lib/drs/fillable_forms/2011forms/2011-os-114-fillable.pdf",
    online_file_url: "https://drsbustax.ct.gov/AUT/welcomebusiness.aspx",
    payment_url: "",
    registration_url: "http://www.ct.gov/drs/cwp/view.asp?a=1509&q=266240#tsc"
  },
  {
    name: "Delaware",
    code: "DE",
    url: "http://revenue.delaware.gov/services/BusServices.shtml",
    forms_url: "",
    online_file_url: "",
    payment_url: "",
    registration_url: ""
  },
  {
    name: "District of Columbia",
    code: "DC",
    url: "http://otr.cfo.dc.gov/",
    forms_url: "http://otr.cfo.dc.gov/page/sales-and-use-tax-forms",
    online_file_url: "https://mytax.dc.gov/_/",
    payment_url: "",
    registration_url: "https://www.taxpayerservicecenter.com/fr500/"
  },
  {
    name: "Florida",
    code: "FL",
    url: "http://floridarevenue.com/taxes/taxesfees/Pages/sales_tax.aspx",
    forms_url: "http://floridarevenue.com/Forms_library/current/dr15.pdf",
    online_file_url: "https://ritx-fl-sales.bswa.net/",
    payment_url: "",
    registration_url: "https://taxapps.floridarevenue.com/IRegistration/"
  },
  {
    name: "Georgia",
    code: "GA",
    url: "https://dor.georgia.gov/sales-use-tax",
    forms_url: "https://dor.georgia.gov/documents/st-3-sales-and-use-tax-returns-and-addendums",
    online_file_url: "https://gtc.dor.ga.gov/_/",
    payment_url: "",
    registration_url: "https://gtc.dor.ga.gov/_/#2"
  },
  {
    name: "Hawaii",
    code: "HI",
    url: "http://tax.hawaii.gov/geninfo/get/",
    forms_url: "http://tax.hawaii.gov/forms/a1_b2_1geuse/",
    online_file_url: "https://hitax.hawaii.gov/_/",
    payment_url: "",
    registration_url: "https://hitax.hawaii.gov/_/"
  },
  {
    name: "Idaho",
    code: "ID",
    url: "http://tax.idaho.gov/i-1049.cfm",
    forms_url: "https://tax.idaho.gov/search-formspublications.cfm?ch=sales&ch2=use&t=tt",
    online_file_url: "https://idahotap.gentax.com/TAP/_/",
    payment_url: "",
    registration_url: "http://tax.idaho.gov/i-1159.cfm"
  },
  {
    name: "Illinois",
    code: "IL",
    online_file_url: "https://mytax.illinois.gov/_/",
    payment_url: "https://mytax.illinois.gov",
    registration_url: "https://mytax.illinois.gov/_/#2"
  },
  {
    name: "Indiana",
    code: "IN",
    url: "https://www.in.gov/dor/3986.htm",
    forms_url: "https://www.in.gov/dor/3504.htm",
    online_file_url: "https://www.intax.in.gov/login",
    payment_url: "",
    registration_url: "https://intime.dor.in.gov/eServices/_/#1"
  },
  {
    name: "Iowa",
    code: "IA",
    url: "https://tax.iowa.gov/iowa-sales-and-use-tax-guide",
    forms_url: "https://tax.iowa.gov/form-types/sales-and-use-tax",
    online_file_url: "https://efilepay.idr.iowa.gov/iao_aaa/welcome.asp",
    payment_url: "",
    registration_url: "https://www.idr.iowa.gov/CBA/start.asp"
  },
  {
    name: "Kansas",
    code: "KS",
    url: "https://www.ksrevenue.org/bustaxtypessales.html",
    forms_url: "https://www.ksrevenue.org/forms-btsales.html",
    online_file_url: "https://www.kdor.ks.gov/Apps/kcsc/login.aspx?ReturnUrl=%2fApps%2fKCSC%2fsecure%2fdefault.aspx",
    payment_url: "",
    registration_url: "https://www.kdor.ks.gov/Apps/kcsc/login.aspx?ReturnUrl=%2fApps%2fKCSC%2fSecure%2fDefault.aspx"
  },
  {
    name: "Kentucky",
    code: "KY",
    url: "https://revenue.ky.gov/Business/Sales-Use-Tax/Pages/default.aspx",
    forms_url: "https://revenue.ky.gov/Business/Sales-Use-Tax/Pages/default.aspx",
    online_file_url: "https://onestop.portal.ky.gov/onestopportal/",
    payment_url: "",
    registration_url: "https://onestop.portal.ky.gov/onestopportal/"
  },
  {
    name: "Louisiana",
    code: "LA",
    forms_url: "http://www.revenue.louisiana.gov/forms/taxforms/1029(7_11)F.pdf",
    parish_url: "https://parishe-file.revenue.louisiana.gov/default_1.aspx",
    remote_sellers_url: "https://remotesellersfiling.louisiana.gov/",
    ltap_url: "https://latap.revenue.louisiana.gov/_/",
    payment_url: "",
    registration_url: "https://latap.revenue.louisiana.gov/_/#2"
  },
  {
    name: "Maine",
    code: "ME",
    url: "http://www.maine.gov/revenue/salesuse/salestax/salestax.html",
    forms_url: "http://www.maine.gov/revenue/forms/homepage.html",
    online_file_url: "https://portal.maine.gov/salestax/welcome",
    payment_url: "",
    registration_url: "https://www.maine.gov/cgi-bin/online/suwtaxreg/index"
  },
  {
    name: "Maryland",
    code: "MD",
    url: "http://taxes.marylandtaxes.gov/Business_Taxes/Business_Tax_Types/Sales_and_Use_Tax/",
    forms_url: "http://taxes.marylandtaxes.gov/Business_Taxes/Business_Tax_Types/Sales_and_Use_Tax/Filing_Information/Sales_and_Use_Tax_Forms/",
    online_file_url: "https://interactive.marylandtaxes.gov/business/bfile/osc/selectapp.aspx",
    payment_url: "",
    registration_url: "https://interactive.marylandtaxes.com/webapps/comptrollercra/entrance.asp"
  },
  {
    name: "Massachusetts",
    code: "MA",
    url: "https://www.mass.gov/sales-and-use-tax-for-businesses",
    forms_url: "https://www.mass.gov/lists/dor-sales-and-use-tax-forms",
    online_file_url: "https://mtc.dor.state.ma.us/mtc/_/",
    payment_url: "",
    registration_url: "https://mtc.dor.state.ma.us/mtc/_/#2"
  },
  {
    name: "Michigan",
    code: "MI",
    url: "http://www.michigan.gov/taxes/0,4676,7-238-43529---,00.html",
    forms_url: "http://www.michigan.gov/taxes/0,4676,7-238-44079-401015--,00.html",
    online_file_url: "https://mto.treasury.michigan.gov/eai/mtologin/authenticate?URL=/",
    payment_url: "http://www.michigan.gov/taxes/0,1607,7-238-44070-156649--,00.html",
    registration_url: "http://www.michigan.gov/taxes/0,1607,7-238-43519_43521_44039-5922--,00.html"
  },
  {
    name: "Minnesota",
    code: "MN",
    forms_url: "",
    online_file_url: "https://www.mndor.state.mn.us/tp/eservices/_/",
    registration_url: "https://www.mndor.state.mn.us/tp/eservices/_/"
  },
  {
    name: "Mississippi",
    code: "MS",
    url: "http://www.dor.ms.gov/Business/Pages/Sales-Use-Tax-landing.aspx",
    forms_url: "",
    online_file_url: "https://tap.dor.ms.gov/_/",
    payment_url: "",
    registration_url: "https://tap.dor.ms.gov/_/#5"
  },
  {
    name: "Missouri",
    code: "MO",
    url: "http://dor.mo.gov/business/sales/",
    forms_url: "http://dor.mo.gov/forms/index.php?formName=&category=21&year=&searchForms=Search+Forms",
    online_file_url: "https://mytax.mo.gov",
    payment_url: "",
    registration_url: "https://mytax.mo.gov/rptp/portal/business/register-new-business/!ut/p/z1/04_Sj9CPykssy0xPLMnMz0vMAfIjo8zijS0MnN09DIy8DFxDDA0cjfx9vd08wgwM3E30w8EKDHAARwP9KGL041EQhd_4cP0oVCvcQ4ONDBz9HUNNwhy9jAzMzKAK8JhRkBsaYZDpqAgAiwV9cA!!/dz/d5/L2dBISEvZ0FBIS9nQSEh/"
  },
  {
    name: "Montana",
    code: "MT",
    url: "http://revenue.mt.gov/forindividuals/taxes_licenses_fees_permits/salestax.mcpx",
    forms_url: "",
    online_file_url: "",
    payment_url: "",
    registration_url: ""
  },
  {
    name: "Nebraska",
    code: "NE",
    url: "http://www.revenue.nebraska.gov/salestax.html",
    forms_url: "http://www.revenue.nebraska.gov/tax/current/fill-in/f_10.pdf",
    online_file_url: "https://revenue.nebraska.gov/user",
    payment_url: "http://www.revenue.nebraska.gov/electron/bus_e-pay.html",
    registration_url: "https://cio-centurion.ne.gov/centauth/login.xhtml?applicationCode=12555d25-8d60-4a03-96bc-261d74795454&organizationCode=BOOT%3AREVENUE&invitationCode=-1&urlForRedirect=https%3A%2F%2Fndr-taxapp.ne.gov%2Frevtaxapp%2Fpages%2FappWelcomePage.faces"
  },
  {
    name: "Nevada",
    code: "NV",
    url: "https://tax.nv.gov",
    forms_url: "https://tax.nv.gov/Forms/Sales___Use_Tax_Forms/",
    online_file_url: "https://www.nevadatax.nv.gov/web/",
    payment_url: "",
    registration_url: "https://www.nevadatax.nv.gov/WEB/default.aspx"
  },
  {
    name: "New Hampshire",
    code: "NH",
    url: "",
    forms_url: "",
    online_file_url: "",
    payment_url: "",
    registration_url: ""
  },
  {
    name: "New Jersey",
    code: "NJ",
    url: "https://www.state.nj.us/treasury/revenue/",
    online_file_url: "https://www1.state.nj.us/TYTR_BusinessFilings/jsp/common/Login.jsp?taxcode=55",
    payment_url: "",
    registration_url: "https://www.njportal.com/DOR/BusinessRegistration/Home/FirstStep"
  },
  {
    name: "New Mexico",
    code: "NM",
    url: "http://www.tax.newmexico.gov/Businesses/gross-receipts.aspx",
    online_file_url: "https://tap.state.nm.us/tap/_/#14",
    forms_url: "",
    payment_url: "",
    registration_url: "https://tap.state.nm.us/tap/_/#1"
  },
  {
    name: "New York",
    code: "NY",
    url: "http://www.tax.ny.gov/bus/st/stidx.htm",
    forms_url: "http://www.tax.ny.gov/forms/sales_cur_forms.htm",
    online_file_url: "https://www.tax.ny.gov/",
    payment_url: "",
    registration_url: "https://www.tax.ny.gov/bus/st/register.htm"
  },
  {
    name: "North Carolina",
    code: "NC",
    url: "http://www.dornc.com/taxes/sales/",
    forms_url: "https://www.ncdor.gov/taxes/sales-and-use-tax/sales-and-use-tax-forms-and-certificates",
    online_file_url: "https://eservices.dor.nc.gov/sau/contact.jsp",
    payment_url: "",
    registration_url: "http://www.dornc.com/electronic/registration/index.html"
  },
  {
    name: "North Dakota",
    code: "ND",
    url: "http://www.nd.gov/tax/user/businesses/formspublications/sales-use-tax",
    forms_url: "http://www.nd.gov/tax/user/businesses/formspublications/sales-use-tax/forms--instructions",
    online_file_url: "https://apps.nd.gov/tax/tap/_/",
    payment_url: "",
    registration_url: "https://apps.nd.gov/tax/tap/_/"
  },
  {
    name: "Ohio",
    code: "OH",
    url: "https://www.tax.ohio.gov/sales_and_use.aspx",
    forms_url: "https://www.tax.ohio.gov/Forms.aspx?TaxType=Sales%20And%20Use%20Tax",
    online_file_url: "https://tax.ohio.gov/wps/portal/gov/tax/business/obg-login/ohio-business-gateway-2-0",
    payment_url: "https://www.tax.ohio.gov/sales_and_use/payment.aspx",
    registration_url: "https://oktap.tax.ok.gov/oktap/Web/_/#1"
  },
  {
    name: "Oklahoma",
    code: "OK",
    url: "https://www.ok.gov/tax/All_Taxes/Sales_&_Use_Tax/",
    forms_url: "http://www.tax.ok.gov/salestax-r.html",
    online_file_url: "https://oktap.tax.ok.gov/oktap/web/_/",
    payment_url: "",
    registration_url: "http://www.ok.gov/tax/Online_Services/Online_Business_Registration.html"
  },
  {
    name: "Oregon",
    code: "OR",
    url: "",
    forms_url: "",
    online_file_url: "",
    payment_url: "",
    registration_url: ""
  },
  {
    name: "Pennsylvania",
    code: "PA",
    url: "http://www.revenue.pa.gov/GeneralTaxInformation/Tax%20Types%20and%20Information/SUT/Pages/default.aspx",
    forms_url: "https://www.revenue.pa.gov/FormsandPublications/FormsforBusinesses/SUT/Pages/default.aspx",
    online_file_url: "https://www.etides.state.pa.us/ESignature/Account/LogOn",
    payment_url: "",
    registration_url: "http://www.pa100.state.pa.us/"
  },
  {
    name: "Puerto Rico",
    code: "PR",
    url: "http://www.hacienda.gobierno.pr/ivu/planilla-mensual-de-ivu",
    forms_url: "http://www.hacienda.gobierno.pr/ivu/planilla-mensual-de-ivu",
    online_file_url: "https://comerciantes.hacienda.pr.gov/",
    payment_url: "",
    registration_url: "https://suri.hacienda.pr.gov/_/"
  },
  {
    name: "Rhode Island",
    code: "RI",
    url: "http://www.tax.ri.gov/regulations/salestax/",
    forms_url: "",
    online_file_url: "https://taxportal.ri.gov/",
    payment_url: "",
    registration_url: "https://www.ri.gov/taxation/BAR/"
  },
  {
    name: "South Carolina",
    code: "SC",
    url: "https://mydorway.dor.sc.gov/_/",
    forms_url: "https://dor.sc.gov/tax/sales/forms",
    online_file_url: "https://mydorway.dor.sc.gov/_/",
    payment_url: "https://mydorway.dor.sc.gov/_/",
    registration_url: "https://mydorway.dor.sc.gov/_/"
  },
  {
    name: "South Dakota",
    code: "SD",
    url: "http://dor.sd.gov/Taxes/Business_Taxes/",
    forms_url: "http://dor.sd.gov/Taxes/Business_Taxes/Forms/Sales_Tax_Forms.aspx",
    online_file_url: "https://apps.sd.gov/rv23epath/login.aspx",
    payment_url: "",
    registration_url: "https://apps.sd.gov/rv23cedar/main/main.aspx"
  },
  {
    name: "Tennessee",
    code: "TN",
    url: "https://www.tn.gov/revenue/taxes/sales-and-use-tax.html",
    forms_url: "https://www.tn.gov/content/tn/revenue/taxes/sales-and-use-tax/forms.html",
    online_file_url: "https://tntap.tn.gov/EServices/_/",
    payment_url: "",
    registration_url: "https://tntap.tn.gov/eservices/_/"
  },
  {
    name: "Texas",
    code: "TX",
    url: "https://comptroller.texas.gov/taxes/sales/",
    forms_url: "https://comptroller.texas.gov/taxes/sales/forms/",
    online_file_url: "https://security.app.cpa.state.tx.us/",
    payment_url: "",
    registration_url: "https://security.app.cpa.state.tx.us/"
  },
  {
    name: "Utah",
    code: "UT",
    url: "https://tax.utah.gov/sales",
    forms_url: "http://tax.utah.gov/forms/current/tc-62s.pdf",
    online_file_url: "https://tap.tax.utah.gov/TaxExpress/_/",
    payment_url: "",
    registration_url: "https://tap.tax.utah.gov/TaxExpress/_/#1"
  },
  {
    name: "Vermont",
    code: "VT",
    url: "http://tax.vermont.gov/business-and-corp/sales-and-use-tax",
    forms_url: "http://tax.vermont.gov/sites/tax/files/documents/SUT-451.pdf",
    online_file_url: "https://myvtax.vermont.gov/_/",
    payment_url: "",
    registration_url: "https://myvtax.vermont.gov/_/#2"
  },
  {
    name: "Virginia",
    code: "VA",
    url: "https://www.tax.virginia.gov/sales-and-use-tax",
    forms_url: "https://www.tax.virginia.gov/eforms",
    online_file_url: "https://www.business.tax.virginia.gov/VTOL/tax/Login.xhtml?faces-redirect=true",
    payment_url: "",
    registration_url: "https://www.ireg.tax.virginia.gov/VTOL/Login.seam"
  },
  {
    name: "Washington",
    code: "WA",
    url: "https://dor.wa.gov/find-taxes-rates/retail-sales-tax",
    forms_url: "http://dor.wa.gov/content/GetAFormOrPublication/FormBySubject/excise/default.aspx",
    online_file_url: "https://secure.dor.wa.gov/home/",
    payment_url: "",
    registration_url: "https://secure.dor.wa.gov/home/Login"
  },
  {
    name: "West Virginia",
    code: "WV",
    url: "https://tax.wv.gov/Business/SalesAndUseTax/Pages/SalesAndUseTax.aspx",
    forms_url: "https://tax.wv.gov/Documents/TaxForms/2018/cst200cu.pdf",
    online_file_url: "https://mytaxes.wvtax.gov/_/",
    payment_url: "",
    registration_url: "https://www.business4wv.com/b4wvpublic/default.aspx"
  },
  {
    name: "Wisconsin",
    code: "WI",
    url: "https://www.revenue.wi.gov/Pages/SalesAndUse/Home.aspx",
    forms_url: "https://www.revenue.wi.gov/DORForms/s-012f.pdf",
    online_file_url: "https://tap.revenue.wi.gov/mta/_/",
    payment_url: "",
    registration_url: "http://www.revenue.wi.gov/salesanduse/"
  },
  {
    name: "Wyoming",
    code: "WY",
    url: "http://revenue.wyo.gov/Excise-Tax-Division",
    forms_url: "http://revenue.wyo.gov/Excise-Tax-Division/sales-and-use-tax-returns",
    online_file_url: "https://excise-wyifs.wy.gov/",
    payment_url: "",
    registration_url: "https://excise-wyifs.wy.gov/"
  }
]




var dataArr = {};

$(function() {
  window.dataArr = data;
});

// Respond to any input change, and show first few matches
$("#stateInput").on('keypress keyup change input', function() {
  var term = $(this).val().toLowerCase();
  $('#matches').html(!term.length ? '' :
    dataArr.filter(function(dor) {
      // look for the entry with a matching `code` value
      return (dor.code.toLowerCase().indexOf(term) !== -1);
    }).map(function(dor) {
      // get titles of matches

      if (dor.code.toLowerCase() == 'la') {
        return '<span style="font-weight: bold;">' +
          dor.name +
          '</span><br/>' +
          '<a class="stateLink" target="_blank" href="' + dor.url + '">Primary Website</a><br/>' +
          '<a class="stateLink" target="_blank" href="' + dor.registration_url + '">Registration</a><br/>' +
          '<a class="stateLink" target="_blank" href="' + dor.forms_url + '">Forms</a><br/>' +
          '<a class="stateLink" target="_blank" href="' + dor.remote_sellers_url + '">Online Filing - Remote Sellers</a><br/>' +
          '<a class="stateLink" target="_blank" href="' + dor.ltap_url + '">Online Filing - LA Taxpayer Access Point</a><br/>' +
          '<a class="stateLink" target="_blank" href="' + dor.parish_url + '">Online Filing - Parish Filing</a><br/>'
      } else {
        return '<span style="font-weight: bold;">' +
          dor.name +
          '</span><br/>' +
          '<a class="stateLink" target="_blank" href="' + dor.url + '">Primary Website</a><br/>' +
          '<a class="stateLink" target="_blank" href="' + dor.registration_url + '">Registration</a><br/>' +
          '<a class="stateLink" target="_blank" href="' + dor.forms_url + '">Forms</a><br/>' +
          '<a class="stateLink" target="_blank" href="' + dor.online_file_url + '">Online Filing</a><br/>';
      }
    }).join('\n')); // create one text with a line per matched title
});

document.addEventListener('DOMContentLoaded', function() {
  for (const anchor of document.getElementsByTagName('a')) {
    anchor.onclick = () => {
      chrome.tabs.create({
        active: true,
        url: anchor.href
      });
    };
  };
});
