async function testConnection() {
    const { data, error } = await supabaseClient
        .from('settings')
        .select('*');

    if (error) {
        console.error("❌ Supabase Error:", error.message);
        alert("Database connection failed!");
        return;
    }

    console.log("✅ Connected Successfully");
    console.log(data);

    alert("Friend's Link ISP Database Connected Successfully!");
}

testConnection();
