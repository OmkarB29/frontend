document.getElementById("login-form").addEventListener("submit", async function(event){
    event.preventDefault();

    const loginData = {
        email: document.getElementById("email").value,
        password: document.getElementById("password").value
    };

    const response = await fetch("https://web-production-7b014.up.railway.app/api/auth/login", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(loginData)
    });

    const result = await response.json(); // <-- CHANGE: Expecting user object

    if(result && result.id){ // Login success
        localStorage.setItem("userId", result.id);
        localStorage.setItem("userName", result.name); // ✅ SAVE NAME
        window.location.href = "dashboard.html";
    } 
    else {
        document.getElementById("error-message").innerText = "Invalid email or password!";
    }
});
