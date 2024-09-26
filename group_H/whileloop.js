// Simulate the distribution process using a while loop
let distributedVaccines = 0;
while (vaccines > 0 && distributedVaccines < population) {
  // Distribute one vaccine at a time
  vaccines--;
  distributedVaccines++;
  console.log(`Vaccine distributed to person ${distributedVaccines}. Remaining vaccines: ${vaccines}`);
}

// Print the final result
if (distributedVaccines == population) {
    console.log("All vaccines have been distributed to the entire population.");
  } else {
    console.log(`Only ${distributedVaccines} vaccines were distributed. ${population - distributedVaccines} people did not receive a vaccine.`);
  }
  