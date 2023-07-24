<script>
	let text =
		'Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard▎';
	setInterval(() => {
		text = `${text.slice(0, -2)}▎`;
	}, 500);
</script>

{text}
