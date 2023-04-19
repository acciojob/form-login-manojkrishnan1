function getFormvalue() {
		    let elements = document.querySelectorAll('#form1>input');
            const firstName = elements[0];
            const lastName = elements[1];
            alert(firstName.value +' '+ lastName.value);
}
