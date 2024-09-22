function calculateGLBB() {
	// Get user input values and convert them to numbers
	let initialVelocity = parseFloat(document.getElementById("initial-velocity").value);
	let acceleration = parseFloat(document.getElementById("acceleration").value);
	let time = parseFloat(document.getElementById("time").value);
	
	// Calculate final velocity
	let finalVelocity = initialVelocity + (acceleration * time);
	
	// Calculate displacement
	let displacement = (initialVelocity * time) + (0.5 * acceleration) * (time * time);
	
	// Display results
	document.getElementById("final-velocity").innerHTML = finalVelocity + " m/s";
	document.getElementById("displacement").innerHTML = displacement + " m";
}
