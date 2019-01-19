function abjad(baris, kolom){
	var cetak = '',
	number = 0;
	abjad = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
	for(var i = 0; i < baris; i++){
		for(var j = 0; j < kolom; j++){
			cetak += abjad[number];
			cetak += ' ';
			number += 1;
		}
	cetak += '\n';
	}
	return cetak;
}

console.log(abjad(3,4));