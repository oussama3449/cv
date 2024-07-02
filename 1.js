document.getElementById('infoButton').addEventListener('click', function() {
 
    document.getElementById('infoText').style.display = 'block';
});

document.getElementById('infoButton').addEventListener('mouseover', function() {
   
    document.getElementById('infoButton').style.backgroundColor = '#0056b3';
});

document.getElementById('infoButton').addEventListener('mouseout', function() {
   
    document.getElementById('infoButton').style.backgroundColor = '#007bff';
});
 
 document.getElementById('infoButton2').addEventListener('click', function() {
    
    document.getElementById('infoText2').style.display = 'block';
});


document.getElementById('infoButton2').addEventListener('mouseover', function() {
   
    document.getElementById('infoButton2').style.backgroundColor = '#0056b3';
});


document.getElementById('infoButton2').addEventListener('mouseout', function() {
   
    document.getElementById('infoButton2').style.backgroundColor = '#007bff';
});

   document.getElementById('infoButton3').addEventListener('click', function() {
    document.getElementById('infoText3').style.display = 'block';
});

document.getElementById('infoButton3').addEventListener('mouseover', function() {
    document.getElementById('infoButton3').style.backgroundColor = '#0056b3';
});


document.getElementById('infoButton3').addEventListener('mouseout', function() {
    document.getElementById('infoButton3').style.backgroundColor = '#007bff';
});



infoButton4.addEventListener('click', function() {
    // تحديد العنوان الذي ترغب في الانتقال إليه
    var otherSiteUrl = 'https://www.facebook.com/p/%D9%85%D8%B1%D9%83%D8%B2-%D8%A7%D9%84%D8%AA%D9%83%D9%88%D9%8A%D9%86-%D8%A7%D9%84%D9%85%D9%87%D9%86%D9%8A-%D9%88%D8%A7%D9%84%D8%AA%D9%85%D9%87%D9%8A%D9%86-%D8%A7%D9%84%D8%B4%D9%87%D9%8A%D8%AF-%D8%AD%D9%85%D8%B1%D8%A7%D9%88%D9%8A-%D9%85%D8%AD%D9%85%D8%AF-%D8%AC%D8%B3%D8%B1%D9%82%D8%B3%D9%86%D8%B7%D9%8A%D9%86%D8%A9-%D8%A7%D9%84%D8%AC%D8%B2%D8%A7%D8%A6%D8%B1-100067471292962/'; 
    // فتح الموقع الآخر في نافذة جديدة
    window.open(otherSiteUrl, '_blank');
});










