document.getElementById("registerForm").addEventListener("submit", async function(event) {
    event.preventDefault();

    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    
    // --- ADDED PASSWORD CHECK ---
    if (password !== confirmPassword) {
        alert("❌ Passwords do not match! Please confirm your password.");
        return; 
    }
    // --- END ADDED PASSWORD CHECK ---

    const user = {
        name: document.getElementById("fullname").value,
        username: document.getElementById("username").value,
        phone: document.getElementById("phone").value,
        email: document.getElementById("email").value,
        password: password 
    };

    const response = await fetch("https://web-production-7b014.up.railway.app/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user)
    });

    if (response.ok) {
        alert("✅ Registration Successful");
        window.location.href = "signin.html";
    } else {
        alert("❌ Registration Failed! Please check your input.");
    }
});