console.log("JS Loaded");

import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

// 🔵 Supabase Config
const supabaseUrl = "https://onfqwlacumsrpldwpeoe.supabase.co";

const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9uZnF3bGFjdW1zcnBsZHdwZW9lIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODA0OTYzNTQsImV4cCI6MjA5NjA3MjM1NH0.c5f-kIGelwcBkb6R5nEHVNVHOYL8XolKd6b2f0N4E0U";

const supabase = createClient(supabaseUrl, supabaseKey);

// 🟢 Form
const form = document.getElementById("contactForm");

if (form) {
  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    // 🔥 جمع البيانات بشكل مباشر من input
    const data = {
      fullName: document.getElementById("fullName").value.trim(),
      email: document.getElementById("email").value.trim(),
      phone: document.getElementById("phone").value
        ? Number(document.getElementById("phone").value)
        : null,
      age: document.getElementById("age").value
        ? Number(document.getElementById("age").value)
        : null,
      country: document.getElementById("country").value.trim(),
      city: document.getElementById("city").value.trim(),
      message: document.getElementById("message").value.trim()
    };

    console.log("Sending Data:", data);

    // ❗ Validation بسيط
    if (!data.fullName || !data.email || !data.message) {
      alert("من فضلك املئي البيانات المطلوبة");
      return;
    }

    // 🟣 إرسال إلى Supabase
    const { error } = await supabase
      .from("Form_Summition")
      .insert([data]);

    if (error) {
      console.log("Error:", error);
      alert("حصل خطأ في الإرسال ❌");
    } else {
      alert("تم الإرسال بنجاح 🎉");
      form.reset();
    }
  });
}