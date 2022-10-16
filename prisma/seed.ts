import { PrismaClient, Prisma } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const genresToSeed: Prisma.GenreCreateInput[]=[
    {name:"Heavy Metal"},
    {name:"Power Metal"},
    {name:"Death Metal"},
    {name:"Black Metal"},
    {name:"Progressive Metal"},
    {name:"Glam Metal"},
    {name:"Avant-garde"},
    {name:"Experimental"},
    {name:"Math Rock"},
    {name:"Progressive Rock"},
    {name:"Instrumental Rock"},
    {name:"Ambient"}
  ]

  const bandsToSeed :Prisma.BandCreateInput[]=[
    {name:"Opeth"},
    {name:"American Football"},
    {name:"Ratt"},
    {name:"Between the Buried and Me"},
    {name:"Lantlos "},
    {name:"Unleash the archers"},
    {name:"Steel Panther"},
    {name:"Rat"},
    {name:"Morbid Angel"},
    {name:"Burzum"},
    {name:"Ulver"},
    {name:"Carach Angren"},
    {name:"Blood Incantation"},
    {name:"Scar Symmetry"},
    {name:"Amaranthe"},
    {name:"Steel Panther"},
    {name:"Porcupine Tree"},
    {name:"The Aristocrats"},
    {name:"Steven Wilson"},
    {name:"maudlin of the Well"},
    {name:"Jason Becker"},
    {name:"Vinnie Moore"},
    
  ]
    for (const el of genresToSeed) {
      const genre = await prisma.genre.create({
        data: el
      })
    }
    for (const el of bandsToSeed) {
      const genre = await prisma.band.create({
        data: el
      })
    }
    
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });