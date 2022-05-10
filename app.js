var baseapi = "https://api.iptrooper.net/check/";
var texboxt = document.querySelector(".verigir");
var vericek = document.querySelector(".btn-lg")
var alertkt = document.querySelector(".hatagonder")
var esitle = document.querySelector(".list-group")

function regexKontrol(ipaddress) {
    if (/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(ipaddress)) {
        return (true)
    }
    console.log("IP address formati hatali!")
    return (false)
}

vericek.addEventListener("click",(e=>{
    let ipgiris = regexKontrol(texboxt.value)


    if(ipgiris){ 
        Swal.fire(
            'İstek Alındı !',
            'You clicked the button!',
            'success'
          )
        e.target.classList.contains('btn-light')
        e.target.classList.remove('btn-light')
        e.target.classList.add('btn-success')
        alertkt.innerHTML="Veri Getirildi";
    fetch(`${baseapi}${texboxt.value}?full=1`)
        .then(res=>res.json())
        .then(data=>{
            esitle.children[1].innerHTML=`Sıra No: ${data.asn} `
            esitle.children[2].innerHTML=`Ülke Verisi :  ${data.country} `
            esitle.children[3].innerHTML=`İp Sahibi : ${data.name} `
            esitle.children[4].innerHTML=`Geçit Türü : ${data.type} `
            esitle.children[5].innerHTML=`İstenilen İp : ${data.ipaddress} `
        })
    }
    else{
        Swal.fire(
            'Bir Sorun var!',
            'You clicked the button!',
            'error'
          )
            e.target.classList.contains('btn-light')
            e.target.classList.remove('btn-light')
            e.target.classList.add('btn-danger')
            alertkt.innerHTML="İP address formati hatali";
    }
}))