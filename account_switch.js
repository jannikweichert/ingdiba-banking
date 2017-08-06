accounts.forEach(function(account){
    var number = account.number.replace(/\s/g,'');
    $(".accountselector__account").has(".iban--formatted").has(".account-number:contains('" + number + "')").children('.variante').children('b').text(account.name)
});
