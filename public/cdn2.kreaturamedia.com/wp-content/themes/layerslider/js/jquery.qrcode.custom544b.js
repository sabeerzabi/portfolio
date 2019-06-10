jQuery(document).ready(function() {
	jQuery('#qrcode').qrcode({
		width: 150,
		height: 150,
		text: document.location.href
	});
});