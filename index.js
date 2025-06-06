const wisdoms = [
    "ازرع خيراً ولو في غير موضعه، فلن يضيع.",
    "لا تستصغر نفسك، فقد تكون أنت الإلهام لشخص آخر.",
    "النجاح لا يحتاج أعذار، فقط إرادة.",
    "الصبر على الشيء يوصلك لنتيجة ما يوصلها التسرع.",
    "الوقت أغلى من الذهب، لا تضيعه على من لا يستحق.",
    "ابنِ نفسك أولاً، قبل أن تبحث عمّن يكملك.",
    "التغيير يبدأ منك، مو من الظروف.",
    "ابتسم، ترى الدنيا تاخذ شكل ملامحك.",
    "المحاولة خير من الندم.",
    "خطوة صغيرة كل يوم تبني جبل.",
    "كل سقوط يعلمك الوقوف بثبات.",
    "ما فيه مستحيل مع الإصرار."
  ];
  
  function showWisdom() {
    const today = new Date();
    const dayNumber = today.getFullYear() * 365 + (today.getMonth() + 1) * 30 + today.getDate();
    const index = dayNumber % wisdoms.length;
  
    document.getElementById("wisdom-box").textContent = wisdoms[index];
    document.getElementById("wisdom-container").style.display = "block";
  }
  