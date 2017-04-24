angular.module('myApp')
.value('QList',function(){
	return {
		'1_a': {
			'title': '1_A',
			'str': 'お好み焼きにご飯は許せない',
			'yes':'2_b',
			'no':'2_c'
		},
		'2_b': {
			'title': '2_B',
			'str': 'シチューにご飯はぜんぜんアリ',
			'yes':'3_d',
			'no':'3_e'
		},
		'2_c': {
			'title': '2_C',
			'str': 'うどんよりそばが好き',
			'yes':'3_e',
			'no':'3_f'
		},
		'3_d': {
			'title': '3_D',
			'str': '料理の写真をよくSNSに投稿する',
			'yes':'4_g',
			'no':'4_h'
		},
		'3_e': {
			'title': '3_E',
			'str': '朝食はパンよりご飯派である',
			'yes':'4_g',
			'no':'4_i'
		},
		'3_f': {
			'title': '3_F',
			'str': '脂っぽい料理にハマっている',
			'yes':'4_h',
			'no':'4_i'
		},
		'4_g': {
			'title': '4_G',
			'str': 'BBQをするなら山より海',
			'yes':'result/ryoma',
			'no':'result/nobunaga'
		},
		'4_h': {
			'title': '4_H',
			'str': '好きな物は最後にとっておく',
			'yes':'result/rosanjin',
			'no':'result/napoleon'
		},
		'4_i': {
			'title': '4_I',
			'str': '日々の食事に食物繊維の摂取は欠かせない',
			'yes':'result/marry',
			'no':'result/patra'
		}
	};
})
.value('resultList',function(){
	return {
		'nobunaga': {
			'title': '織田信長',
			'str': 'hogehoge'
		},
		'marry': {
			'title': 'マリーアントワネット',
			'str': 'hogehoge'
		},
		'patra': {
			'title': 'クレオパトラ',
			'str': 'hogehoge'
		},
		'ryoma': {
			'title': '坂本龍馬',
			'str': 'hogehoge'
		},
		'napoleon': {
			'title': 'ナポレオン',
			'str': 'hogehoge'
		},
		'rosanjin': {
			'title': '北大路魯山人',
			'str': 'hogehoge'
		},
	};
});
