function contatoWhatsApp() {
    const phoneNumber = '5575981518007'; // Substitua com o número correto
    const message = "Olá, gostaria de fazer um orçamento com vocês.";
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
}
