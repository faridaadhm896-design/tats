function showTime() {
    const date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    
    // تحويل إلى تنسيق 12 ساعة
    hours = hours % 12;
    hours = hours ? hours : 12;
    
    // إضافة صفر أمام الأرقام المفردة
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    
    const timeString = hours + ':' + minutes + ':' + seconds + ' ' + ampm;
    document.getElementById('clock').innerText = timeString;
    
    // عرض التاريخ
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const dateString = date.toLocaleDateString('ar-EG', options);
    document.getElementById('date').innerText = dateString;
    
    setTimeout(showTime, 1000);
}

// بدء تشغيل الساعة عند تحميل الصفحة
window.onload = showTime;