async function send() {
  const input = document.getElementById("userInput");
  const msg = input.value;
  input.value = "";

  document.getElementById("chat-box").innerHTML += 
    `<p><b>You:</b> ${msg}</p>`;

  const res = await fetch("https://api.deepseek.com/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer YOUR_API_KEY_HERE"
    },
    body: JSON.stringify({
      model: "deepseek-chat",
      messages: [
        { role: "system", content: "You are NomanX AI, a smart helpful assistant." },
        { role: "user", content: msg }
      ]
    })
  });

  const data = await res.json();
  const reply = data.choices[0].message.content;

  document.getElementById("chat-box").innerHTML += 
    `<p><b>NomanX AI:</b> ${reply}</p>`;
}
https://api.deepseek.com/chat/completions
sk-a445ea3501de47fa812cd857c1e355e8
