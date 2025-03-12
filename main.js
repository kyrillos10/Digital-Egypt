// Serivce Start
const services = [
    { name: "استخراج شهادة ميلاد", documents: ["صورة بطاقة الرقم القومي للأب أو الأم", "صورة من شهادة زواج الوالدين", "رسوم الخدمة"] },
    { name: "استخراج بطاقة الرقم القومي", documents: ["استمارة بطاقة الرقم القومي", "صورة من شهادة الميلاد", "إثبات محل الإقامة"] },
    { name: "طلب زواج إلكتروني", documents: ["بطاقة الرقم القومي للطرفين", "شهادة الفحص الطبي", "توكيلات الزواج إن وجدت"] },
    { name: "طلب طلاق إلكتروني", documents: ["بطاقة الرقم القومي للطرفين", "قسيمة الزواج الأصلية", "شهادة الطلاق من المحكمة"] },
    { name: "تجديد رخصة القيادة", documents: ["بطاقة الرقم القومي سارية", "إيصال سداد الضرائب والرسوم", "شهادة براءة ذمة مرورية"] },
    { name: "استخراج جواز سفر", documents: ["بطاقة الرقم القومي سارية", "شهادة ميلاد كمبيوتر", "3 صور شخصية خلفية بيضاء"] },
    { name: "تحديث بيانات بطاقة التموين", documents: ["بطاقة الرقم القومي", "البطاقة التموينية الأصلية", "إثبات دخل أو مستند رسمي"] }
];

function displayServices() {
    const serviceContainer = document.getElementById("services");
    serviceContainer.innerHTML = "";
    services.forEach(service => {
        let serviceDiv = document.createElement("div");
        serviceDiv.classList.add("service");
        serviceDiv.innerHTML = `<h3>${service.name}</h3><ul>` + service.documents.map(doc => `<li>${doc}</li>`).join('') + `</ul>`;
        serviceContainer.appendChild(serviceDiv);
    });
}

function searchService() {
    let query = document.getElementById("search").value.toLowerCase();
    const serviceContainer = document.getElementById("services");
    serviceContainer.innerHTML = "";
    services.filter(service => service.name.includes(query)).forEach(service => {
        let serviceDiv = document.createElement("div");
        serviceDiv.classList.add("service");
        serviceDiv.innerHTML = `<h3>${service.name}</h3><ul>` + service.documents.map(doc => `<li>${doc}</li>`).join('') + `</ul>`;
        serviceContainer.appendChild(serviceDiv);
    });
}


displayServices();
// Serivce End

// btn
function goToHome() {
    window.location.href = "index.html"; 
  }
//   btn scrool 
const scrollToTopBtn = document.getElementById("scrollToTop");

window.onscroll = function () {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
};

scrollToTopBtn.onclick = function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
};

