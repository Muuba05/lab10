import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handle(req, res) {
    const tasks = await prisma.task.findMany({
        include: {
            client: true,  // Include related client data
            staff: true,  // Include related staff data
            priority: true,  // Include related priority data
            task_status: true,  // Include related status data
        }
    });
    res.json(tasks);
}

