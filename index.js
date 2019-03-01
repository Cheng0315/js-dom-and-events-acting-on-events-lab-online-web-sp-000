function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

function retrieveEmployeeInformation() {
  return document.querySelector('input').value;
}

function addNewElementAsLi() {
  return document.querySelector('.employee-list').append(retrieveEmployeeInformation())
}

function addNewLiOnClick() {
  document.querySelector('ul').addEventListener('click', function(event){
    return document.querySelector('.employee-list').append(retrieveEmployeeInformation())
  })
}

preventRefreshOnSubmit()
