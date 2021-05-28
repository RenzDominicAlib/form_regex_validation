		const signinForm = document.querySelector('.sign-in');
		// console.log(signinForm);
		const feedBack = document.querySelector('.feedback');
		// console.log(feedBack);


		signinForm.addEventListener('submit' , function(e){	
			e.preventDefault();
			// console.log(e);
			// console.log(signinForm.username.value);

		//validation local scope////
			const usernameValue = signinForm.username.value;
			const usernamePattern = /^[a-zA-Z0-9]{6,10}$/gm;
			let usernameMatch = usernamePattern.test(usernameValue);

			if (usernameMatch) {
				// console.log(signinForm.username.value);
				feedBack.textContent = 'Username Accepted';
				feedBack.classList.add('success'); 
				feedBack.classList.remove('error'); 
			}
			else{
				// console.log('Username Invalid');
				feedBack.textContent = 'Username is Invalid';
				feedBack.classList.add('error'); 
				feedBack.classList.remove('success');
			}
		});


//testing RegEx///////////////////////////////////

	// const inputUname = 'shaun12@';
	// const pattern = /^[a-zA-Z0-9]{6,10}$/gm

	// let result = pattern.test(inputUname);
	// // console.log(result);

	// if (result) {
	// 	console.log('inputname is acceptable');
	// }
	// else{
	// 	console.log('inputname is invalid');
	// }

///////////////////////////////////////////////////

//LIVE Feedback event (keyup)

	const usernameField = signinForm.username;

	usernameField.addEventListener('keyup' , function(e){
		// console.log(e);
		// console.log(e.target.value , signinForm.username.value);

		const usernameValue = signinForm.username.value;
		const usernamePattern = /^[a-zA-Z0-9]{6,10}$/gm;
		let usernameMatch = usernamePattern.test(usernameValue);

		if (usernameMatch) {
			console.log('live Valid');
			usernameField.setAttribute('class' , 'liveValid');		
		}
		else{		
			console.log('live Invalid');
			usernameField.setAttribute('class' , 'liveInvalid');
		}
	});
