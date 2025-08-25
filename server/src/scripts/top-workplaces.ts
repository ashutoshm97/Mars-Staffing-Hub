// Import required dependencies
import { PrismaClient } from '@prisma/client';

// Initialize the Prisma Client
const prisma = new PrismaClient();

/**
 * Finds and prints the top 3 most active workplaces based on non-cancelled shifts
 */
async function findTopWorkplaces() {
  try {
    // Get total count of workplaces and shifts for verification
    const totalWorkplaces = await prisma.workplace.count();
    const totalShifts = await prisma.shift.count();
    
    // Check if we have any data to process
    if (totalWorkplaces === 0) {
      console.log('No workplaces found. Please seed the database first.');
      return;
    }

    // Fetch all workplaces with their associated non-cancelled shifts
    const workplaces = await prisma.workplace.findMany({
      include: {
        shifts: {
          where: {
            cancelledAt: null,  // Only count non-cancelled shifts
          },
          select: {
            id: true,  // We only need the shift IDs for counting
          },
        },
      },
    });

    // Process and sort workplaces by shift count
    const topWorkplaces = workplaces
      .map(workplace => ({
        name: workplace.name,
        shifts: workplace.shifts.length,  // Count shifts per workplace
      }))
      .sort((a, b) => b.shifts - a.shifts)  // Sort in descending order
      .slice(0, 3);  // Take top 3

    // Output the results in the required format
    console.log('Top 3 workplaces by shift count:');
    console.log(JSON.stringify(topWorkplaces, null, 2));

  } catch (error) {
    console.error('An error occurred:', error);
    process.exit(1);
  } finally {
    // Clean up database connection
    await prisma.$disconnect();
  }
}

// Execute the main function
findTopWorkplaces();