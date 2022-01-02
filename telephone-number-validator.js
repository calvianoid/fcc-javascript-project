function telephoneCheck(str) {
    const rules = /^(1)?( )?(\d{3}|\(\d{3}\))([- ])?(\d{3})([- ])?(\d{4})$/;
    return rules.test(str);
}

telephoneCheck("555-555-5555");

// 555-555-5555
// (555)555-5555
// (555) 555-5555
// 555 555 5555
// 5555555555
// 1 555 555 5555
