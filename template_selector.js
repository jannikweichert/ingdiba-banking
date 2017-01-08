accounts.forEach(function(account){
    var option = $('option:contains(' + account.number + ')');
    //Check if account number is in list 
    if(option.length){
        var dibaAccountName = option.text().split("/")[1].trim();
        var optionText = option.text().replace(dibaAccountName, account.name);
        option.text(optionText);
    }
});
