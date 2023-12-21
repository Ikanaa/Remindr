// Initialisation
const { PrismaClient } = require('./generated/client');
const prisma = new PrismaClient();

// CREATE USER
async function createUser(username, email) {
  const newUser = await prisma.Utilisateur.create({
    data: {
      username,
      email,
    },
  });

  console.log('New user created:', newUser);
}

// CREATE REMINDER
async function createReminder(reminder) {
  const newReminder = await prisma.Reminder.create({
    data: {
      title: reminder.title,
      body: reminder.body,
      expiration: reminder.expiration,
      creation: reminder.creation,
      color: reminder.color,
      author: reminder.author,
      groupe: {
        connect: { id: reminder.groupeId }, // Replace with the actual field name in Reminder model
      },
    },
  });

  console.log('New reminder created:', newReminder);
}

// Get reminder by ID
async function getReminderById(idRemin) {
  const reminder = await prisma.Reminder.findUnique({
    where: { id: idRemin },
  });

  if (reminder) {
    console.log('Reminder found:', reminder);
    return reminder;
  } else {
    console.log('Reminder not found');
    return null;
  }
}

// Get all reminders for a user by ID
async function getRemindersForUser(userId) {
  const user = await prisma.Utilisateur.findUnique({
    where: { id: userId },
    include: {
      UserXGroup: {
        include: {
          Groupe: {
            include: {
              Reminder: true,
            },
          },
        },
      },
    },
  });

  const allReminders = [];

  user.UserXGroup.forEach((userXGroup) => {
    userXGroup.Groupe.Reminder.forEach((reminder) => {
      allReminders.push(reminder);
    });
  });

  return allReminders;
}

// Get all groups for a user
async function getGroupsForUser(userId) {
  const user = await prisma.Utilisateur.findUnique({
    where: { id: userId },
    include: {
      UserXGroup: {
        include: {
          Groupe: true,
        },
      },
    },
  });

  const userGroups = user.UserXGroup.map((userXGroup) => userXGroup.Groupe);
  return userGroups;
}

// Delete remmindr by ID

async function deleteRemmindr(reminderId) {
  const deletedReminder = await prisma.Reminder.delete({
    where: { id: reminderId },
  });
}

// Delete group by ID
// je pars du principe que cette fonction ne peut etre appeller que par l'owner
async function deleteGroup(groupId){
        // Supprime tous les rappels liés au groupe
        await prisma.Reminder.deleteMany({
          where: {
            groupeid: groupId,
          },
        });

      // Supprime tous les liens (UserXGroup) avec d'autres utilisateurs
      await prisma.UserXGroup.deleteMany({
        where: {
          groupid: groupId,
        },
      });

      // supprime le groupe lui-même
      const deletedGroup = await prisma.Groupe.delete({
        where: { id: groupId },
      });        
}


async function deleteUserById(userId) {
  
    // Récupérer tous les groupes dont l'utilisateur est propriétaire
    const userOwnedGroups = await prisma.Groupe.findMany({
      where: { ownerid: userId },
      include: {
        UserXGroup: true,
      },
    });

    // Supprimer tous les rappels liés aux groupes dont l'utilisateur est propriétaire
    for (const userOwnedGroup of userOwnedGroups) {
      await prisma.Reminder.deleteMany({
        where: {
          groupeid: userOwnedGroup.id,
        },
      });
    }

    // Supprimer tous les liens (UserXGroup) de l'utilisateur
    await prisma.UserXGroup.deleteMany({
      where: {
        userid: userId,
      },
    });

    // Supprimer tous les groupes dont l'utilisateur est propriétaire
    await prisma.Groupe.deleteMany({
      where: {
        ownerid: userId,
      },
    });

    // Enfin, supprimer l'utilisateur lui-même
    const deletedUser = await prisma.Utilisateur.delete({
      where: { id: userId },
    });

    console.log('User and associated elements deleted:', deletedUser);

}

