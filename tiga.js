function drawKotak(panjangPersegi){
	var cetak = '';
	for(var i = 0; i < panjangPersegi; i++){
		for(var j = 0; j < panjangPersegi; j++){
			if(i % 2 == 0 && j % 2 == 0){
				cetak += '*';
			}
			else if(i % 2 == 1 && j % 2 == 1){
				cetak += '*';
			}
			else{
				cetak += '-';
			}
		}
		cetak += '\n';
	}
	return cetak;
}

console.log(drawKotak(7));
console.log(drawKotak(5));