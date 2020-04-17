var form = document.querySelector('#registerForm');
var go = document.querySelector('#go');

function setClassMessage(className, message) {
  var n = go.className;
  n = n.replace("btn-outline-light", "").replace("btn-success", "").replace("btn-danger", "").replace("btn-info", "");
  go.className = n + className;
  go.value = message;
}

form.onsubmit = e => {
  e.preventDefault();

  setClassMessage("btn-info", "Submitting");

  var xhr = new XMLHttpRequest();
  xhr.open(form.method, form.action, true);
  xhr.setRequestHeader('Accept', 'application/json');
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.send(JSON.stringify({
    email: document.querySelector('#email').value
  }));
  
  xhr.onloadend = response => {
    if (response.target.status === 200) {
      setClassMessage("btn-success", "Success");
      form.reset();
    } else {
      setClassMessage("btn-danger", "Failed");
      console.error(response.target.response);
    }
    setTimeout(function () {
      setClassMessage("btn-outline-light", "Subscribe");
    }, 1000);
  };
};
