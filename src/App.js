
import './App.css';
import react from 'react';


class App extends react.Component {
 


  constructor(props){
    super(props);
   this.state={
     val:"1",
     value:""
   }
  }
  mf=()=>{
    var v=document.getElementById("i").value;
    var w=document.getElementById("j").value;
    
    fetch(`https://v6.exchangerate-api.com/v6/f692caaf1bd9db87193dcc0c/latest/`+v)
    .then(data=>{
    return data.json();
    })
    .then(data=>{
    var tar;
    var base=parseInt(document.getElementById("k").value);
    for(var n in data.conversion_rates){
    if(n===w){
    tar=data.conversion_rates[n];
   this.setState({val:Math.ceil(tar*base)})
    }
    }
    }
    
    );
  }
  mff=(e)=>{
    this.setState({value:e.target.value})
    e.target.value=this.state.value
  }
 render(){return (
    <div>
    <h3 >Currency Converter</h3>
<div id="shobhit">
<h5>select base curency:</h5><br/>
<select id="i" defaultValue="INR">
<option value="DZD">Algerian Dinar DZD</option>
<option value="ARS">Argentina Peso ARS</option>
<option value="AUD">Australian Dollar AUD</option>
<option value="BHD">Bahrain Dinar BHD</option>
<option value="BDT">Bangladeshi Taka BDT</option>
<option value="BYN">Belarus Ruble BYN</option>
<option value="BRL">Brazilian Real  BRL</option>
<option value="BND">Brunei Ringgit</option>
<option value="BGN">Bulgarian Lev BGN</option>
<option value="MMK">Burmese Kyat MMK</option>
<option value="KHR">Cambodian Riel KHR</option>
<option value="CAD">Canadian Dollar CAD</option>
<option value="CLP">Chilean Peso CLP</option>
<option value="CNY">Chinese Yuan CNY</option>
<option value="COP">Colombian Peso COP</option>
<option value="CRC">Costa Rican Colon CRC</option>
<option value="CZK">Czech Crown CZK</option>
<option value="DKK">Danisk Krone DKK</option>
<option value="EGP">Egyptian Pound EGP</option>
<option value="EUR">Euro EUR</option>
<option value="HKD">Hong Kong Dollar HKD</option>
<option value="HUF">Hungarian Forint HUF</option>
<option value="ISK">Icelandic Krona ISK</option>
<option value="INR">Indian Rupee INR</option>
<option value="IDR">Indonesian Rupiah IDR</option>
<option value="IRR">Iranian Rial IRR</option>
<option value="IQD">Iraqi Dinar IQD</option>
<option value="ILS">Israel New Shekel ILS</option>
<option value="JPY">Japanese Yen JPY</option>
<option value="JOD">Jordian Dinar JOD</option>
<option value="KZT">Kazakh Tenge KZT</option>
<option value="KES">Kenya Shilling KES</option>
<option value="KWD">Kuwait Dinar KWD</option>
<option value="LAK">Lao Kip LAK</option>
<option value="LBP">Lebanese Pound LBP</option>
<option value="MOP">Mecanese Pataca MOP</option>
<option value="MYR">Malaysian Ringgit MYR</option>
<option value="MXN">Mexican Peso MXN</option>
<option value="MDL">Moldavan Leu MDL</option>
<option value="MAD">Moroccan Dirham MAD</option>
<option value="NGN">Naira NGN</option>
<option value="NPR">Nepalese Rupee NPR</option>
<option value="TWD">New Taiwan Dollar TWD</option>
<option value="NZD">New Zeland Dollar NZD</option>
<option value="NOK">Norwegian Krone NOK</option>
<option value="OMR">Omani Rial OMR</option>
<option value="PKR">Pakistan Rupee PKR</option>
<option value="PHP">Philippine Peso PHP</option>
<option value="PLN">Polish Zloty PLN</option>
<option value="GBP">Pound Sterling GBP</option>
<option value="QAR">Qatari Riyal QAR</option>
<option value="RON">Romanian Leu RON</option>
<option value="RUB">Russian Ruble RUB</option>
<option value="SAR">Saudi Riyal SAR</option>
<option value="SGD">Singapore Dollar SGD</option>
<option value="ZAR">South African Rand ZAR</option>
<option value="LKR">Sri LAnka Rupee LKR</option>
<option value="SEK">Swedish Krona SEK</option>
<option value="CHF">Swiss Franc CHF</option>
<option value="SYP">Syrian Pound SYP</option>
<option value="TZS">Tanzania Shilling TZS</option>
<option value="THB">Thai Bhatt THB</option>
<option value="TND">Tunisian Dinar TND</option> 
<option value="TRY">Turkish Lira TRY</option>
<option value="AED">UAE Dirham AED</option>
<option value="UGX">Uganda Shilling UGX</option>
<option value="UAH">Ukranian Hryvna UAH</option>
<option value="USD">US Dollar USD</option>
<option value="UZS">Uzbekistan Som UZS</option>
<option value="VND">Viet-namese Dong VND</option>
<option value="KRW">Won KRW</option>
<option value="ZMW">Zambian Kwacha ZMW</option>
</select>
<br/><br/>
<h5>select target currency:</h5><br/>
<select id="j" defaultValue="INR">
<option value="DZD">Algerian Dinar DZD</option>
<option value="ARS">Argentina Peso ARS</option>
<option value="AUD">Australian Dollar AUD</option>
<option value="BHD">Bahrain Dinar BHD</option>
<option value="BDT">Bangladeshi Taka BDT</option>
<option value="BYN">Belarus Ruble BYN</option>
<option value="BRL">Brazilian Real  BRL</option>
<option value="BND">Brunei Ringgit</option>
<option value="BGN">Bulgarian Lev BGN</option>
<option value="MMK">Burmese Kyat MMK</option>
<option value="KHR">Cambodian Riel KHR</option>
<option value="CAD">Canadian Dollar CAD</option>
<option value="CLP">Chilean Peso CLP</option>
<option value="CNY">Chinese Yuan CNY</option>
<option value="COP">Colombian Peso COP</option>
<option value="CRC">Costa Rican Colon CRC</option>
<option value="CZK">Czech Crown CZK</option>
<option value="DKK">Danisk Krone DKK</option>
<option value="EGP">Egyptian Pound EGP</option>
<option value="EUR">Euro EUR</option>
<option value="HKD">Hong Kong Dollar HKD</option>
<option value="HUF">Hungarian Forint HUF</option>
<option value="ISK">Icelandic Krona ISK</option>
<option value="INR" >Indian Rupee INR</option>
<option value="IDR">Indonesian Rupiah IDR</option>
<option value="IRR">Iranian Rial IRR</option>
<option value="IQD">Iraqi Dinar IQD</option>
<option value="ILS">Israel New Shekel ILS</option>
<option value="JPY">Japanese Yen JPY</option>
<option value="JOD">Jordian Dinar JOD</option>
<option value="KZT">Kazakh Tenge KZT</option>
<option value="KES">Kenya Shilling KES</option>
<option value="KWD">Kuwait Dinar KWD</option>
<option value="LAK">Lao Kip LAK</option>
<option value="LBP">Lebanese Pound LBP</option>
<option value="MOP">Mecanese Pataca MOP</option>
<option value="MYR">Malaysian Ringgit MYR</option>
<option value="MXN">Mexican Peso MXN</option>
<option value="MDL">Moldavan Leu MDL</option>
<option value="MAD">Moroccan Dirham MAD</option>
<option value="NGN">Naira NGN</option>
<option value="NPR">Nepalese Rupee NPR</option>
<option value="TWD">New Taiwan Dollar TWD</option>
<option value="NZD">New Zeland Dollar NZD</option>
<option value="NOK">Norwegian Krone NOK</option>
<option value="OMR">Omani Rial OMR</option>
<option value="PKR">Pakistan Rupee PKR</option>
<option value="PHP">Philippine Peso PHP</option>
<option value="PLN">Polish Zloty PLN</option>
<option value="GBP">Pound Sterling GBP</option>
<option value="QAR">Qatari Riyal QAR</option>
<option value="RON">Romanian Leu RON</option>
<option value="RUB">Russian Ruble RUB</option>
<option value="SAR">Saudi Riyal SAR</option>
<option value="SGD">Singapore Dollar SGD</option>
<option value="ZAR">South African Rand ZAR</option>
<option value="LKR">Sri LAnka Rupee LKR</option>
<option value="SEK">Swedish Krona SEK</option>
<option value="CHF">Swiss Franc CHF</option>
<option value="SYP">Syrian Pound SYP</option>
<option value="TZS">Tanzania Shilling TZS</option>
<option value="THB">Thai Bhatt THB</option>
<option value="TND">Tunisian Dinar TND</option> 
<option value="TRY">Turkish Lira TRY</option>
<option value="AED">UAE Dirham AED</option>
<option value="UGX">Uganda Shilling UGX</option>
<option value="UAH">Ukranian Hryvna UAH</option>
<option value="USD">US Dollar USD</option>
<option value="UZS">Uzbekistan Som UZS</option>
<option value="VND">Viet-namese Dong VND</option>
<option value="KRW">Won KRW</option>
<option value="ZMW">Zambian Kwacha ZMW</option>
</select>
<br/><br/><br/>
<input onClick={this.mff} type="text" id="k"  placeholder="enter numeric value of base country"/><br/><br/><br/>
<button onClick={this.mf}>Convert</button>
<br/><br/>
<h1 id="h">{this.state.val}</h1>
<br/><br/> 

</div></div>
  );
  
}
}
export default App;
