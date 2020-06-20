function judge() {
    console.log("ok");

    const kashitsu = document.form1.kashitsu;

    var kashitsu_flag = "";
    for (let i = 0; i < kashitsu.length; i++){
		if(kashitsu[i].checked){
            kashitsu_flag = kashitsu[i].value;
			break;
		}
	}
  console.log(kashitsu_flag);

  const space = document.form1.space.value;
  console.log(space);

  if (kashitsu_flag == "ari") {
        aircon.innerHTML='<img src="image/aircon_blue.png" width="50%">';
    } else {
        aircon.innerHTML='<img src="image/aircon_white.png" width="50%">';
    }
}
