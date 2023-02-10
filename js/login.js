const n = localStorage.getItem('nm')
if (n) {
	document.querySelector('.input').value = n
}


class Login {
	constructor(form, fields) {
		this.form = form;
		this.fields = fields;
		this.validateonSubmit();
	}

	validateonSubmit() {
		let self = this;

		this.form.addEventListener("submit", (e) => {
			e.preventDefault();
			var error = 0;
			
			if (error == 0) {
				//do login api here

				const name = document.querySelector('input')
  				localStorage.setItem('nm', name.value)

				localStorage.setItem("auth", 1);
				this.form.submit();


			}
		});
	}

	

	setStatus(field, message, status) {
		const errorMessage = field.parentElement.querySelector(".error-message");

		if (status == "success") {
			if (errorMessage) {
				errorMessage.innerText = "";
			}
			field.classList.remove("input-error");
		}

		if (status == "error") {
			errorMessage.innerText = message;
			field.classList.add("input-error");
		}
	}
}

const form = document.querySelector(".loginForm");
if (form) {
	const fields = ["username"];
	const validator = new Login(form, fields);
}


