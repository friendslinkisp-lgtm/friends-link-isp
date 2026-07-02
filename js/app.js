async function testConnection() {
  const { data, error } = await supabaseClient
    .from("settings")
    .select("*");

  if (error) {
    console.log(error);
    alert(error.message);
    return;
  }

  alert("Supabase Connected Successfully");
  console.log(data);
}

testConnection();
