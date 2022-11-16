a= new Date(); 
        a.getHours()
        let time=a.getHours()+":"+a.getMinutes()+":"+a.getSeconds();
        let date = a.toLocaleDateString();

document.getElementById('time').innerHTML = date + time;
