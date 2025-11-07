document.getElementById("login-form").addEventListener("submit", async function(event){
    event.preventDefault();

    const loginData = {
        email: document.getElementById("email").value,
        password: document.getElementById("password").value
    };

    try {
        const response = await fetch("https://web-production-7b014.up.railway.app/api/auth/login", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(loginData)
        });

        // ✅ If login failed (401), show message
        if (!response.ok) {
            document.getElementById("error-message").innerText = "Invalid email or password!";
            return;
        }

        const result = await response.json();  // Expected: { id, name, email }

        // ✅ Store needed user data for dashboard
        localStorage.setItem("userId", result.id);
        localStorage.setItem("userName", result.name);
        localStorage.setItem("userEmail", result.email); // ✅ IMPORTANT FOR PROGRESS

        // ✅ Redirect to dashboard
        window.location.href = "dashboard.html";

    } catch (error) {
        console.error("Login error:", error);
        document.getElementById("error-message").innerText = "Server error! Try again.";
    }
});
