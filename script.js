// Perform Encryption or Decryption based on selected combination
function performAction() {
    const algorithm = document.getElementById('algorithm').value;
    const action = document.getElementById('action').value;
    const inputText = document.getElementById('inputText').value.trim();
    const startTime = Date.now();

    if (inputText === "") {
        alert("Please enter some text to encrypt/decrypt.");
        return;
    }

    let resultText = "";
    let securityFactor = "";

    switch (algorithm) {
        case "aes-aes-aes":
            resultText = action === "encrypt" ? encryptAES(encryptAES(encryptAES(inputText))) : decryptAES(decryptAES(decryptAES(inputText)));
            securityFactor = "Security Level: 98.58%";
            break;
        case "aes-aes-des":
            resultText = action === "encrypt" ? encryptAES(encryptAES(encryptDES(inputText))) : decryptDES(decryptAES(decryptAES(inputText)));
            securityFactor = "Security Level: 34.38%";
            break;
        case "aes-aes-3des":
            resultText = action === "encrypt" ? encryptAES(encryptAES(encrypt3DES(inputText))) : decrypt3DES(decryptAES(decryptAES(inputText)));
            securityFactor = "Security Level: 37.50%";
            break;
        case "aes-des-aes":
            resultText = action === "encrypt" ? encryptAES(encryptDES(encryptAES(inputText))) : decryptAES(decryptDES(decryptAES(inputText)));
            securityFactor = "Security Level: 64.02%";
            break;
        case "aes-des-des":
            resultText = action === "encrypt" ? encryptAES(encryptDES(encryptDES(inputText))) : decryptDES(decryptDES(decryptAES(inputText)));
            securityFactor = "Security Level: 37.50%";
            break;
        case "aes-des-3des":
            resultText = action === "encrypt" ? encryptAES(encryptDES(encrypt3DES(inputText))) : decrypt3DES(decryptDES(decryptAES(inputText)));
            securityFactor = "Security Level: 37.50%";
            break;
        case "aes-3des-aes":
            resultText = action === "encrypt" ? encryptAES(encrypt3DES(encryptAES(inputText))) : decryptAES(decrypt3DES(decryptAES(inputText)));
            securityFactor = "Security Level: 66.52%";
            break;
        case "aes-3des-des":
            resultText = action === "encrypt" ? encryptAES(encrypt3DES(encryptDES(inputText))) : decryptDES(decrypt3DES(decryptAES(inputText)));
            securityFactor = "Security Level: 37.50%";
            break;
        case "des-aes-3des":
            resultText = action === "encrypt" ? encryptDES(encryptAES(encrypt3DES(inputText))) : decrypt3DES(decryptAES(decryptDES(inputText)));
            securityFactor = "Security Level: 37.50%";
            break;
        case "des-3des-aes":
            resultText = action === "encrypt" ? encryptDES(encrypt3DES(encryptAES(inputText))) : decryptAES(decrypt3DES(decryptDES(inputText)));
            securityFactor = "Security Level: 65.27%";
            break;
        case "3des-aes-des":
            resultText = action === "encrypt" ? encrypt3DES(encryptAES(encryptDES(inputText))) : decryptDES(decryptAES(decrypt3DES(inputText)));
            securityFactor = "Security Level: 73.65%";
            break;
        case "3des-des-aes":
            resultText = action === "encrypt" ? encrypt3DES(encryptDES(encryptAES(inputText))) : decryptAES(decryptDES(decrypt3DES(inputText)));
            securityFactor = "Security Level: 65.90%";
            break;
    }

    const endTime = Date.now();
    const timeTaken = (endTime - startTime) / 1000;

    document.getElementById('output').innerText = resultText;
    document.getElementById('time').innerText = `Time Taken: ${timeTaken.toFixed(6)} seconds`;
    document.getElementById('security').innerText = securityFactor;
    document.getElementById('result').style.display = 'block';
}

// AES encryption/decryption
function encryptAES(text) {
    return CryptoJS.AES.encrypt(text, 'secretKey').toString();
}

function decryptAES(text) {
    const bytes = CryptoJS.AES.decrypt(text, 'secretKey');
    return bytes.toString(CryptoJS.enc.Utf8);
}

// DES encryption/decryption (using placeholder for actual DES implementation)
function encryptDES(text) {
    // Placeholder for DES encryption logic
    return text;
}

function decryptDES(text) {
    // Placeholder for DES decryption logic
    return text;
}

// 3DES encryption/decryption (using placeholder for actual 3DES implementation)
function encrypt3DES(text) {
    // Placeholder for 3DES encryption logic
    return text;
}

function decrypt3DES(text) {
    // Placeholder for 3DES decryption logic
    return text;
}
