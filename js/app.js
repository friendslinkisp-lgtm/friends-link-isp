// Friend's Link ISP
// app.js

async function testConnection() {
    try {
        const { data, error } = await supabaseClient
            .from("settings")
            .select("*");

        if (error) {
            console.error("❌ Supabase Error:", error);
            alert("❌ Database Connection Failed!\n\n" + error.message);
            return;
        }

        console.log("✅ Supabase Connected Successfully");
        console.table(data);

        alert("✅ Friend's Link ISP Database Connected Successfully!");

    } catch (err) {
        console.error("❌ Unexpected Error:", err);
        alert("Unexpected Error: " + err.message);
    }
}

// Run when page loads
document.addEventListener("DOMContentLoaded", () => {
    testConnection();
});
