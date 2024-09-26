// Test the simulation with different vaccine amounts and population sizes
console.log("\nTesting with different scenarios:");

// Scenario 1: Enough vaccines for the population
population = 50;
vaccines = 60;
console.log(`Population: ${population}, Vaccines: ${vaccines}`);
runSimulation();

// Scenario 2: Not enough vaccines for the population
population = 150;
vaccines = 100;
console.log(`Population: ${population}, Vaccines: ${vaccines}`);
runSimulation();

// Define a function to run the simulation
function runSimulation() {
    let distributedVaccines = 0;
    while (vaccines > 0 && distributedVaccines < population) {
      vaccines--;
      distributedVaccines++;
      console.log(`Vaccine distributed to person ${distributedVaccines}. Remaining vaccines: ${vaccines}`);
    }
    if (distributedVaccines === population) {
      console.log("All vaccines have been distributed to the entire population.");
    } else {
      console.log(`Only ${distributedVaccines} vaccines were distributed. ${population - distributedVaccines} people did not receive a vaccine.`);
    }
    console.log("\n");
  }
