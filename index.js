function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      return $('form input:first-child[:name]')
    })
}

preventRefreshOnSubmit()
