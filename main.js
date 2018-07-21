function porownywanie(parametr1,parametr2) {
    
    if (parametr1 == 20 || parametr2 == 20 || (parametr1 + parametr2) <= 20) {

        return true;
    }
    
    else {
    
        return false;
    }
}

    console.log(porownywanie(15,20));
