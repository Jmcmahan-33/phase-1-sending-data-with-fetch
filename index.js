const submitData = function (name, email) {
    return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify({
            name: "Steve",
            email:"steve@steve.com",
        })
    })
    .then(function (response) {
        return response.json()
    })
    .then(function (object) {
        console.log(object)
        document.body.innerHTML = object["id"]
    })
    .catch(function (error) {
        alert("oh no")
        document.body.innerHTML = error.message
    })
    
    }




