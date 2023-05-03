window.onload = function(){
	let windowHeight = window.innerHeight;
	//let scrollPosi = (windowHeight / 5) * 4 ;	//5/4지점에서 애니메이션 작동
	let scrollPosi = windowHeight;	

	function fadeUp(){
		
		//let	sPosi = window.pageYOffset;

		//console.log('sPosi : ' + sPosi)
		//let sBPosi = sPosi + winH; //스크롤의 최하단값
		//let sMPosi = sPosi + winH_half;
		const fadeUpTarget = document.querySelectorAll('.fadeUp');

		if (fadeUpTarget) {
			for(let i = 0; i < fadeUpTarget.length; i++){
				let currentTarget =  fadeUpTarget[i];
				let currentTargetTop = fadeUpTarget[i].getBoundingClientRect().top;

				if(currentTargetTop < scrollPosi) {
					currentTarget.classList.add('active');
				} else {
					currentTarget.classList.remove('active');
				}
			}

		}
	}

	function fadeLeft(){
		const fadeLeftTarget = document.querySelectorAll('.fadeLeft');

		if (fadeLeftTarget) {
			for(let i = 0; i < fadeLeftTarget.length; i++){
				let currentTarget =  fadeLeftTarget[i];
				let currentTargetTop = fadeLeftTarget[i].getBoundingClientRect().top;

				if(currentTargetTop < scrollPosi) {
					currentTarget.classList.add('active');
				} else {
					currentTarget.classList.remove('active');
				}
			}

		}
	} 
	 
	function fadeRight(){
		const fadeRightTarget = document.querySelectorAll('.fadeRight');

		if (fadeRightTarget) {
			for(let i = 0; i < fadeRightTarget.length; i++){
				let currentTarget =  fadeRightTarget[i];
				let currentTargetTop = fadeRightTarget[i].getBoundingClientRect().top;

				if(currentTargetTop < scrollPosi) {
					currentTarget.classList.add('active');
				} else {
					currentTarget.classList.remove('active');
				}
			}

		}
	} 




	//로딩 시 함수 실행
	fadeUp();
	fadeRight();
	fadeLeft();

    
	//스크롤 시 함수 실행
	window.addEventListener('scroll', function(){
		fadeUp();
		fadeRight();
		fadeLeft();
	});


	//반응형 대비
	window.addEventListener('resize',function(){
		winH = window.innerHeight;
		winH_half = winH / 2;
	});

};