let name = "Nazmul";
let age = 25;
const role = "QA Automation Engineer";

console.log(name);
console.log(age);
console.log(role);

if (age >= 18) {
  console.log("Status: Adult");
} else {
  console.log("Status: Minor");
}

function login(username, password) {
  console.log("Attempting to login with user: " + username);
  console.log("Password provided: " + password);
}

// ফাংশন কল (Call) করা
login("testuser", "securePass123");
login("admin", "adminPass456");

// ১. Object
const user = {
  username: "nazmul_qa",
  role: "Admin"
};
console.log("Logged in user: " + user.username);

// ২. Array (লিস্ট/তালিকা)
const browsers = ["Chromium", "Firefox", "WebKit"];

// ৩. Loop (তালিকার প্রতিটা আইটেম একে একে প্রিন্ট করা)
for (let browser of browsers) {
  console.log("Running test on: " + browser);
}

// একটি ফেক ব্রাউজার টেস্ট ফাংশন
async function runTest() {
  console.log("১. ব্রাউজার ওপেন হচ্ছে...");
  
  // পেজ লোড হতে ২ সেকেন্ড সময় লাগবে এমন একটি সিমুলেশন
  await new Promise(resolve => setTimeout(resolve, 2000));
  
  console.log("২. পেজ লোড সম্পন্ন হলো (২ সেকেন্ড পর)!");
}

runTest();