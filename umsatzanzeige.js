accounts.forEach(function(account){
    $(".accountselector__account").has(".iban--formatted").has(".account-number:contains('" + account.number  + "')").children('.variante').children('b').text(account.name)
});
