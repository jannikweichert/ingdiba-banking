accounts.forEach(function(account){
 $(".account-row").has(".iban--formatted").has(".account-row__iban").has(".account-number:contains('"+account.number+"')").children('.account-row__inner').children('.account-row__type').text(account.name);
});
//document.getElementsByClassName('account-row__type')[0].textContent = 'Hauptkonto';
//document.getElementsByClassName('account-row__type')[2].textContent = 'Gehaltskonto';
//document.getElementsByClassName('account-row__type')[4].textContent = 'Rücklagen';
//document.getElementsByClassName('account-row__type')[6].textContent = 'Kaution Olfersstraße';
//document.getElementsByClassName('account-row__type')[8].textContent = 'Rücklagen 2';
//document.getElementsByClassName('account-row__type')[10].textContent = 'Kaution Schürbusch';
